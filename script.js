const questions = [
  {
    question: "Quel est le nom du hibou d'Harry Potter ?",
    options: ["Hedwige", "Croûtard", "Norbert", "Buck"],
    answer: "Hedwige"
  },
  {
    question: "Quelle est la maison d'Harry Potter à Poudlard ?",
    options: ["Serpentard", "Gryffondor", "Poufsouffle", "Serdaigle"],
    answer: "Gryffondor"
  },
  {
    question: "Quel est le sortilège préféré d'Harry Potter ?",
    options: ["Expelliarmus", "Avada Kedavra", "Wingardium Leviosa", "Crucio"],
    answer: "Expelliarmus"
  },
  {
    question: "Qui est le meilleur ami d'Harry Potter ?",
    options: ["Drago Malefoy", "Cedric Diggory", "Ron Weasley", "Neville Londubat"],
    answer: "Ron Weasley"
  },
  {
    question: "Quel est le nom du professeur de potions à Poudlard ?",
    options: ["Albus Dumbledore", "Minerva McGonagall", "Severus Rogue", "Rubeus Hagrid"],
    answer: "Severus Rogue"
  },
  {
    question: "Quel est le nom du chien à trois têtes qui garde la pierre philosophale ?",
    options: ["Touffu", "Crockdur", "Norbert", "Buck"],
    answer: "Touffu"
  },
  {
    question: "Quel est le nom du train qui emmène les élèves à Poudlard ?",
    options: ["Poudlard Express", "Le Magicobus", "Le Sombrard Express", "Le Chemin de Traverse Express"],
    answer: "Poudlard Express"
  },
  {
    question: "Quel est le nom de la banque des sorciers ?",
    options: ["Gringotts", "Azkaban", "Poudlard", "Le Terrier"],
    answer: "Gringotts"
  },
  {
    question: "Quel est le nom du jeu de sorciers joué sur des balais ?",
    options: ["Quidditch", "Broomball", "Wizardball", "Sorciers Volants"],
    answer: "Quidditch"
  },
  {
    question: "Quel est le nom du mage noir qui a tué les parents d'Harry ?",
    options: ["Lord Voldemort", "Lucius Malefoy", "Bellatrix Lestrange", "Peter Pettigrow"],
    answer: "Lord Voldemort"
  }
];

let currentQuestion = 0;
let score = 0;
let shuffledQuestions; // Tableau pour stocker les questions mélangées

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next");
const resultElement = document.getElementById("result");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function loadQuestion() {
  if (currentQuestion < shuffledQuestions.length) {
    const question = shuffledQuestions[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(option));
      optionsElement.appendChild(button);
    });
  } else {
    showResult();
  }
}

function checkAnswer(answer) {
  if (answer === shuffledQuestions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  loadQuestion();
}

function showResult() {
  questionElement.style.display = "none";
  optionsElement.style.display = "none";
  nextButton.style.display = "none";
  resultElement.textContent = `Votre score est de ${score} sur ${shuffledQuestions.length}`;
}

// Mélanger les questions au chargement de la page
shuffledQuestions = [...questions]; // Copier le tableau original
shuffleArray(shuffledQuestions);

loadQuestion();