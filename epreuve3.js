
const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }
                


fetch('./ep3.json')
  .then(res => res.json())
  .then(json => {
    const n = Math.floor(Math.random() * json.length);
    const question = document.querySelector('.milieu');
    const answers = document.querySelectorAll('.R');

    question.innerHTML = json[n].question;

    answers.forEach((proposition, index) => {
      proposition.innerHTML = json[n].choices[index];

      // On supprime les anciens écouteurs pour éviter les doublons
      proposition.replaceWith(proposition.cloneNode(true));
    });

    // Re-sélectionner les éléments clonés
    const updatedAnswers = document.querySelectorAll('.R');

    updatedAnswers.forEach(proposition => {
      proposition.addEventListener('click', () => {
        if (proposition.textContent === json[n].answer) {
          proposition.classList.add('right');
        } else {
          proposition.classList.add('wrong');
        }
      });
    });
  })
  .catch(error => {
    console.error('Erreur lors du chargement du quiz :', error);
  })

let pointo = 0;
let pointoA = 0;
let points = document.querySelector(".points");
let pointsA = document.querySelector(".pointsA");
points.textContent = pointo;
pointsA.textContent = pointoA;

let secondes = 30;
let contraintes = 0;
let intID1;
let intervalID;
let enCours = false; // état du chrono

function startChrono() {
  intervalID = setInterval(() => {
    secondes--;
    document.querySelector(".buzzer").textContent = secondes;

    if (secondes <= 0) {
      clearInterval(intervalID);
      enCours = false; // chrono terminé
    }
  }, 1000);
}

function stopChrono() {
  clearInterval(intervalID);
  enCours = false;
}
function IntTol (){
  intID1 = setInterval(() => {
    contraintes++;
    if ( contraintes >= 7) {
      startChrono();
      clearInterval(intID1);
    }
  }, 1000);
}
// Un seul bouton
let Bouton = document.querySelector(".buzzer");
Bouton.textContent = secondes;

Bouton.addEventListener("click", () => {
  if (!enCours) {
    if (secondes <= 0) {
      // si le chrono est arrêté → on repart de 30
      secondes = 30;
      Bouton.textContent = secondes;
      startChrono();
    } else {
      Bouton.textContent = secondes;
      startChrono();
    }
    enCours = true;
  } else {
    // si le chrono est en cours → on l’arrête
    stopChrono();
    IntTol();
  }
});

