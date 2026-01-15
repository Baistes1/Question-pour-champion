// 100 Questions de difficulté DIFFICILE - Manche "4 à la Suite"
// La bonne réponse est mélangée aléatoirement

const questionsBase = [
  // Géographie avancée (20 questions)
  { id: 1, question: "Quelle est la capitale du Kazakhstan ?", reponse: "Astana (Nur-Sultan)", fausses: ["Almaty", "Bichkek", "Tachkent"], categorie: "Géographie" },
  { id: 2, question: "Quel est le point le plus profond des océans ?", reponse: "La fosse des Mariannes", fausses: ["La fosse des Tonga", "La fosse de Porto Rico", "La fosse du Japon"], categorie: "Géographie" },
  { id: 3, question: "Dans quel pays se trouve la ville de Ouagadougou ?", reponse: "Burkina Faso", fausses: ["Mali", "Niger", "Tchad"], categorie: "Géographie" },
  { id: 4, question: "Quelle est la capitale de la Mongolie ?", reponse: "Oulan-Bator", fausses: ["Almaty", "Bichkek", "Achgabat"], categorie: "Géographie" },
  { id: 5, question: "Quel détroit sépare l'Europe de l'Asie en Turquie ?", reponse: "Le Bosphore", fausses: ["Les Dardanelles", "Le détroit de Gibraltar", "Le détroit de Béring"], categorie: "Géographie" },
  { id: 6, question: "Quelle est la capitale de l'Érythrée ?", reponse: "Asmara", fausses: ["Djibouti", "Addis-Abeba", "Mogadiscio"], categorie: "Géographie" },
  { id: 7, question: "Dans quel pays se trouve le lac Titicaca ?", reponse: "Pérou et Bolivie", fausses: ["Chili et Argentine", "Équateur et Colombie", "Brésil et Paraguay"], categorie: "Géographie" },
  { id: 8, question: "Quelle est la capitale du Myanmar (Birmanie) ?", reponse: "Naypyidaw", fausses: ["Rangoun", "Mandalay", "Bangkok"], categorie: "Géographie" },
  { id: 9, question: "Quel est le plus haut volcan actif d'Europe ?", reponse: "L'Etna", fausses: ["Le Vésuve", "Le Stromboli", "L'Hekla"], categorie: "Géographie" },
  { id: 10, question: "Dans quel pays se trouve la région du Darfour ?", reponse: "Soudan", fausses: ["Tchad", "République centrafricaine", "Éthiopie"], categorie: "Géographie" },
  { id: 11, question: "Quelle est la capitale du Bhoutan ?", reponse: "Thimphou", fausses: ["Katmandou", "Dhaka", "Colombo"], categorie: "Géographie" },
  { id: 12, question: "Quel pays possède le plus de volcans actifs au monde ?", reponse: "L'Indonésie", fausses: ["Le Japon", "Les Philippines", "Les États-Unis"], categorie: "Géographie" },
  { id: 13, question: "Dans quel océan se trouve l'archipel des Maldives ?", reponse: "L'océan Indien", fausses: ["L'océan Pacifique", "L'océan Atlantique", "La mer d'Arabie"], categorie: "Géographie" },
  { id: 14, question: "Quelle est la plus grande île de la Méditerranée ?", reponse: "La Sicile", fausses: ["La Sardaigne", "Chypre", "La Crète"], categorie: "Géographie" },
  { id: 15, question: "Dans quel pays se trouve le désert de Gobi ?", reponse: "Mongolie et Chine", fausses: ["Kazakhstan", "Afghanistan", "Iran"], categorie: "Géographie" },
  { id: 16, question: "Quelle ville est surnommée 'la Venise du Nord' ?", reponse: "Amsterdam", fausses: ["Stockholm", "Bruges", "Copenhague"], categorie: "Géographie" },
  { id: 17, question: "Combien de pays ont une frontière avec la Chine ?", reponse: "14", fausses: ["12", "16", "10"], categorie: "Géographie" },
  { id: 18, question: "Quelle est la capitale de l'Azerbaïdjan ?", reponse: "Bakou", fausses: ["Tbilissi", "Erevan", "Achgabat"], categorie: "Géographie" },
  { id: 19, question: "Dans quel pays se trouve la Transylvanie ?", reponse: "Roumanie", fausses: ["Hongrie", "Bulgarie", "Serbie"], categorie: "Géographie" },
  { id: 20, question: "Quel est le deuxième plus long fleuve d'Afrique ?", reponse: "Le Congo", fausses: ["Le Niger", "Le Zambèze", "Le Nil Blanc"], categorie: "Géographie" },

  // Histoire approfondie (20 questions)
  { id: 21, question: "En quelle année a eu lieu la bataille de Lépante ?", reponse: "1571", fausses: ["1453", "1588", "1492"], categorie: "Histoire" },
  { id: 22, question: "Qui était le dernier empereur de Chine ?", reponse: "Puyi", fausses: ["Guangxu", "Qianlong", "Kangxi"], categorie: "Histoire" },
  { id: 23, question: "En quelle année Constantin a-t-il légalisé le christianisme ?", reponse: "313 (Édit de Milan)", fausses: ["325", "380", "395"], categorie: "Histoire" },
  { id: 24, question: "Qui était le sultan ottoman lors de la prise de Constantinople ?", reponse: "Mehmed II", fausses: ["Soliman le Magnifique", "Selim Ier", "Bayezid II"], categorie: "Histoire" },
  { id: 25, question: "Quelle dynastie a construit la Grande Muraille de Chine ?", reponse: "La dynastie Qin", fausses: ["La dynastie Ming", "La dynastie Han", "La dynastie Tang"], categorie: "Histoire" },
  { id: 26, question: "En quelle année a eu lieu la bataille de Poitiers ?", reponse: "732", fausses: ["800", "622", "1066"], categorie: "Histoire" },
  { id: 27, question: "Qui a fondé l'Empire moghol en Inde ?", reponse: "Babur", fausses: ["Akbar", "Shah Jahan", "Aurangzeb"], categorie: "Histoire" },
  { id: 28, question: "En quelle année le traité de Westphalie a-t-il été signé ?", reponse: "1648", fausses: ["1618", "1659", "1678"], categorie: "Histoire" },
  { id: 29, question: "Quelle civilisation a construit Teotihuacan ?", reponse: "Une civilisation pré-aztèque", fausses: ["Les Mayas", "Les Aztèques", "Les Toltèques"], categorie: "Histoire" },
  { id: 30, question: "Qui était le roi de Prusse pendant la guerre de Sept Ans ?", reponse: "Frédéric II le Grand", fausses: ["Frédéric-Guillaume Ier", "Frédéric III", "Guillaume Ier"], categorie: "Histoire" },
  { id: 31, question: "En quelle année Saladin a-t-il repris Jérusalem ?", reponse: "1187", fausses: ["1099", "1204", "1291"], categorie: "Histoire" },
  { id: 32, question: "Quelle était la capitale de l'Empire perse achéménide ?", reponse: "Persépolis", fausses: ["Babylone", "Suse", "Ecbatane"], categorie: "Histoire" },
  { id: 33, question: "En quelle année la dynastie des Omeyyades a-t-elle été renversée ?", reponse: "750", fausses: ["711", "800", "632"], categorie: "Histoire" },
  { id: 34, question: "Qui était l'empereur romain lors de l'éruption du Vésuve ?", reponse: "Titus", fausses: ["Néron", "Vespasien", "Domitien"], categorie: "Histoire" },
  { id: 35, question: "Quelle bataille a marqué la fin de la République romaine ?", reponse: "La bataille d'Actium (31 av. J.-C.)", fausses: ["La bataille de Pharsale", "La bataille d'Alésia", "La bataille de Philippes"], categorie: "Histoire" },
  { id: 36, question: "En quelle année le royaume alaouite a-t-il unifié le Maroc ?", reponse: "1666", fausses: ["1578", "1700", "1554"], categorie: "Histoire" },
  { id: 37, question: "Qui était le chef des Huns ?", reponse: "Attila", fausses: ["Genséric", "Alaric", "Théodoric"], categorie: "Histoire" },
  { id: 38, question: "En quelle année a eu lieu la révolte des Boxers en Chine ?", reponse: "1899-1901", fausses: ["1850-1864", "1911", "1927"], categorie: "Histoire" },
  { id: 39, question: "Quelle bataille a arrêté l'expansion mongole en Europe ?", reponse: "La bataille de Legnica (1241)", fausses: ["La bataille de Vienne", "La bataille de Kosovo", "La bataille de Mohács"], categorie: "Histoire" },
  { id: 40, question: "Qui était le pharaon lors de l'Exode biblique ?", reponse: "Ramsès II (selon la tradition)", fausses: ["Toutânkhamon", "Akhénaton", "Khéops"], categorie: "Histoire" },

  // Sciences avancées (20 questions)
  { id: 41, question: "Quel est le nombre d'Avogadro ?", reponse: "6,022 × 10²³", fausses: ["3,14 × 10⁸", "9,81 m/s²", "6,626 × 10⁻³⁴"], categorie: "Sciences" },
  { id: 42, question: "Quelle particule a été découverte au CERN en 2012 ?", reponse: "Le boson de Higgs", fausses: ["Le quark top", "Le graviton", "Le neutrino"], categorie: "Sciences" },
  { id: 43, question: "Combien d'acides aminés essentiels existe-t-il pour l'homme ?", reponse: "9", fausses: ["8", "10", "12"], categorie: "Sciences" },
  { id: 44, question: "Quelle est la constante de Planck ?", reponse: "6,626 × 10⁻³⁴ J·s", fausses: ["3 × 10⁸ m/s", "9,81 m/s²", "6,67 × 10⁻¹¹"], categorie: "Sciences" },
  { id: 45, question: "Qui a proposé le principe d'incertitude ?", reponse: "Werner Heisenberg", fausses: ["Niels Bohr", "Erwin Schrödinger", "Max Planck"], categorie: "Sciences" },
  { id: 46, question: "Combien de paires de nerfs crâniens a l'être humain ?", reponse: "12", fausses: ["10", "14", "16"], categorie: "Sciences" },
  { id: 47, question: "Quelle est la demi-vie du carbone-14 ?", reponse: "5 730 ans", fausses: ["2 865 ans", "11 460 ans", "1 200 ans"], categorie: "Sciences" },
  { id: 48, question: "Quel est le nom du cycle de l'acide citrique ?", reponse: "Le cycle de Krebs", fausses: ["Le cycle de Calvin", "Le cycle de l'urée", "Le cycle de Cori"], categorie: "Sciences" },
  { id: 49, question: "Combien d'isotopes stables possède l'étain ?", reponse: "10", fausses: ["6", "8", "12"], categorie: "Sciences" },
  { id: 50, question: "Quelle est la température du zéro absolu ?", reponse: "-273,15°C", fausses: ["-273°C", "-300°C", "-250°C"], categorie: "Sciences" },
  { id: 51, question: "Qui a découvert la structure de l'ADN avec Watson ?", reponse: "Francis Crick", fausses: ["Rosalind Franklin", "Linus Pauling", "Maurice Wilkins"], categorie: "Sciences" },
  { id: 52, question: "Quelle est la distance Terre-Lune en moyenne ?", reponse: "384 400 km", fausses: ["350 000 km", "420 000 km", "300 000 km"], categorie: "Sciences" },
  { id: 53, question: "Combien de quarks composent un proton ?", reponse: "3", fausses: ["2", "4", "6"], categorie: "Sciences" },
  { id: 54, question: "Quel est le nom de la mort cellulaire programmée ?", reponse: "L'apoptose", fausses: ["La nécrose", "La mitose", "La méiose"], categorie: "Sciences" },
  { id: 55, question: "Quelle est la masse du boson de Higgs en GeV/c² ?", reponse: "Environ 125", fausses: ["Environ 91", "Environ 173", "Environ 80"], categorie: "Sciences" },
  { id: 56, question: "Combien d'éléments chimiques sont naturels ?", reponse: "94", fausses: ["92", "98", "118"], categorie: "Sciences" },
  { id: 57, question: "Qui a établi les lois de l'hérédité génétique ?", reponse: "Gregor Mendel", fausses: ["Charles Darwin", "Thomas Morgan", "Hugo de Vries"], categorie: "Sciences" },
  { id: 58, question: "Combien de dimensions a l'espace-temps selon Einstein ?", reponse: "4", fausses: ["3", "5", "11"], categorie: "Sciences" },
  { id: 59, question: "Quel est le nom de la théorie unifiant les forces électromagnétique et faible ?", reponse: "La théorie électrofaible", fausses: ["La théorie des cordes", "La chromodynamique quantique", "La supersymétrie"], categorie: "Sciences" },
  { id: 60, question: "Quelle enzyme catalyse la réplication de l'ADN ?", reponse: "L'ADN polymérase", fausses: ["L'ARN polymérase", "La ligase", "L'hélicase"], categorie: "Sciences" },

  // Culture d'élite (20 questions)
  { id: 61, question: "Qui a écrit 'À la recherche du temps perdu' ?", reponse: "Marcel Proust", fausses: ["André Gide", "Paul Valéry", "Louis-Ferdinand Céline"], categorie: "Culture" },
  { id: 62, question: "Combien d'opéras Mozart a-t-il composés ?", reponse: "22", fausses: ["18", "26", "30"], categorie: "Culture" },
  { id: 63, question: "Qui a écrit 'Critique de la raison pure' ?", reponse: "Emmanuel Kant", fausses: ["Georg Hegel", "Arthur Schopenhauer", "Friedrich Nietzsche"], categorie: "Culture" },
  { id: 64, question: "Qui a peint 'Les Ménines' ?", reponse: "Diego Vélasquez", fausses: ["Francisco Goya", "Le Greco", "Murillo"], categorie: "Culture" },
  { id: 65, question: "Qui a composé 'Le Sacre du printemps' ?", reponse: "Igor Stravinsky", fausses: ["Sergueï Prokofiev", "Dmitri Chostakovitch", "Maurice Ravel"], categorie: "Culture" },
  { id: 66, question: "Quel est le vrai nom de Voltaire ?", reponse: "François-Marie Arouet", fausses: ["Jean-Jacques Rousseau", "Denis Diderot", "Charles de Montesquieu"], categorie: "Culture" },
  { id: 67, question: "Combien de symphonies Mahler a-t-il composées (complètes) ?", reponse: "9", fausses: ["8", "10", "11"], categorie: "Culture" },
  { id: 68, question: "Qui a écrit 'Ulysse' en 1922 ?", reponse: "James Joyce", fausses: ["Virginia Woolf", "T.S. Eliot", "Franz Kafka"], categorie: "Culture" },
  { id: 69, question: "Dans quelle ville est né le Bauhaus ?", reponse: "Weimar", fausses: ["Berlin", "Dessau", "Munich"], categorie: "Culture" },
  { id: 70, question: "Qui a réalisé 'Le Septième Sceau' ?", reponse: "Ingmar Bergman", fausses: ["Federico Fellini", "Akira Kurosawa", "Luis Buñuel"], categorie: "Culture" },
  { id: 71, question: "Combien de quatuors à cordes Beethoven a-t-il composés ?", reponse: "16", fausses: ["14", "18", "20"], categorie: "Culture" },
  { id: 72, question: "Qui a écrit 'La Divine Comédie' ?", reponse: "Dante Alighieri", fausses: ["Pétrarque", "Boccace", "Le Tasse"], categorie: "Culture" },
  { id: 73, question: "Dans quelle ville se trouve le musée de l'Ermitage ?", reponse: "Saint-Pétersbourg", fausses: ["Moscou", "Kiev", "Stockholm"], categorie: "Culture" },
  { id: 74, question: "Qui a peint 'Le Cri' ?", reponse: "Edvard Munch", fausses: ["Vincent van Gogh", "Egon Schiele", "James Ensor"], categorie: "Culture" },
  { id: 75, question: "Qui a obtenu le prix Nobel de littérature en 1957 ?", reponse: "Albert Camus", fausses: ["Jean-Paul Sartre", "André Malraux", "Samuel Beckett"], categorie: "Culture" },
  { id: 76, question: "Combien de mouvements a une symphonie classique ?", reponse: "4", fausses: ["3", "5", "6"], categorie: "Culture" },
  { id: 77, question: "Qui a écrit 'Les Frères Karamazov' ?", reponse: "Fiodor Dostoïevski", fausses: ["Léon Tolstoï", "Anton Tchekhov", "Ivan Tourgueniev"], categorie: "Culture" },
  { id: 78, question: "Qui a conçu la cathédrale de Brasilia ?", reponse: "Oscar Niemeyer", fausses: ["Le Corbusier", "Frank Lloyd Wright", "Mies van der Rohe"], categorie: "Culture" },
  { id: 79, question: "Qui a écrit 'En attendant Godot' ?", reponse: "Samuel Beckett", fausses: ["Eugène Ionesco", "Jean-Paul Sartre", "Albert Camus"], categorie: "Culture" },
  { id: 80, question: "Qui a peint 'La Persistance de la mémoire' ?", reponse: "Salvador Dalí", fausses: ["René Magritte", "Joan Miró", "Max Ernst"], categorie: "Culture" },

  // Sport d'experts (20 questions)
  { id: 81, question: "En quelle année Jesse Owens a-t-il remporté 4 médailles d'or aux JO ?", reponse: "1936", fausses: ["1932", "1948", "1952"], categorie: "Sport" },
  { id: 82, question: "Quel joueur a réalisé le Grand Chelem calendaire en tennis en 1969 ?", reponse: "Rod Laver", fausses: ["Ken Rosewall", "Roy Emerson", "John Newcombe"], categorie: "Sport" },
  { id: 83, question: "Combien de médailles d'or olympiques Paavo Nurmi a-t-il remportées ?", reponse: "9", fausses: ["7", "11", "8"], categorie: "Sport" },
  { id: 84, question: "Quel pays a remporté la première Coupe du monde de rugby ?", reponse: "Nouvelle-Zélande", fausses: ["Australie", "Afrique du Sud", "Angleterre"], categorie: "Sport" },
  { id: 85, question: "En quelle année Ayrton Senna a-t-il remporté son premier titre F1 ?", reponse: "1988", fausses: ["1987", "1989", "1990"], categorie: "Sport" },
  { id: 86, question: "Combien de Ballons d'Or Lionel Messi a-t-il remportés ?", reponse: "8", fausses: ["7", "6", "9"], categorie: "Sport" },
  { id: 87, question: "Combien de points Wilt Chamberlain a-t-il marqués en un match NBA ?", reponse: "100", fausses: ["81", "78", "92"], categorie: "Sport" },
  { id: 88, question: "En quelle année le Tour de France a-t-il été créé ?", reponse: "1903", fausses: ["1898", "1910", "1905"], categorie: "Sport" },
  { id: 89, question: "Quel boxeur était surnommé 'Hands of Stone' ?", reponse: "Roberto Durán", fausses: ["Sugar Ray Leonard", "Marvin Hagler", "Thomas Hearns"], categorie: "Sport" },
  { id: 90, question: "Combien de titres mondiaux Valentino Rossi a-t-il remportés (toutes catégories) ?", reponse: "9", fausses: ["7", "8", "10"], categorie: "Sport" },
  { id: 91, question: "Quel pays a organisé les premiers Jeux Olympiques d'hiver ?", reponse: "France (Chamonix 1924)", fausses: ["Suisse", "Norvège", "Autriche"], categorie: "Sport" },
  { id: 92, question: "Quel joueur a marqué le plus de buts en Coupe du monde ?", reponse: "Miroslav Klose (16)", fausses: ["Ronaldo (15)", "Gerd Müller (14)", "Pelé (12)"], categorie: "Sport" },
  { id: 93, question: "En quelle année l'URSS a-t-elle boycotté les JO de Los Angeles ?", reponse: "1984", fausses: ["1980", "1988", "1976"], categorie: "Sport" },
  { id: 94, question: "Combien de victoires en Grand Chelem Serena Williams a-t-elle ?", reponse: "23", fausses: ["21", "24", "22"], categorie: "Sport" },
  { id: 95, question: "Qui a été le premier à passer sous 50s au 100m nage libre ?", reponse: "César Cielo", fausses: ["Alexander Popov", "Pieter van den Hoogenband", "Ian Thorpe"], categorie: "Sport" },
  { id: 96, question: "Combien de médailles olympiques Larisa Latynina a-t-elle remportées ?", reponse: "18", fausses: ["15", "16", "20"], categorie: "Sport" },
  { id: 97, question: "En quelle année Maradona a-t-il marqué le 'But du siècle' ?", reponse: "1986", fausses: ["1982", "1990", "1994"], categorie: "Sport" },
  { id: 98, question: "Quel joueur de snooker a remporté 7 championnats du monde ?", reponse: "Stephen Hendry", fausses: ["Steve Davis", "Ray Reardon", "John Higgins"], categorie: "Sport" },
  { id: 99, question: "Combien de titres en Grand Chelem Rafael Nadal a-t-il à Roland-Garros ?", reponse: "14", fausses: ["12", "13", "15"], categorie: "Sport" },
  { id: 100, question: "Quel pays a remporté la première Coupe du monde de football féminin ?", reponse: "États-Unis", fausses: ["Norvège", "Allemagne", "Suède"], categorie: "Sport" }
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
console.log("=== MANCHE 2: 4 À LA SUITE - 100 QUESTIONS DIFFICILES ===\n");

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
