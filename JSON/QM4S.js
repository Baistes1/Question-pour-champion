// 100 Questions de difficulté MOYENNE - Manche "4 à la Suite"
// La bonne réponse est mélangée aléatoirement

const questionsBase = [
  // Géographie mondiale (20 questions)
  { id: 1, question: "Quelle est la capitale de l'Australie ?", reponse: "Canberra", fausses: ["Sydney", "Melbourne", "Brisbane"], categorie: "Géographie" },
  { id: 2, question: "Quel est le plus long fleuve du monde ?", reponse: "Le Nil", fausses: ["L'Amazone", "Le Yangtsé", "Le Mississippi"], categorie: "Géographie" },
  { id: 3, question: "Dans quel pays se trouve le Mont Fuji ?", reponse: "Japon", fausses: ["Chine", "Corée du Sud", "Thaïlande"], categorie: "Géographie" },
  { id: 4, question: "Quelle est la capitale du Canada ?", reponse: "Ottawa", fausses: ["Toronto", "Montréal", "Vancouver"], categorie: "Géographie" },
  { id: 5, question: "Quel océan sépare l'Amérique de l'Asie ?", reponse: "L'océan Pacifique", fausses: ["L'océan Atlantique", "L'océan Indien", "L'océan Arctique"], categorie: "Géographie" },
  { id: 6, question: "Dans quel pays se trouve la ville de Prague ?", reponse: "République tchèque", fausses: ["Pologne", "Hongrie", "Slovaquie"], categorie: "Géographie" },
  { id: 7, question: "Quelle est la monnaie du Royaume-Uni ?", reponse: "La livre sterling", fausses: ["L'euro", "Le dollar", "Le franc"], categorie: "Géographie" },
  { id: 8, question: "Quel pays a pour capitale Buenos Aires ?", reponse: "Argentine", fausses: ["Brésil", "Chili", "Uruguay"], categorie: "Géographie" },
  { id: 9, question: "Quelle mer borde Israël ?", reponse: "La mer Méditerranée", fausses: ["La mer Rouge", "La mer Noire", "La mer Caspienne"], categorie: "Géographie" },
  { id: 10, question: "Dans quel pays se trouve la Transylvanie ?", reponse: "Roumanie", fausses: ["Bulgarie", "Hongrie", "Serbie"], categorie: "Géographie" },
  { id: 11, question: "Quelle est la capitale de la Norvège ?", reponse: "Oslo", fausses: ["Stockholm", "Helsinki", "Copenhague"], categorie: "Géographie" },
  { id: 12, question: "Quel pays partage la plus longue frontière avec la France ?", reponse: "L'Espagne", fausses: ["L'Allemagne", "L'Italie", "La Belgique"], categorie: "Géographie" },
  { id: 13, question: "Dans quelle ville se trouve la Statue de la Liberté ?", reponse: "New York", fausses: ["Washington", "Boston", "Philadelphie"], categorie: "Géographie" },
  { id: 14, question: "Quel est le plus petit pays du monde ?", reponse: "Le Vatican", fausses: ["Monaco", "Saint-Marin", "Liechtenstein"], categorie: "Géographie" },
  { id: 15, question: "Quelle ville marocaine est connue pour ses tanneries ?", reponse: "Fès", fausses: ["Marrakech", "Casablanca", "Tanger"], categorie: "Géographie" },
  { id: 16, question: "Quel pays a pour capitale Lisbonne ?", reponse: "Portugal", fausses: ["Espagne", "Grèce", "Italie"], categorie: "Géographie" },
  { id: 17, question: "Dans quel pays se trouve le Machu Picchu ?", reponse: "Pérou", fausses: ["Bolivie", "Équateur", "Colombie"], categorie: "Géographie" },
  { id: 18, question: "Quelle est la capitale de la Turquie ?", reponse: "Ankara", fausses: ["Istanbul", "Izmir", "Antalya"], categorie: "Géographie" },
  { id: 19, question: "Quel fleuve traverse Paris ?", reponse: "La Seine", fausses: ["La Loire", "Le Rhône", "La Garonne"], categorie: "Géographie" },
  { id: 20, question: "Dans quel pays se trouve la Grande Barrière de Corail ?", reponse: "Australie", fausses: ["Philippines", "Indonésie", "Thaïlande"], categorie: "Géographie" },

  // Histoire (20 questions)
  { id: 21, question: "En quelle année a débuté la Seconde Guerre mondiale ?", reponse: "1939", fausses: ["1938", "1940", "1941"], categorie: "Histoire" },
  { id: 22, question: "Qui a peint la Chapelle Sixtine ?", reponse: "Michel-Ange", fausses: ["Léonard de Vinci", "Raphaël", "Botticelli"], categorie: "Histoire" },
  { id: 23, question: "En quelle année l'homme a-t-il marché sur la Lune ?", reponse: "1969", fausses: ["1968", "1970", "1971"], categorie: "Histoire" },
  { id: 24, question: "Qui était le premier président des États-Unis ?", reponse: "George Washington", fausses: ["Thomas Jefferson", "Abraham Lincoln", "Benjamin Franklin"], categorie: "Histoire" },
  { id: 25, question: "Quelle guerre a opposé le Nord et le Sud des États-Unis ?", reponse: "La Guerre de Sécession", fausses: ["La Guerre d'Indépendance", "La Guerre de 1812", "La Guerre hispano-américaine"], categorie: "Histoire" },
  { id: 26, question: "En quelle année le mur de Berlin est-il tombé ?", reponse: "1989", fausses: ["1987", "1990", "1991"], categorie: "Histoire" },
  { id: 27, question: "Qui a découvert l'Amérique en 1492 ?", reponse: "Christophe Colomb", fausses: ["Amerigo Vespucci", "Fernand de Magellan", "Vasco de Gama"], categorie: "Histoire" },
  { id: 28, question: "Quelle civilisation a construit les pyramides de Gizeh ?", reponse: "Les Égyptiens", fausses: ["Les Mayas", "Les Aztèques", "Les Incas"], categorie: "Histoire" },
  { id: 29, question: "Qui était Jules César ?", reponse: "Un empereur romain", fausses: ["Un roi égyptien", "Un philosophe grec", "Un général carthaginois"], categorie: "Histoire" },
  { id: 30, question: "En quelle année a eu lieu la Révolution française ?", reponse: "1789", fausses: ["1776", "1799", "1804"], categorie: "Histoire" },
  { id: 31, question: "Qui a inventé l'imprimerie ?", reponse: "Gutenberg", fausses: ["Léonard de Vinci", "Isaac Newton", "Galilée"], categorie: "Histoire" },
  { id: 32, question: "Quel empereur a unifié la Chine ?", reponse: "Qin Shi Huang", fausses: ["Mao Zedong", "Confucius", "Sun Tzu"], categorie: "Histoire" },
  { id: 33, question: "En quelle année le Titanic a-t-il coulé ?", reponse: "1912", fausses: ["1910", "1914", "1918"], categorie: "Histoire" },
  { id: 34, question: "Qui a peint la Joconde ?", reponse: "Léonard de Vinci", fausses: ["Michel-Ange", "Raphaël", "Donatello"], categorie: "Histoire" },
  { id: 35, question: "Quelle était la capitale de l'Empire byzantin ?", reponse: "Constantinople", fausses: ["Rome", "Athènes", "Alexandrie"], categorie: "Histoire" },
  { id: 36, question: "Qui était Cléopâtre ?", reponse: "Une reine d'Égypte", fausses: ["Une impératrice romaine", "Une déesse grecque", "Une princesse perse"], categorie: "Histoire" },
  { id: 37, question: "En quelle année l'Inde a-t-elle obtenu son indépendance ?", reponse: "1947", fausses: ["1945", "1950", "1952"], categorie: "Histoire" },
  { id: 38, question: "Qui a écrit 'L'Odyssée' ?", reponse: "Homère", fausses: ["Sophocle", "Aristote", "Platon"], categorie: "Histoire" },
  { id: 39, question: "Quelle bataille a marqué la défaite de Napoléon ?", reponse: "Waterloo", fausses: ["Austerlitz", "Iéna", "Wagram"], categorie: "Histoire" },
  { id: 40, question: "En quelle année le Maroc a-t-il obtenu son indépendance ?", reponse: "1956", fausses: ["1952", "1960", "1962"], categorie: "Histoire" },

  // Sciences (20 questions)
  { id: 41, question: "Quelle est la formule chimique de l'eau ?", reponse: "H2O", fausses: ["CO2", "O2", "H2SO4"], categorie: "Sciences" },
  { id: 42, question: "Combien de planètes y a-t-il dans le système solaire ?", reponse: "8", fausses: ["7", "9", "10"], categorie: "Sciences" },
  { id: 43, question: "Quelle planète est la plus proche du Soleil ?", reponse: "Mercure", fausses: ["Vénus", "Mars", "Terre"], categorie: "Sciences" },
  { id: 44, question: "Quel organe pompe le sang dans le corps ?", reponse: "Le cœur", fausses: ["Le cerveau", "Le foie", "Les poumons"], categorie: "Sciences" },
  { id: 45, question: "Quelle est la vitesse de la lumière ?", reponse: "300 000 km/s", fausses: ["150 000 km/s", "500 000 km/s", "100 000 km/s"], categorie: "Sciences" },
  { id: 46, question: "Combien d'os a le corps humain adulte ?", reponse: "206", fausses: ["198", "214", "220"], categorie: "Sciences" },
  { id: 47, question: "Quel gaz les plantes absorbent-elles ?", reponse: "Le dioxyde de carbone (CO2)", fausses: ["L'oxygène", "L'azote", "L'hydrogène"], categorie: "Sciences" },
  { id: 48, question: "Qui a découvert la pénicilline ?", reponse: "Alexander Fleming", fausses: ["Louis Pasteur", "Marie Curie", "Albert Einstein"], categorie: "Sciences" },
  { id: 49, question: "Quelle est la plus grande planète du système solaire ?", reponse: "Jupiter", fausses: ["Saturne", "Neptune", "Uranus"], categorie: "Sciences" },
  { id: 50, question: "Combien de chromosomes a l'être humain ?", reponse: "46", fausses: ["44", "48", "50"], categorie: "Sciences" },
  { id: 51, question: "Quel scientifique a développé la théorie de l'évolution ?", reponse: "Charles Darwin", fausses: ["Isaac Newton", "Albert Einstein", "Galilée"], categorie: "Sciences" },
  { id: 52, question: "À quelle température l'eau bout-elle ?", reponse: "100°C", fausses: ["90°C", "110°C", "80°C"], categorie: "Sciences" },
  { id: 53, question: "Quel est le symbole chimique de l'or ?", reponse: "Au", fausses: ["Ag", "Fe", "Cu"], categorie: "Sciences" },
  { id: 54, question: "Combien de dents a un adulte ?", reponse: "32", fausses: ["28", "30", "36"], categorie: "Sciences" },
  { id: 55, question: "Quel est l'animal le plus rapide sur terre ?", reponse: "Le guépard", fausses: ["Le lion", "L'antilope", "Le cheval"], categorie: "Sciences" },
  { id: 56, question: "Quelle planète est surnommée la planète rouge ?", reponse: "Mars", fausses: ["Vénus", "Jupiter", "Saturne"], categorie: "Sciences" },
  { id: 57, question: "Qui a inventé l'ampoule électrique ?", reponse: "Thomas Edison", fausses: ["Nikola Tesla", "Benjamin Franklin", "Alexander Bell"], categorie: "Sciences" },
  { id: 58, question: "Combien de pattes a une araignée ?", reponse: "8", fausses: ["6", "10", "12"], categorie: "Sciences" },
  { id: 59, question: "Quel est le plus grand mammifère du monde ?", reponse: "La baleine bleue", fausses: ["L'éléphant", "La girafe", "L'hippopotame"], categorie: "Sciences" },
  { id: 60, question: "Quelle est la température du corps humain normal ?", reponse: "37°C", fausses: ["36°C", "38°C", "35°C"], categorie: "Sciences" },

  // Culture générale (20 questions)
  { id: 61, question: "Qui a écrit 'Les Misérables' ?", reponse: "Victor Hugo", fausses: ["Émile Zola", "Gustave Flaubert", "Honoré de Balzac"], categorie: "Culture" },
  { id: 62, question: "Combien de joueurs y a-t-il dans une équipe de football ?", reponse: "11", fausses: ["10", "12", "9"], categorie: "Culture" },
  { id: 63, question: "Quel est l'instrument de musique de Chopin ?", reponse: "Le piano", fausses: ["Le violon", "La flûte", "La guitare"], categorie: "Culture" },
  { id: 64, question: "Qui a composé 'Les Quatre Saisons' ?", reponse: "Vivaldi", fausses: ["Mozart", "Bach", "Beethoven"], categorie: "Culture" },
  { id: 65, question: "Dans quel pays se trouve le Taj Mahal ?", reponse: "Inde", fausses: ["Pakistan", "Bangladesh", "Sri Lanka"], categorie: "Culture" },
  { id: 66, question: "Combien de cordes a une guitare classique ?", reponse: "6", fausses: ["5", "7", "8"], categorie: "Culture" },
  { id: 67, question: "Qui a écrit 'Roméo et Juliette' ?", reponse: "Shakespeare", fausses: ["Molière", "Racine", "Corneille"], categorie: "Culture" },
  { id: 68, question: "Quel est le sport pratiqué à Roland-Garros ?", reponse: "Le tennis", fausses: ["Le football", "Le rugby", "Le golf"], categorie: "Culture" },
  { id: 69, question: "Combien de touches a un piano ?", reponse: "88", fausses: ["76", "92", "100"], categorie: "Culture" },
  { id: 70, question: "Qui a peint 'La Nuit étoilée' ?", reponse: "Vincent van Gogh", fausses: ["Claude Monet", "Pablo Picasso", "Paul Cézanne"], categorie: "Culture" },
  { id: 71, question: "Quelle est la langue officielle du Brésil ?", reponse: "Le portugais", fausses: ["L'espagnol", "Le français", "L'anglais"], categorie: "Culture" },
  { id: 72, question: "Combien de symphonies Beethoven a-t-il composées ?", reponse: "9", fausses: ["7", "10", "12"], categorie: "Culture" },
  { id: 73, question: "Qui a écrit 'Le Petit Prince' ?", reponse: "Antoine de Saint-Exupéry", fausses: ["Jules Verne", "Alexandre Dumas", "Victor Hugo"], categorie: "Culture" },
  { id: 74, question: "Dans quelle ville se trouve le musée du Louvre ?", reponse: "Paris", fausses: ["Londres", "Rome", "Madrid"], categorie: "Culture" },
  { id: 75, question: "Quel pays a remporté le plus de Coupes du monde de football ?", reponse: "Le Brésil", fausses: ["L'Allemagne", "L'Italie", "L'Argentine"], categorie: "Culture" },
  { id: 76, question: "Qui a composé 'La Flûte enchantée' ?", reponse: "Mozart", fausses: ["Beethoven", "Bach", "Haydn"], categorie: "Culture" },
  { id: 77, question: "Combien de joueurs y a-t-il dans une équipe de basket ?", reponse: "5", fausses: ["6", "7", "4"], categorie: "Culture" },
  { id: 78, question: "Qui a écrit 'L'Étranger' ?", reponse: "Albert Camus", fausses: ["Jean-Paul Sartre", "André Gide", "Albert Memmi"], categorie: "Culture" },
  { id: 79, question: "Dans quelle ville se trouve la Sagrada Familia ?", reponse: "Barcelone", fausses: ["Madrid", "Séville", "Valence"], categorie: "Culture" },
  { id: 80, question: "Combien de secondes y a-t-il dans une heure ?", reponse: "3600", fausses: ["3000", "3500", "4000"], categorie: "Culture" },

  // Langues et Expressions (20 questions)
  { id: 81, question: "Comment dit-on 'bonjour' en anglais ?", reponse: "Hello", fausses: ["Goodbye", "Thank you", "Please"], categorie: "Langues" },
  { id: 82, question: "Comment dit-on 'merci' en espagnol ?", reponse: "Gracias", fausses: ["Por favor", "Buenos días", "Adiós"], categorie: "Langues" },
  { id: 83, question: "Quelle est la capitale de la langue arabe ?", reponse: "Le Caire (dialecte égyptien)", fausses: ["Damas", "Bagdad", "Riad"], categorie: "Langues" },
  { id: 84, question: "Comment dit-on 'au revoir' en italien ?", reponse: "Arrivederci", fausses: ["Buongiorno", "Grazie", "Prego"], categorie: "Langues" },
  { id: 85, question: "Quelle langue parle-t-on au Brésil ?", reponse: "Le portugais", fausses: ["L'espagnol", "Le français", "L'anglais"], categorie: "Langues" },
  { id: 86, question: "Comment dit-on 'chat' en anglais ?", reponse: "Cat", fausses: ["Dog", "Bird", "Fish"], categorie: "Langues" },
  { id: 87, question: "Quelle est la langue la plus parlée au monde ?", reponse: "Le chinois mandarin", fausses: ["L'anglais", "L'espagnol", "L'hindi"], categorie: "Langues" },
  { id: 88, question: "Comment dit-on 'un' en espagnol ?", reponse: "Uno", fausses: ["Dos", "Tres", "Cuatro"], categorie: "Langues" },
  { id: 89, question: "Quelle langue parle-t-on en Autriche ?", reponse: "L'allemand", fausses: ["L'autrichien", "Le français", "L'italien"], categorie: "Langues" },
  { id: 90, question: "Comment dit-on 'eau' en anglais ?", reponse: "Water", fausses: ["Wine", "Milk", "Juice"], categorie: "Langues" },
  { id: 91, question: "Quelle langue utilise l'alphabet cyrillique ?", reponse: "Le russe", fausses: ["Le polonais", "Le roumain", "Le hongrois"], categorie: "Langues" },
  { id: 92, question: "Comment dit-on 'oui' en allemand ?", reponse: "Ja", fausses: ["Nein", "Danke", "Bitte"], categorie: "Langues" },
  { id: 93, question: "Combien de lettres a l'alphabet français ?", reponse: "26", fausses: ["24", "28", "30"], categorie: "Langues" },
  { id: 94, question: "Comment dit-on 'maison' en anglais ?", reponse: "House", fausses: ["Home", "Building", "Room"], categorie: "Langues" },
  { id: 95, question: "Quelle langue parle-t-on en Belgique (3 langues officielles) ?", reponse: "Français, néerlandais, allemand", fausses: ["Français, anglais, allemand", "Néerlandais, anglais, italien", "Français, espagnol, italien"], categorie: "Langues" },
  { id: 96, question: "Comment dit-on 'livre' en anglais ?", reponse: "Book", fausses: ["Paper", "Page", "Read"], categorie: "Langues" },
  { id: 97, question: "Quelle est la langue officielle du Maroc avec l'arabe ?", reponse: "L'amazigh (berbère)", fausses: ["Le français", "L'espagnol", "L'anglais"], categorie: "Langues" },
  { id: 98, question: "Comment dit-on 'rouge' en anglais ?", reponse: "Red", fausses: ["Blue", "Green", "Yellow"], categorie: "Langues" },
  { id: 99, question: "Combien de voyelles y a-t-il en français ?", reponse: "6 (a, e, i, o, u, y)", fausses: ["5", "7", "8"], categorie: "Langues" },
  { id: 100, question: "Comment dit-on 'chien' en espagnol ?", reponse: "Perro", fausses: ["Gato", "Pájaro", "Pez"], categorie: "Langues" }
];

// Fonction pour mélanger un tableau (algorithme Fisher-Yates)
function melangerTableau(tableau) {
  const nouveauTableau = [...tableau];
  for (let i = nouveauTableau.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nouveauTableau[i], nouveauTableau[j]] = [nouveauTableau[j], nouveauTableau[i]];
  }
  return nouveauTableau;
}

// Fonction pour créer les questions avec propositions mélangées
function creerQuestions() {
  return questionsBase.map(q => {
    // Créer un tableau avec la bonne réponse et les fausses réponses
    const propositions = [q.reponse, ...q.fausses];
    
    // Mélanger les propositions
    const propositionsMelangees = melangerTableau(propositions);
    
    // Trouver l'index de la bonne réponse après mélange
    const indexBonneReponse = propositionsMelangees.indexOf(q.reponse);
    
    return {
      id: q.id,
      question: q.question,
      propositions: propositionsMelangees,
      bonneReponse: indexBonneReponse,
      categorie: q.categorie
    };
  });
}

// Générer les questions
const questions = creerQuestions();

// Exemple d'utilisation
console.log("=== MANCHE 2: 4 À LA SUITE - 100 QUESTIONS MOYENNES ===\n");

questions.forEach((q, index) => {
  console.log(`Question ${index + 1} (${q.categorie}):`);
  console.log(q.question);
  q.propositions.forEach((prop, i) => {
    const lettre = String.fromCharCode(65 + i); // A, B, C, D
    const marqueur = i === q.bonneReponse ? " ✓" : "";
    console.log(`  ${lettre}) ${prop}${marqueur}`);
  });
  console.log();
});

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questions, creerQuestions };
}
