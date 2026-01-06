// Player.js (sans changer tes classes / attributs)

const choices = document.querySelectorAll('.choice');
const avatar = document.querySelector('.avatar');
const pseudo = document.querySelector('.username');
const next = document.querySelector('.next');

const start = document.querySelector('.start');
const form = document.querySelector('.username');
const usernameInput = document.getElementById('username');
const imgChosen = document.getElementById('notre_avatar');

let selectedSrc = localStorage.getItem('selectedAvatar') || null;

/* Affiche l'avatar stocké dès le chargement (si existant) */
if (imgChosen && selectedSrc) {
  imgChosen.src = selectedSrc;
}

/* Active player + sauvegarde */
choices.forEach(choice => {
  choice.addEventListener('click', () => {
    choices.forEach(c => c.classList.remove('active'));
    choice.classList.add('active');

    const img = choice.querySelector('img');
    selectedSrc = img ? img.getAttribute('src') : null;

    if (selectedSrc) {
      localStorage.setItem('selectedAvatar', selectedSrc);
      if (imgChosen) imgChosen.src = selectedSrc; // preview immédiat dans .avatar_select
    }
  });
});

/* next page */
if (next) {
  next.addEventListener('click', (e) => {
    e.preventDefault();

    if (!selectedSrc) return;

    avatar.classList.add('go');
    pseudo.classList.add('arrive');
  });
}

/* Commencer (submit du form .username) */
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!selectedSrc) return;

    const name = usernameInput ? usernameInput.value.trim() : '';
    if (!name) return;

    localStorage.setItem('username', name);
    window.location.href = 'Epreuve1.html';
  });
}

/* stars */
const starsContainer = document.getElementById('stars');
if (starsContainer) {
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    starsContainer.appendChild(star);
  }
}





