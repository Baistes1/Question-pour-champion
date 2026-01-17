// ===================================
// CONSTANTES & ÉLÉMENTS DOM
// ===================================
const starsContainer = document.getElementById('stars');
const t1 = document.querySelector(".t1");
const t2 = document.querySelector(".t2");
const t3 = document.querySelector(".t3");
const t4 = document.querySelector(".t4");
const ecran = document.querySelector(".ecran");
const choix = document.querySelector(".choice-screen");
const buzz = document.querySelector(".buzzer");
const maDiv = document.querySelector(".milieu");
const btn = document.querySelector(".bas");
const scoreDisplay = document.querySelector(".points");
const pseudo1Display = document.querySelector(".pseudo1");
const pseudo2Display = document.querySelector(".pseudo2");

// ===================================
// VARIABLES D'ÉTAT
// ===================================
let pseudo1 = "Joueur 1";
let pseudo2 = "Joueur 2";
let mainActuelle = null;
let secondes = 30;
let intervalID;
let enCours = false;
let points = 0;
let erreurs = 0;
let reponsesBloquees = false;
let questrep;

// ===================================
// INITIALISATION
// ===================================
function init() {
  createStars();
  pseudo1Display.textContent = pseudo1;
  pseudo2Display.textContent = pseudo2;
  buzz.textContent = secondes;
  choix.classList.remove("hidden");
  loadQuiz();
  setupBuzzerListener();
}

// ===================================
// ÉTOILES D'ARRIÈRE-PLAN
// ===================================
function createStars() {
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    starsContainer.appendChild(star);
  }
}

// ===================================
// GESTION DES BOXES
// ===================================
function setupBoxes() {
  [t1, t2, t3, t4].forEach(box => {
    box.classList.remove('left', 'droite', 'bleu');
  });
}

function inverserMain() {
  const boxAInverser = getNextYellowBox();
  
  if (!boxAInverser) return;
  
  const isLeft = boxAInverser.classList.contains('left');
  const isRight = boxAInverser.classList.contains('droite');
  
  if (mainActuelle === 'take' && isLeft) {
    boxAInverser.classList.remove('left');
    boxAInverser.classList.add('droite');
  } else if (mainActuelle === 'leave' && isRight) {
    boxAInverser.classList.remove('droite');
    boxAInverser.classList.add('left');
  }
}

function getNextYellowBox() {
  const boxes = [t4, t3, t2, t1];
  return boxes.find(box => !box.classList.contains('bleu'));
}

function positionBoxes(choice) {
  const positions = choice === 'take' 
    ? { left: [t4, t2], right: [t3, t1] }
    : { left: [t3, t1], right: [t4, t2] };
  
  positions.left.forEach(box => box.classList.add('left'));
  positions.right.forEach(box => box.classList.add('droite'));
}

// ===================================
// GESTION DES ÉCRANS
// ===================================
window.chooseHand = function(choice) {
  mainActuelle = choice;
  setupBoxes();
  
  // Afficher l'écran de jeu
  choix.classList.add("hidden");
  ecran.classList.remove("hidden");
  maDiv.classList.remove("hidden");
  buzz.classList.remove("hidden");
  
  positionBoxes(choice);
  
  // Réinitialiser l'état du jeu
  resetGameState();
  questrep();
  startChrono();
  enCours = true;
};

function afficherChoixMain() {
  stopChrono();
  ecran.classList.add("hidden");
  choix.classList.remove("hidden");
  maDiv.classList.add("hidden");
  btn.classList.add("hidden");
  buzz.classList.add("hidden");
}

// ===================================
// GESTION DU SCORE
// ===================================
function updateScore(x) {
  scoreDisplay.textContent = x;
}

function calculatePoints() {
  if (secondes > 17) return 4;
  if (secondes > 9) return 3;
  if (secondes > 4) return 2;
  if (secondes > 0) return 1;
  return 0;
}

// ===================================
// GESTION DU CHRONO
// ===================================
function startChrono() {
  resetBoxColors();
  
  clearInterval(intervalID);
  intervalID = setInterval(() => {
    secondes--;
    buzz.textContent = secondes;
    
    updateBoxColors();
    
    if (secondes <= 0) {
      t1.classList.add("bleu");
      afficherChoixMain();
    }
  }, 1000);
}

function stopChrono() {
  clearInterval(intervalID);
  enCours = false;
}

function resetBoxColors() {
  [t4, t3, t2, t1].forEach(box => box.classList.remove("bleu"));
}

function updateBoxColors() {
  if (secondes <= 17) t4.classList.add("bleu");
  if (secondes <= 10) t3.classList.add("bleu");
  if (secondes <= 4) t2.classList.add("bleu");
}

// ===================================
// GESTION DU QUIZ
// ===================================
function loadQuiz() {
  fetch('./ep3.json')
    .then(res => res.json())
    .then(json => {
      questrep = createQuestionHandler(json);
      questrep();
    })
    .catch(error => {
      console.error('Erreur lors du chargement du quiz :', error);
    });
}

function createQuestionHandler(json) {
  return function() {
    const question = document.querySelector('.milieu');
    let answers = document.querySelectorAll('.R');
    
    const n = Math.floor(Math.random() * json.length);
    const currentQuestion = json[n];
    
    question.innerHTML = currentQuestion.question;
    const bonneReponse = currentQuestion.answer;
    reponsesBloquees = false;
    
    // Renouveler les éléments de réponse
    answers = refreshAnswers(answers, currentQuestion.choices);
    
    // Attacher les gestionnaires d'événements
    attachAnswerHandlers(answers, bonneReponse);
  };
}

function refreshAnswers(answers, choices) {
  answers.forEach((node, index) => {
    const clone = node.cloneNode(true);
    clone.innerHTML = choices[index];
    node.replaceWith(clone);
  });
  return document.querySelectorAll('.R');
}

function attachAnswerHandlers(answers, bonneReponse) {
  answers.forEach(proposition => {
    proposition.addEventListener('click', () => {
      if (reponsesBloquees) return;
      
      if (proposition.textContent === bonneReponse) {
        handleCorrectAnswer(proposition);
      } else {
        handleWrongAnswer(proposition, answers, bonneReponse);
      }
    }, { once: false });
  });
}

function handleCorrectAnswer(proposition) {
  proposition.classList.add('right');
  
  points += calculatePoints();
  updateScore(points);
  
  if (points >= 15) {
    alert("Vous avez gagné!!!");
  }
  
  setTimeout(() => {
    proposition.classList.remove('right');
    afficherChoixMain();
  }, 500);
}

function handleWrongAnswer(proposition, answers, bonneReponse) {
  proposition.classList.add('wrong');
  erreurs++;
  
  setTimeout(() => {
    proposition.classList.remove('wrong');
  }, 300);
  
  if (erreurs === 1) {
    inverserMain();
    btn.classList.add("hidden");
    return;
  }
  
  if (erreurs >= 2) {
    handleSecondError(answers, bonneReponse);
  }
}

function handleSecondError(answers, bonneReponse) {
  reponsesBloquees = true;
  
  // Afficher la bonne réponse
  answers.forEach(rep => {
    if (rep.textContent === bonneReponse) {
      rep.classList.add('right');
    }
  });
  
  setTimeout(() => {
    answers.forEach(rep => rep.classList.remove('right'));
    afficherChoixMain();
  }, 4000);
}

// ===================================
// GESTION DU BUZZER
// ===================================
function setupBuzzerListener() {
  buzz.addEventListener("click", () => {
    maDiv.classList.remove("hidden");
    buzz.classList.add("hidden");
    btn.classList.remove("hidden");
    
    if (!enCours) {
      startChrono();
      enCours = true;
    } else {
      handleBuzzerPause();
    }
  });
}

function handleBuzzerPause() {
  stopChrono();
  buzz.classList.add("hidden");
  btn.classList.remove("hidden");
  
  setTimeout(() => {
    buzz.classList.remove("hidden");
    btn.classList.add("hidden");
    startChrono();
    inverserMain();
    enCours = true;
  }, 8000);
}

// ===================================
// UTILITAIRES
// ===================================
function resetGameState() {
  erreurs = 0;
  reponsesBloquees = false;
  secondes = 30;
  buzz.textContent = secondes;
}

// ===================================
// DÉMARRAGE
// ===================================
init();
