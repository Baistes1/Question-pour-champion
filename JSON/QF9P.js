// 100 Questions faciles - Questions pour un Champion avec 4 propositions
// La bonne réponse est mélangée aléatoirement

const questionsBase = [
  // Géographie (20 questions)
  { id: 1, question: "Quelle est la capitale de la France ?", reponse: "Paris", fausses: ["Lyon", "Marseille", "Bordeaux"], categorie: "Géographie" },
  { id: 2, question: "Sur quel continent se trouve l'Égypte ?", reponse: "Afrique", fausses: ["Asie", "Europe", "Amérique"], categorie: "Géographie" },
  { id: 3, question: "Quel océan borde la côte ouest de l'Afrique ?", reponse: "Océan Atlantique", fausses: ["Océan Pacifique", "Océan Indien", "Océan Arctique"], categorie: "Géographie" },
  { id: 4, question: "Quelle est la plus grande ville du Maroc ?", reponse: "Casablanca", fausses: ["Rabat", "Marrakech", "Fès"], categorie: "Géographie" },
  { id: 5, question: "Combien de continents existe-t-il sur Terre ?", reponse: "7", fausses: ["5", "6", "8"], categorie: "Géographie" },
  { id: 6, question: "Dans quel pays se trouve la tour de Pise ?", reponse: "Italie", fausses: ["France", "Espagne", "Grèce"], categorie: "Géographie" },
  { id: 7, question: "Quelle est la capitale de l'Espagne ?", reponse: "Madrid", fausses: ["Barcelone", "Séville", "Valence"], categorie: "Géographie" },
  { id: 8, question: "Quel fleuve traverse Paris ?", reponse: "La Seine", fausses: ["La Loire", "Le Rhône", "La Garonne"], categorie: "Géographie" },
  { id: 9, question: "Comment s'appelle le plus grand désert chaud du monde ?", reponse: "Le Sahara", fausses: ["Le Gobi", "Le Kalahari", "L'Atacama"], categorie: "Géographie" },
  { id: 10, question: "Quelle mer sépare l'Europe de l'Afrique ?", reponse: "La Méditerranée", fausses: ["La Mer Rouge", "La Mer Noire", "La Mer du Nord"], categorie: "Géographie" },
  { id: 11, question: "Quelle est la capitale de l'Allemagne ?", reponse: "Berlin", fausses: ["Munich", "Hambourg", "Francfort"], categorie: "Géographie" },
  { id: 12, question: "Sur quel continent se trouve le Brésil ?", reponse: "Amérique du Sud", fausses: ["Amérique du Nord", "Afrique", "Asie"], categorie: "Géographie" },
  { id: 13, question: "Quel est le plus haut sommet d'Afrique ?", reponse: "Le Kilimandjaro", fausses: ["Le Mont Kenya", "Le Toubkal", "Le Mont Cameroun"], categorie: "Géographie" },
  { id: 14, question: "Dans quel pays se trouve Rome ?", reponse: "Italie", fausses: ["Grèce", "Espagne", "Portugal"], categorie: "Géographie" },
  { id: 15, question: "Quelle est la capitale du Portugal ?", reponse: "Lisbonne", fausses: ["Porto", "Madrid", "Barcelone"], categorie: "Géographie" },
  { id: 16, question: "Combien d'océans y a-t-il sur Terre ?", reponse: "5", fausses: ["3", "4", "6"], categorie: "Géographie" },
  { id: 17, question: "Quel fleuve est le plus long d'Afrique ?", reponse: "Le Nil", fausses: ["Le Congo", "Le Niger", "Le Zambèze"], categorie: "Géographie" },
  { id: 18, question: "Dans quelle ville se trouve la tour Eiffel ?", reponse: "Paris", fausses: ["Londres", "Berlin", "Rome"], categorie: "Géographie" },
  { id: 19, question: "Quel pays a pour capitale Londres ?", reponse: "Royaume-Uni", fausses: ["Irlande", "Écosse", "Pays de Galles"], categorie: "Géographie" },
  { id: 20, question: "Quelle est la capitale de l'Italie ?", reponse: "Rome", fausses: ["Milan", "Venise", "Florence"], categorie: "Géographie" },

  // Histoire (20 questions)
  { id: 21, question: "En quelle année a eu lieu la Révolution française ?", reponse: "1789", fausses: ["1799", "1778", "1804"], categorie: "Histoire" },
  { id: 22, question: "Qui a découvert l'Amérique en 1492 ?", reponse: "Christophe Colomb", fausses: ["Vasco de Gama", "Magellan", "Marco Polo"], categorie: "Histoire" },
  { id: 23, question: "Comment s'appelait le premier homme sur la Lune ?", reponse: "Neil Armstrong", fausses: ["Buzz Aldrin", "Youri Gagarine", "John Glenn"], categorie: "Histoire" },
  { id: 24, question: "En quelle année le Maroc a-t-il obtenu son indépendance ?", reponse: "1956", fausses: ["1960", "1952", "1962"], categorie: "Histoire" },
  { id: 25, question: "Qui était le premier président des États-Unis ?", reponse: "George Washington", fausses: ["Thomas Jefferson", "Abraham Lincoln", "John Adams"], categorie: "Histoire" },
  { id: 26, question: "Quel pharaon a construit la grande pyramide de Gizeh ?", reponse: "Khéops", fausses: ["Ramsès II", "Toutânkhamon", "Khéphren"], categorie: "Histoire" },
  { id: 27, question: "En quelle année a débuté la Première Guerre mondiale ?", reponse: "1914", fausses: ["1918", "1912", "1916"], categorie: "Histoire" },
  { id: 28, question: "Qui était Jeanne d'Arc ?", reponse: "Une héroïne française", fausses: ["Une reine de France", "Une sainte espagnole", "Une guerrière anglaise"], categorie: "Histoire" },
  { id: 29, question: "Quel empereur français a été exilé à Sainte-Hélène ?", reponse: "Napoléon Bonaparte", fausses: ["Louis XVI", "Charles de Gaulle", "Louis XIV"], categorie: "Histoire" },
  { id: 30, question: "En quelle année est tombé le mur de Berlin ?", reponse: "1989", fausses: ["1991", "1987", "1985"], categorie: "Histoire" },
  { id: 31, question: "Qui a peint la Joconde ?", reponse: "Léonard de Vinci", fausses: ["Michel-Ange", "Raphaël", "Botticelli"], categorie: "Histoire" },
  { id: 32, question: "Quelle guerre a duré de 1939 à 1945 ?", reponse: "La Seconde Guerre mondiale", fausses: ["La Première Guerre mondiale", "La Guerre froide", "La Guerre de Corée"], categorie: "Histoire" },
  { id: 33, question: "Qui était le roi soleil en France ?", reponse: "Louis XIV", fausses: ["Louis XVI", "Henri IV", "François Ier"], categorie: "Histoire" },
  { id: 34, question: "En quelle année l'homme a-t-il marché sur la Lune ?", reponse: "1969", fausses: ["1968", "1970", "1971"], categorie: "Histoire" },
  { id: 35, question: "Qui a inventé l'imprimerie ?", reponse: "Gutenberg", fausses: ["Edison", "Bell", "Newton"], categorie: "Histoire" },
  { id: 36, question: "Quel roi a régné le plus longtemps au Maroc ?", reponse: "Hassan II", fausses: ["Mohammed V", "Mohammed VI", "Moulay Ismail"], categorie: "Histoire" },
  { id: 37, question: "Quelle civilisation a construit le Machu Picchu ?", reponse: "Les Incas", fausses: ["Les Mayas", "Les Aztèques", "Les Toltèques"], categorie: "Histoire" },
  { id: 38, question: "En quelle année a été signée la Déclaration universelle des droits de l'homme ?", reponse: "1948", fausses: ["1945", "1950", "1946"], categorie: "Histoire" },
  { id: 39, question: "Qui était Jules César ?", reponse: "Un empereur romain", fausses: ["Un philosophe grec", "Un roi égyptien", "Un général carthaginois"], categorie: "Histoire" },
  { id: 40, question: "Quelle bataille Napoléon a-t-il perdue en 1815 ?", reponse: "Waterloo", fausses: ["Austerlitz", "Iéna", "Wagram"], categorie: "Histoire" },

  // Sciences (20 questions)
  { id: 41, question: "Quelle planète est la plus proche du Soleil ?", reponse: "Mercure", fausses: ["Vénus", "Mars", "Terre"], categorie: "Sciences" },
  { id: 42, question: "Combien y a-t-il de planètes dans le système solaire ?", reponse: "8", fausses: ["7", "9", "10"], categorie: "Sciences" },
  { id: 43, question: "Quelle est la formule chimique de l'eau ?", reponse: "H2O", fausses: ["CO2", "O2", "H2"], categorie: "Sciences" },
  { id: 44, question: "Quel est l'organe qui pompe le sang dans le corps ?", reponse: "Le cœur", fausses: ["Le foie", "Les poumons", "L'estomac"], categorie: "Sciences" },
  { id: 45, question: "Combien d'os a le corps humain adulte ?", reponse: "206", fausses: ["198", "214", "220"], categorie: "Sciences" },
  { id: 46, question: "Quelle est la plus grande planète du système solaire ?", reponse: "Jupiter", fausses: ["Saturne", "Neptune", "Uranus"], categorie: "Sciences" },
  { id: 47, question: "Quel gaz les plantes absorbent-elles ?", reponse: "Le dioxyde de carbone", fausses: ["L'oxygène", "L'azote", "L'hydrogène"], categorie: "Sciences" },
  { id: 48, question: "À quelle température l'eau bout-elle ?", reponse: "100°C", fausses: ["90°C", "110°C", "120°C"], categorie: "Sciences" },
  { id: 49, question: "Combien de dents a un adulte ?", reponse: "32", fausses: ["28", "30", "34"], categorie: "Sciences" },
  { id: 50, question: "Quel est l'animal le plus rapide sur terre ?", reponse: "Le guépard", fausses: ["Le lion", "Le léopard", "L'antilope"], categorie: "Sciences" },
  { id: 51, question: "Quel est le plus grand mammifère du monde ?", reponse: "La baleine bleue", fausses: ["L'éléphant", "Le requin baleine", "La girafe"], categorie: "Sciences" },
  { id: 52, question: "Combien de continents y a-t-il ?", reponse: "7", fausses: ["5", "6", "8"], categorie: "Sciences" },
  { id: 53, question: "Quel scientifique a découvert la gravité ?", reponse: "Isaac Newton", fausses: ["Albert Einstein", "Galilée", "Copernic"], categorie: "Sciences" },
  { id: 54, question: "Quelle est la vitesse de la lumière ?", reponse: "300 000 km/s", fausses: ["150 000 km/s", "200 000 km/s", "400 000 km/s"], categorie: "Sciences" },
  { id: 55, question: "Quel est le symbole chimique de l'or ?", reponse: "Au", fausses: ["Ag", "Fe", "Cu"], categorie: "Sciences" },
  { id: 56, question: "Combien de pattes a une araignée ?", reponse: "8", fausses: ["6", "10", "12"], categorie: "Sciences" },
  { id: 57, question: "Quel est l'organe responsable de la respiration ?", reponse: "Les poumons", fausses: ["Le cœur", "Le foie", "L'estomac"], categorie: "Sciences" },
  { id: 58, question: "Quelle planète est surnommée la planète rouge ?", reponse: "Mars", fausses: ["Vénus", "Jupiter", "Mercure"], categorie: "Sciences" },
  { id: 59, question: "Combien de sens a l'être humain ?", reponse: "5", fausses: ["4", "6", "7"], categorie: "Sciences" },
  { id: 60, question: "Quel est le plus petit os du corps humain ?", reponse: "L'étrier", fausses: ["Le fémur", "Le radius", "La rotule"], categorie: "Sciences" },

  // Culture générale (20 questions)
  { id: 61, question: "Combien de joueurs y a-t-il dans une équipe de football ?", reponse: "11", fausses: ["10", "12", "9"], categorie: "Culture" },
  { id: 62, question: "Quelle est la couleur du cheval blanc d'Henri IV ?", reponse: "Blanc", fausses: ["Noir", "Marron", "Gris"], categorie: "Culture" },
  { id: 63, question: "Combien de jours y a-t-il dans une année bissextile ?", reponse: "366", fausses: ["365", "364", "367"], categorie: "Culture" },
  { id: 64, question: "Quel est le prénom de Picasso ?", reponse: "Pablo", fausses: ["Diego", "Salvador", "Francisco"], categorie: "Culture" },
  { id: 65, question: "Dans quel pays se trouve le Taj Mahal ?", reponse: "Inde", fausses: ["Pakistan", "Bangladesh", "Népal"], categorie: "Culture" },
  { id: 66, question: "Combien de cordes a une guitare classique ?", reponse: "6", fausses: ["5", "7", "8"], categorie: "Culture" },
  { id: 67, question: "Quelle est la devise de la France ?", reponse: "Liberté, Égalité, Fraternité", fausses: ["Liberté, Justice, Honneur", "Unité, Force, Liberté", "Honneur, Patrie, Courage"], categorie: "Culture" },
  { id: 68, question: "Quel est l'auteur de 'Les Misérables' ?", reponse: "Victor Hugo", fausses: ["Émile Zola", "Gustave Flaubert", "Honoré de Balzac"], categorie: "Culture" },
  { id: 69, question: "Combien de touches a un piano ?", reponse: "88", fausses: ["76", "92", "80"], categorie: "Culture" },
  { id: 70, question: "Quel est le sport pratiqué à Roland-Garros ?", reponse: "Le tennis", fausses: ["Le football", "Le rugby", "Le golf"], categorie: "Culture" },
  { id: 71, question: "Qui a écrit 'Roméo et Juliette' ?", reponse: "Shakespeare", fausses: ["Molière", "Racine", "Corneille"], categorie: "Culture" },
  { id: 72, question: "Combien de minutes y a-t-il dans une heure ?", reponse: "60", fausses: ["50", "70", "100"], categorie: "Culture" },
  { id: 73, question: "Quelle est la capitale du Japon ?", reponse: "Tokyo", fausses: ["Kyoto", "Osaka", "Hiroshima"], categorie: "Culture" },
  { id: 74, question: "Quel est le symbole de la paix ?", reponse: "La colombe", fausses: ["L'aigle", "Le corbeau", "Le pigeon"], categorie: "Culture" },
  { id: 75, question: "Combien de côtés a un hexagone ?", reponse: "6", fausses: ["5", "7", "8"], categorie: "Culture" },
  { id: 76, question: "Quel est le plus grand musée du monde ?", reponse: "Le Louvre", fausses: ["Le British Museum", "Le MET", "L'Ermitage"], categorie: "Culture" },
  { id: 77, question: "Combien de saisons y a-t-il dans une année ?", reponse: "4", fausses: ["3", "5", "6"], categorie: "Culture" },
  { id: 78, question: "Quelle est la langue la plus parlée dans le monde ?", reponse: "Le chinois", fausses: ["L'anglais", "L'espagnol", "L'hindi"], categorie: "Culture" },
  { id: 79, question: "Combien de secondes y a-t-il dans une minute ?", reponse: "60", fausses: ["50", "70", "100"], categorie: "Culture" },
  { id: 80, question: "Quel est le plus grand pays du monde en superficie ?", reponse: "La Russie", fausses: ["Le Canada", "La Chine", "Les États-Unis"], categorie: "Culture" },

  // Sport (20 questions)
  { id: 81, question: "Combien de joueurs y a-t-il dans une équipe de basket ?", reponse: "5", fausses: ["6", "7", "4"], categorie: "Sport" },
  { id: 82, question: "Dans quel sport utilise-t-on un ballon ovale ?", reponse: "Le rugby", fausses: ["Le football", "Le handball", "Le volleyball"], categorie: "Sport" },
  { id: 83, question: "Combien de sets faut-il gagner pour remporter un match de tennis ?", reponse: "2 ou 3", fausses: ["1", "4", "5"], categorie: "Sport" },
  { id: 84, question: "Quel pays a remporté le plus de Coupes du monde de football ?", reponse: "Le Brésil", fausses: ["L'Allemagne", "L'Argentine", "L'Italie"], categorie: "Sport" },
  { id: 85, question: "Combien de joueurs y a-t-il dans une équipe de volleyball ?", reponse: "6", fausses: ["5", "7", "8"], categorie: "Sport" },
  { id: 86, question: "Quel est le sport national du Japon ?", reponse: "Le sumo", fausses: ["Le judo", "Le karaté", "Le kendo"], categorie: "Sport" },
  { id: 87, question: "Combien de rounds y a-t-il dans un combat de boxe professionnel ?", reponse: "12", fausses: ["10", "15", "8"], categorie: "Sport" },
  { id: 88, question: "Dans quel sport pratique-t-on le 'slam dunk' ?", reponse: "Le basket", fausses: ["Le volleyball", "Le handball", "Le tennis"], categorie: "Sport" },
  { id: 89, question: "Combien de joueurs y a-t-il dans une équipe de handball ?", reponse: "7", fausses: ["6", "8", "9"], categorie: "Sport" },
  { id: 90, question: "Quel est le record olympique du 100 mètres ?", reponse: "9,58 secondes", fausses: ["9,72 secondes", "9,63 secondes", "9,50 secondes"], categorie: "Sport" },
  { id: 91, question: "Dans quel sport utilise-t-on une raquette et un volant ?", reponse: "Le badminton", fausses: ["Le tennis", "Le squash", "Le ping-pong"], categorie: "Sport" },
  { id: 92, question: "Combien de trous y a-t-il sur un parcours de golf standard ?", reponse: "18", fausses: ["12", "16", "20"], categorie: "Sport" },
  { id: 93, question: "Quelle est la distance d'un marathon ?", reponse: "42,195 km", fausses: ["40 km", "45 km", "50 km"], categorie: "Sport" },
  { id: 94, question: "Dans quel sport y a-t-il un gardien de but ?", reponse: "Le football", fausses: ["Le tennis", "Le basketball", "L'athlétisme"], categorie: "Sport" },
  { id: 95, question: "Combien de périodes y a-t-il dans un match de hockey sur glace ?", reponse: "3", fausses: ["2", "4", "5"], categorie: "Sport" },
  { id: 96, question: "Quel sport se pratique sur un tatami ?", reponse: "Le judo", fausses: ["La boxe", "Le karaté", "Le kung-fu"], categorie: "Sport" },
  { id: 97, question: "Combien de points vaut un panier à 3 points au basket ?", reponse: "3", fausses: ["2", "4", "5"], categorie: "Sport" },
  { id: 98, question: "Dans quel sport dit-on 'strike' ?", reponse: "Le bowling", fausses: ["Le baseball", "Le tennis", "Le golf"], categorie: "Sport" },
  { id: 99, question: "Quelle couleur de ceinture est la plus haute au judo ?", reponse: "Noire", fausses: ["Rouge", "Blanche", "Marron"], categorie: "Sport" },
  { id: 100, question: "Combien de médailles d'or olympiques a Usain Bolt ?", reponse: "8", fausses: ["6", "9", "10"], categorie: "Sport" }
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
console.log("=== 100 QUESTIONS POUR UN CHAMPION ===\n");

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
