const starsContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  star.style.animationDelay = Math.random() * 3 + 's';
  starsContainer.appendChild(star);
}

const buzz = document.querySelector(".buzzer");
buzz.classList.remove("hidden");
const t1 = document.querySelector(".t1");
const t2 = document.querySelector(".t2");
const t3 = document.querySelector(".t3");
const t4 = document.querySelector(".t4");
let secondes = 30;
let intervalID;
let enCours = false;

const maDiv = document.querySelector(".milieu");
const btn = document.querySelector(".bas");

// Score
let points = 0;
const scoreDisplay = document.querySelector(".points");
function updateScore(x) {
  scoreDisplay.textContent = x;
}

function stopChrono() {
  clearInterval(intervalID);
  enCours = false;
}

// Quiz
let questrep;
let erreurs = 0;

fetch('./JSON/ep3.json')
  .then(res => res.json())
  .then(json => {
    const question = document.querySelector('.milieu');
    let answers = document.querySelectorAll('.R');

    questrep = function() {
      const n = Math.floor(Math.random() * json.length);
      question.innerHTML = json[n].question;

      // IMPORTANT: supprimer tous les anciens écouteurs en clonant les nœuds
      answers.forEach((node, index) => {
        const clone = node.cloneNode(true);
        clone.innerHTML = json[n].choices[index];
        node.replaceWith(clone);
      });
      // re-sélectionner les nouveaux nœuds (sans anciens listeners)
      answers = document.querySelectorAll('.R');

      answers.forEach(proposition => {
        proposition.addEventListener('click', () => {
          // Bonne réponse
          if (proposition.textContent === json[n].answer) {
            proposition.classList.add('right');

            if (secondes > 17) points += 4;
            else if (secondes > 9) points += 3;
            else if (secondes > 4) points += 2;
            else if (secondes > 0) points += 1;

            updateScore(points);
            if (points >= 15){
              alert("Vous avez gagné!!!")
            }
            proposition.classList.remove('right');

            // Reset chrono + nouvelle question + buzzer visible
             questrep();
            stopChrono();
           
            secondes = 30;
            buzz.textContent = secondes;
            btn.classList.add("hidden");
            buzz.classList.remove("hidden");
            erreurs = 0;

            // Nettoyage visuel
            proposition.classList.remove('right');

            startChrono(); // relance une seule fois
            return;
          }

          // Mauvaise réponse
          startChrono();
          proposition.classList.add('wrong');
          btn.classList.add("hidden");
          buzz.classList.remove("hidden");
          erreurs += 1;

          // Nettoyage visuel rapide (si tu veux garder le feedback, retire cette ligne)
          proposition.classList.remove('wrong');

          // Une seule erreur → le chrono continue (ne pas relancer)
          if (erreurs < 2) return;

          // 2 erreurs → nouvelle question + reset chrono
          erreurs = 0;
          stopChrono();
          secondes = 30;
          buzz.textContent = secondes;
          btn.classList.add("hidden");
          buzz.classList.remove("hidden");

          questrep();
          startChrono(); // relance une seule fois
        }, { once: false });
      });
    };
    
    questrep();
  })
  .catch(error => {
    console.error('Erreur lors du chargement du quiz :', error);
  });

// Chrono
function startChrono() {
  clearInterval(intervalID);
  intervalID = setInterval(() => {
    secondes--;
    buzz.textContent = secondes;
    let v = 2;
    if (v >= 2){
      v = 0;
      if (secondes <= 17) {
      setTimeout(() => { t4.style.background = "#1E90FF"; }, 1000);
    }
    if (secondes <= 10) {
      setTimeout(() => { t3.style.background = "#1E90FF"; }, 1000);
    }
    if (secondes <= 4) {
      setTimeout(() => { t2.style.background = "#1E90FF"; }, 1000);
    }

    if (secondes <= 0) {
      t1.style.background = "#1E90FF";
      // Fin du chrono → reset + nouvelle question
      stopChrono();
      secondes = 30;
      buzz.textContent = secondes;
      questrep();
      startChrono(); // relance propre
      t4.style.background = "";
      t3.style.background = "";
      t2.style.background = "";
      t1.style.background = "";
    }
    }
    
  }, 1000);
}

// Bouton unique
function timer() {
  const Bouton = document.querySelector(".buzzer");
  Bouton.textContent = secondes;

  Bouton.addEventListener("click", () => {
    if (!enCours) {
      startChrono();
      enCours = true;
      maDiv.classList.remove("hidden");
    } else {
      stopChrono();
      Bouton.classList.add("hidden");
      btn.classList.remove("hidden");

      setTimeout(() => {
        Bouton.classList.remove("hidden");
        btn.classList.add("hidden");
        startChrono();
        enCours = true;
      }, 8000);
    }
  });
}
timer();
