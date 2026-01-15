// 100 Questions de difficulté MOYENNE - Questions pour un Champion
// La bonne réponse est mélangée aléatoirement

const questionsBase = [
  // Géographie (20 questions)
  { id: 1, question: "Quelle est la capitale de l'Australie ?", reponse: "Canberra", fausses: ["Sydney", "Melbourne", "Brisbane"], categorie: "Géographie" },
  { id: 2, question: "Quel est le plus long fleuve d'Europe ?", reponse: "La Volga", fausses: ["Le Danube", "Le Rhin", "La Loire"], categorie: "Géographie" },
  { id: 3, question: "Dans quel pays se trouve le lac Titicaca ?", reponse: "Pérou et Bolivie", fausses: ["Chili et Argentine", "Équateur et Colombie", "Venezuela et Brésil"], categorie: "Géographie" },
  { id: 4, question: "Quelle est la monnaie officielle du Japon ?", reponse: "Le yen", fausses: ["Le yuan", "Le won", "Le baht"], categorie: "Géographie" },
  { id: 5, question: "Combien de pays ont une frontière avec la France ?", reponse: "8", fausses: ["6", "7", "9"], categorie: "Géographie" },
  { id: 6, question: "Quelle ville est surnommée 'la Ville éternelle' ?", reponse: "Rome", fausses: ["Athènes", "Jérusalem", "Le Caire"], categorie: "Géographie" },
  { id: 7, question: "Quel détroit sépare l'Europe de l'Asie ?", reponse: "Le Bosphore", fausses: ["Le détroit de Gibraltar", "Le détroit de Béring", "Le détroit de Malacca"], categorie: "Géographie" },
  { id: 8, question: "Quelle est la plus haute montagne d'Afrique du Nord ?", reponse: "Le Toubkal", fausses: ["Le Mont Kenya", "L'Emi Koussi", "Le Ras Dashan"], categorie: "Géographie" },
  { id: 9, question: "Dans quel pays se trouve Angkor Wat ?", reponse: "Cambodge", fausses: ["Thaïlande", "Vietnam", "Laos"], categorie: "Géographie" },
  { id: 10, question: "Quelle est la capitale de la Nouvelle-Zélande ?", reponse: "Wellington", fausses: ["Auckland", "Christchurch", "Hamilton"], categorie: "Géographie" },
  { id: 11, question: "Quel océan borde la côte est des États-Unis ?", reponse: "L'Atlantique", fausses: ["Le Pacifique", "L'Arctique", "L'Indien"], categorie: "Géographie" },
  { id: 12, question: "Combien d'États composent les États-Unis ?", reponse: "50", fausses: ["48", "51", "52"], categorie: "Géographie" },
  { id: 13, question: "Quelle ville marocaine est célèbre pour sa médina bleue ?", reponse: "Chefchaouen", fausses: ["Essaouira", "Asilah", "Tétouan"], categorie: "Géographie" },
  { id: 14, question: "Quel pays a le plus de fuseaux horaires ?", reponse: "La France", fausses: ["La Russie", "Les États-Unis", "Le Canada"], categorie: "Géographie" },
  { id: 15, question: "Quelle est la capitale de la Suisse ?", reponse: "Berne", fausses: ["Zurich", "Genève", "Lausanne"], categorie: "Géographie" },
  { id: 16, question: "Dans quel pays se trouve la région de la Patagonie ?", reponse: "Argentine et Chili", fausses: ["Brésil et Uruguay", "Pérou et Bolivie", "Colombie et Équateur"], categorie: "Géographie" },
  { id: 17, question: "Quelle île est la plus grande de la Méditerranée ?", reponse: "La Sicile", fausses: ["La Sardaigne", "Chypre", "La Crète"], categorie: "Géographie" },
  { id: 18, question: "Quel pays a pour capitale Reykjavik ?", reponse: "L'Islande", fausses: ["La Norvège", "Le Groenland", "Le Danemark"], categorie: "Géographie" },
  { id: 19, question: "Quelle est la plus grande forêt tropicale du monde ?", reponse: "L'Amazonie", fausses: ["Le Bassin du Congo", "La forêt de Bornéo", "La forêt de Nouvelle-Guinée"], categorie: "Géographie" },
  { id: 20, question: "Combien de pays composent le Maghreb ?", reponse: "5", fausses: ["3", "4", "6"], categorie: "Géographie" },

  // Histoire (20 questions)
  { id: 21, question: "En quelle année a été construit le mur de Berlin ?", reponse: "1961", fausses: ["1945", "1955", "1968"], categorie: "Histoire" },
  { id: 22, question: "Qui était le pharaon lors de la construction des pyramides de Gizeh ?", reponse: "Khéops", fausses: ["Ramsès II", "Toutânkhamon", "Cléopâtre"], categorie: "Histoire" },
  { id: 23, question: "Quelle bataille mit fin au Premier Empire français ?", reponse: "Waterloo", fausses: ["Austerlitz", "Iéna", "Leipzig"], categorie: "Histoire" },
  { id: 24, question: "En quelle année la Première Guerre mondiale s'est-elle terminée ?", reponse: "1918", fausses: ["1917", "1919", "1920"], categorie: "Histoire" },
  { id: 25, question: "Qui était le président américain pendant la crise des missiles de Cuba ?", reponse: "John F. Kennedy", fausses: ["Dwight Eisenhower", "Lyndon Johnson", "Harry Truman"], categorie: "Histoire" },
  { id: 26, question: "Quelle dynastie a construit la Grande Muraille de Chine ?", reponse: "La dynastie Qin", fausses: ["La dynastie Ming", "La dynastie Han", "La dynastie Tang"], categorie: "Histoire" },
  { id: 27, question: "En quelle année le Titanic a-t-il coulé ?", reponse: "1912", fausses: ["1910", "1914", "1915"], categorie: "Histoire" },
  { id: 28, question: "Qui a découvert la pénicilline ?", reponse: "Alexander Fleming", fausses: ["Louis Pasteur", "Marie Curie", "Robert Koch"], categorie: "Histoire" },
  { id: 29, question: "Quelle guerre a opposé le Nord et le Sud des États-Unis ?", reponse: "La Guerre de Sécession", fausses: ["La Guerre d'Indépendance", "La Guerre de 1812", "La Guerre hispano-américaine"], categorie: "Histoire" },
  { id: 30, question: "En quelle année l'URSS s'est-elle dissoute ?", reponse: "1991", fausses: ["1989", "1990", "1992"], categorie: "Histoire" },
  { id: 31, question: "Qui était le premier empereur romain ?", reponse: "Auguste", fausses: ["Jules César", "Néron", "Caligula"], categorie: "Histoire" },
  { id: 32, question: "Quelle civilisation a inventé l'écriture cunéiforme ?", reponse: "Les Sumériens", fausses: ["Les Égyptiens", "Les Babyloniens", "Les Phéniciens"], categorie: "Histoire" },
  { id: 33, question: "En quelle année la Bastille a-t-elle été prise ?", reponse: "1789", fausses: ["1788", "1790", "1792"], categorie: "Histoire" },
  { id: 34, question: "Qui a peint la Chapelle Sixtine ?", reponse: "Michel-Ange", fausses: ["Léonard de Vinci", "Raphaël", "Le Caravage"], categorie: "Histoire" },
  { id: 35, question: "Quelle était la capitale de l'Empire byzantin ?", reponse: "Constantinople", fausses: ["Athènes", "Rome", "Alexandrie"], categorie: "Histoire" },
  { id: 36, question: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?", reponse: "1492", fausses: ["1490", "1494", "1498"], categorie: "Histoire" },
  { id: 37, question: "Qui était le roi de France pendant la Révolution ?", reponse: "Louis XVI", fausses: ["Louis XIV", "Louis XV", "Louis XVIII"], categorie: "Histoire" },
  { id: 38, question: "Quelle bataille navale a opposé la France et l'Angleterre en 1805 ?", reponse: "Trafalgar", fausses: ["Aboukir", "Copenhague", "Texel"], categorie: "Histoire" },
  { id: 39, question: "Qui a écrit 'Le Prince' ?", reponse: "Machiavel", fausses: ["Rousseau", "Montesquieu", "Voltaire"], categorie: "Histoire" },
  { id: 40, question: "En quelle année le Maroc est-il devenu indépendant ?", reponse: "1956", fausses: ["1952", "1960", "1962"], categorie: "Histoire" },

  // Sciences (20 questions)
  { id: 41, question: "Quel est le symbole chimique du fer ?", reponse: "Fe", fausses: ["Fr", "F", "Fi"], categorie: "Sciences" },
  { id: 42, question: "Combien de chromosomes a l'être humain ?", reponse: "46", fausses: ["44", "48", "50"], categorie: "Sciences" },
  { id: 43, question: "Quelle est la planète la plus chaude du système solaire ?", reponse: "Vénus", fausses: ["Mercure", "Mars", "Jupiter"], categorie: "Sciences" },
  { id: 44, question: "Qui a développé la théorie de la relativité ?", reponse: "Albert Einstein", fausses: ["Isaac Newton", "Galilée", "Stephen Hawking"], categorie: "Sciences" },
  { id: 45, question: "Quel est l'élément chimique le plus abondant dans l'univers ?", reponse: "L'hydrogène", fausses: ["L'oxygène", "L'hélium", "Le carbone"], categorie: "Sciences" },
  { id: 46, question: "Combien de vertèbres a la colonne vertébrale humaine ?", reponse: "33", fausses: ["30", "36", "40"], categorie: "Sciences" },
  { id: 47, question: "Quelle est la vitesse du son dans l'air ?", reponse: "340 m/s", fausses: ["300 m/s", "380 m/s", "400 m/s"], categorie: "Sciences" },
  { id: 48, question: "Quel organe produit l'insuline ?", reponse: "Le pancréas", fausses: ["Le foie", "La rate", "L'estomac"], categorie: "Sciences" },
  { id: 49, question: "Combien de lunes a Mars ?", reponse: "2", fausses: ["1", "3", "4"], categorie: "Sciences" },
  { id: 50, question: "Quelle est la formule chimique du sel de table ?", reponse: "NaCl", fausses: ["KCl", "CaCl2", "NaOH"], categorie: "Sciences" },
  { id: 51, question: "Quel est le plus grand organe du corps humain ?", reponse: "La peau", fausses: ["Le foie", "Les poumons", "Le cerveau"], categorie: "Sciences" },
  { id: 52, question: "Combien de temps met la lumière du Soleil pour atteindre la Terre ?", reponse: "8 minutes", fausses: ["5 minutes", "10 minutes", "15 minutes"], categorie: "Sciences" },
  { id: 53, question: "Quelle est l'unité de mesure de la force ?", reponse: "Le Newton", fausses: ["Le Joule", "Le Watt", "Le Pascal"], categorie: "Sciences" },
  { id: 54, question: "Quel est le nom scientifique de l'homme moderne ?", reponse: "Homo sapiens", fausses: ["Homo erectus", "Homo habilis", "Homo neanderthalensis"], categorie: "Sciences" },
  { id: 55, question: "Combien de cœurs a une pieuvre ?", reponse: "3", fausses: ["1", "2", "4"], categorie: "Sciences" },
  { id: 56, question: "Quelle est la température du corps humain en degrés Celsius ?", reponse: "37°C", fausses: ["36°C", "38°C", "35°C"], categorie: "Sciences" },
  { id: 57, question: "Quel gaz représente 78% de l'atmosphère terrestre ?", reponse: "L'azote", fausses: ["L'oxygène", "Le dioxyde de carbone", "L'argon"], categorie: "Sciences" },
  { id: 58, question: "Qui a inventé le téléphone ?", reponse: "Alexander Graham Bell", fausses: ["Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"], categorie: "Sciences" },
  { id: 59, question: "Combien de degrés y a-t-il dans un triangle ?", reponse: "180°", fausses: ["90°", "360°", "270°"], categorie: "Sciences" },
  { id: 60, question: "Quel est le point d'ébullition de l'eau en altitude ?", reponse: "Moins de 100°C", fausses: ["100°C", "Plus de 100°C", "110°C"], categorie: "Sciences" },

  // Culture générale (20 questions)
  { id: 61, question: "Qui a écrit 'L'Étranger' ?", reponse: "Albert Camus", fausses: ["Jean-Paul Sartre", "André Malraux", "André Gide"], categorie: "Culture" },
  { id: 62, question: "Quelle est la langue officielle du Brésil ?", reponse: "Le portugais", fausses: ["L'espagnol", "Le français", "L'anglais"], categorie: "Culture" },
  { id: 63, question: "Combien de symphonies Beethoven a-t-il composées ?", reponse: "9", fausses: ["7", "10", "12"], categorie: "Culture" },
  { id: 64, question: "Quel peintre a coupé son oreille ?", reponse: "Van Gogh", fausses: ["Gauguin", "Cézanne", "Monet"], categorie: "Culture" },
  { id: 65, question: "Dans quelle ville se trouve le musée du Prado ?", reponse: "Madrid", fausses: ["Barcelone", "Lisbonne", "Rome"], categorie: "Culture" },
  { id: 66, question: "Qui a composé 'Les Quatre Saisons' ?", reponse: "Vivaldi", fausses: ["Bach", "Mozart", "Haendel"], categorie: "Culture" },
  { id: 67, question: "Quel est le vrai nom de Molière ?", reponse: "Jean-Baptiste Poquelin", fausses: ["Jean-Baptiste Lully", "Pierre Corneille", "Jean Racine"], categorie: "Culture" },
  { id: 68, question: "Combien d'Oscars a remporté le film 'Titanic' ?", reponse: "11", fausses: ["9", "10", "12"], categorie: "Culture" },
  { id: 69, question: "Qui a peint 'Guernica' ?", reponse: "Picasso", fausses: ["Dalí", "Miró", "Goya"], categorie: "Culture" },
  { id: 70, question: "Quelle est la plus ancienne université du monde encore en activité ?", reponse: "Al Quaraouiyine (Fès)", fausses: ["La Sorbonne", "Oxford", "Bologne"], categorie: "Culture" },
  { id: 71, question: "Qui a écrit 'Le Petit Prince' ?", reponse: "Antoine de Saint-Exupéry", fausses: ["Jules Verne", "Marcel Pagnol", "Jean de La Fontaine"], categorie: "Culture" },
  { id: 72, question: "Combien de notes y a-t-il dans une gamme ?", reponse: "7", fausses: ["5", "8", "12"], categorie: "Culture" },
  { id: 73, question: "Quel est le nom du détective créé par Agatha Christie ?", reponse: "Hercule Poirot", fausses: ["Sherlock Holmes", "Philip Marlowe", "Sam Spade"], categorie: "Culture" },
  { id: 74, question: "Dans quelle ville se trouve la Sagrada Familia ?", reponse: "Barcelone", fausses: ["Madrid", "Séville", "Valence"], categorie: "Culture" },
  { id: 75, question: "Qui a réalisé le film '2001, l'Odyssée de l'espace' ?", reponse: "Stanley Kubrick", fausses: ["Steven Spielberg", "George Lucas", "Ridley Scott"], categorie: "Culture" },
  { id: 76, question: "Quel est le prénom de Mozart ?", reponse: "Wolfgang Amadeus", fausses: ["Johann Sebastian", "Ludwig van", "Franz Joseph"], categorie: "Culture" },
  { id: 77, question: "Qui a écrit 'Voyage au bout de la nuit' ?", reponse: "Louis-Ferdinand Céline", fausses: ["Louis Aragon", "André Breton", "Paul Éluard"], categorie: "Culture" },
  { id: 78, question: "Combien de prix Nobel existe-t-il ?", reponse: "6", fausses: ["5", "7", "8"], categorie: "Culture" },
  { id: 79, question: "Qui a sculpté 'Le Penseur' ?", reponse: "Auguste Rodin", fausses: ["Michel-Ange", "Donatello", "Bernini"], categorie: "Culture" },
  { id: 80, question: "Quel est le nom du vaisseau spatial dans Star Wars ?", reponse: "Le Faucon Millenium", fausses: ["L'Enterprise", "Le Nostromo", "Le Discovery"], categorie: "Culture" },

  // Sport (20 questions)
  { id: 81, question: "En quelle année ont eu lieu les premiers Jeux Olympiques modernes ?", reponse: "1896", fausses: ["1900", "1892", "1904"], categorie: "Sport" },
  { id: 82, question: "Quel pays a organisé la Coupe du monde de football en 2018 ?", reponse: "La Russie", fausses: ["Le Brésil", "L'Allemagne", "La France"], categorie: "Sport" },
  { id: 83, question: "Combien de Grand Chelem existe-t-il en tennis ?", reponse: "4", fausses: ["3", "5", "6"], categorie: "Sport" },
  { id: 84, question: "Quel cycliste a remporté le plus de Tours de France ?", reponse: "Jacques Anquetil, Eddy Merckx, Bernard Hinault, Miguel Indurain (5 chacun)", fausses: ["Lance Armstrong", "Chris Froome", "Alberto Contador"], categorie: "Sport" },
  { id: 85, question: "Dans quel sport excelle Usain Bolt ?", reponse: "L'athlétisme", fausses: ["Le football", "Le basketball", "La natation"], categorie: "Sport" },
  { id: 86, question: "Combien de points vaut un essai au rugby ?", reponse: "5", fausses: ["3", "7", "4"], categorie: "Sport" },
  { id: 87, question: "Quel pays a remporté la première Coupe du monde de football ?", reponse: "L'Uruguay", fausses: ["Le Brésil", "L'Argentine", "L'Italie"], categorie: "Sport" },
  { id: 88, question: "Combien de médailles d'or olympiques Michael Phelps a-t-il remportées ?", reponse: "23", fausses: ["18", "20", "25"], categorie: "Sport" },
  { id: 89, question: "Dans quel sport utilise-t-on un putter ?", reponse: "Le golf", fausses: ["Le cricket", "Le polo", "Le hockey"], categorie: "Sport" },
  { id: 90, question: "Quelle équipe a remporté le plus de Ligues des Champions ?", reponse: "Le Real Madrid", fausses: ["Le FC Barcelone", "L'AC Milan", "Liverpool"], categorie: "Sport" },
  { id: 91, question: "Combien de joueurs composent une équipe de rugby à XV ?", reponse: "15", fausses: ["13", "14", "16"], categorie: "Sport" },
  { id: 92, question: "Qui détient le record du monde du 100 mètres ?", reponse: "Usain Bolt", fausses: ["Carl Lewis", "Ben Johnson", "Maurice Greene"], categorie: "Sport" },
  { id: 93, question: "Dans quel pays se trouve le circuit de Formule 1 de Monza ?", reponse: "Italie", fausses: ["France", "Espagne", "Allemagne"], categorie: "Sport" },
  { id: 94, question: "Combien de temps dure un match de football ?", reponse: "90 minutes", fausses: ["80 minutes", "100 minutes", "85 minutes"], categorie: "Sport" },
  { id: 95, question: "Quel joueur de tennis a remporté le plus de titres du Grand Chelem ?", reponse: "Novak Djokovic", fausses: ["Rafael Nadal", "Roger Federer", "Pete Sampras"], categorie: "Sport" },
  { id: 96, question: "Dans quel sport pratique-t-on le 'smash' ?", reponse: "Le tennis", fausses: ["Le football", "Le rugby", "L'athlétisme"], categorie: "Sport" },
  { id: 97, question: "Combien de sets faut-il gagner pour remporter Roland-Garros (hommes) ?", reponse: "3", fausses: ["2", "4", "5"], categorie: "Sport" },
  { id: 98, question: "Quel pays a accueilli les Jeux Olympiques en 2016 ?", reponse: "Le Brésil", fausses: ["La Chine", "Le Royaume-Uni", "Le Japon"], categorie: "Sport" },
  { id: 99, question: "Dans quel sport y a-t-il un libéro ?", reponse: "Le volleyball", fausses: ["Le handball", "Le basketball", "Le water-polo"], categorie: "Sport" },
  { id: 100, question: "Combien de joueurs y a-t-il sur un terrain de cricket ?", reponse: "11", fausses: ["9", "12", "13"], categorie: "Sport" }
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
console.log("=== 100 QUESTIONS NIVEAU MOYEN POUR UN CHAMPION ===\n");

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
