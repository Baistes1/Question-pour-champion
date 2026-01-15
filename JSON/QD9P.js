// 100 Questions de difficulté DIFFICILE - Questions pour un Champion
// La bonne réponse est mélangée aléatoirement

const questionsBase = [
  // Géographie (20 questions)
  { id: 1, question: "Quelle est la capitale du Kazakhstan ?", reponse: "Astana (Nur-Sultan)", fausses: ["Almaty", "Chymkent", "Karaganda"], categorie: "Géographie" },
  { id: 2, question: "Quel est le deuxième plus long fleuve d'Afrique ?", reponse: "Le Congo", fausses: ["Le Niger", "Le Zambèze", "Le Nil Blanc"], categorie: "Géographie" },
  { id: 3, question: "Dans quel pays se trouve la ville de Tachkent ?", reponse: "Ouzbékistan", fausses: ["Turkménistan", "Tadjikistan", "Kirghizistan"], categorie: "Géographie" },
  { id: 4, question: "Quelle est la capitale de la Mongolie ?", reponse: "Oulan-Bator", fausses: ["Irkoutsk", "Vladivostok", "Almaty"], categorie: "Géographie" },
  { id: 5, question: "Combien d'îles composent l'archipel des Philippines ?", reponse: "Plus de 7000", fausses: ["Environ 5000", "Environ 3000", "Environ 10000"], categorie: "Géographie" },
  { id: 6, question: "Quel est le point culminant de l'Océanie ?", reponse: "Le Puncak Jaya (Papouasie)", fausses: ["Le Mont Cook", "Le Mont Kosciuszko", "Le Mont Wilhelm"], categorie: "Géographie" },
  { id: 7, question: "Quelle mer borde le Kazakhstan ?", reponse: "La mer Caspienne", fausses: ["La mer d'Aral", "La mer Noire", "La mer d'Azov"], categorie: "Géographie" },
  { id: 8, question: "Quelle est la capitale du Myanmar (Birmanie) ?", reponse: "Naypyidaw", fausses: ["Rangoun", "Mandalay", "Bagan"], categorie: "Géographie" },
  { id: 9, question: "Dans quel océan se trouve l'archipel des Comores ?", reponse: "L'océan Indien", fausses: ["L'océan Atlantique", "L'océan Pacifique", "La mer Rouge"], categorie: "Géographie" },
  { id: 10, question: "Quelle est la plus grande île de la Méditerranée par sa superficie ?", reponse: "La Sicile", fausses: ["La Sardaigne", "Chypre", "La Crète"], categorie: "Géographie" },
  { id: 11, question: "Quel est le plus haut volcan actif d'Europe ?", reponse: "L'Etna", fausses: ["Le Vésuve", "Le Stromboli", "Le Santorin"], categorie: "Géographie" },
  { id: 12, question: "Quelle ville marocaine abrite l'université Al Quaraouiyine, la plus ancienne au monde ?", reponse: "Fès", fausses: ["Marrakech", "Rabat", "Meknès"], categorie: "Géographie" },
  { id: 13, question: "Combien de pays ont une frontière terrestre avec la Chine ?", reponse: "14", fausses: ["12", "16", "10"], categorie: "Géographie" },
  { id: 14, question: "Quelle est la capitale du Bhoutan ?", reponse: "Thimphou", fausses: ["Katmandou", "Dhaka", "Colombo"], categorie: "Géographie" },
  { id: 15, question: "Dans quel pays se trouve le désert d'Atacama ?", reponse: "Chili", fausses: ["Pérou", "Argentine", "Bolivie"], categorie: "Géographie" },
  { id: 16, question: "Quelle est la profondeur maximale de la fosse des Mariannes ?", reponse: "Environ 11 000 mètres", fausses: ["Environ 9 000 mètres", "Environ 13 000 mètres", "Environ 8 000 mètres"], categorie: "Géographie" },
  { id: 17, question: "Quel pays possède le plus de volcans actifs au monde ?", reponse: "L'Indonésie", fausses: ["Le Japon", "Les Philippines", "Les États-Unis"], categorie: "Géographie" },
  { id: 18, question: "Quelle est la capitale de l'Érythrée ?", reponse: "Asmara", fausses: ["Djibouti", "Addis-Abeba", "Mogadiscio"], categorie: "Géographie" },
  { id: 19, question: "Quel détroit sépare le Maroc de l'Espagne ?", reponse: "Le détroit de Gibraltar", fausses: ["Le détroit de Messine", "Le Bosphore", "Le détroit des Dardanelles"], categorie: "Géographie" },
  { id: 20, question: "Quelle est la plus grande île du monde non continentale ?", reponse: "Le Groenland", fausses: ["La Nouvelle-Guinée", "Bornéo", "Madagascar"], categorie: "Géographie" },

  // Histoire (20 questions)
  { id: 21, question: "En quelle année a eu lieu la bataille de Lépante ?", reponse: "1571", fausses: ["1453", "1492", "1588"], categorie: "Histoire" },
  { id: 22, question: "Qui était le dernier empereur de Chine ?", reponse: "Puyi", fausses: ["Guangxu", "Cixi", "Qianlong"], categorie: "Histoire" },
  { id: 23, question: "Quelle bataille mit fin à la guerre de Sept Ans ?", reponse: "Le traité de Paris (1763)", fausses: ["La bataille de Rossbach", "La bataille de Minden", "La bataille de Québec"], categorie: "Histoire" },
  { id: 24, question: "En quelle année Constantin Ier a-t-il légalisé le christianisme ?", reponse: "313 (Édit de Milan)", fausses: ["325", "380", "392"], categorie: "Histoire" },
  { id: 25, question: "Qui était le sultan ottoman pendant la prise de Constantinople ?", reponse: "Mehmed II", fausses: ["Soliman le Magnifique", "Selim Ier", "Bayezid II"], categorie: "Histoire" },
  { id: 26, question: "Quelle dynastie mongole a régné sur la Chine ?", reponse: "La dynastie Yuan", fausses: ["La dynastie Ming", "La dynastie Qing", "La dynastie Song"], categorie: "Histoire" },
  { id: 27, question: "En quelle année a eu lieu la révolte des Boxers en Chine ?", reponse: "1899-1901", fausses: ["1850-1864", "1911", "1927"], categorie: "Histoire" },
  { id: 28, question: "Qui a été le dernier pharaon d'Égypte ?", reponse: "Cléopâtre VII", fausses: ["Ptolémée XIII", "Césarion", "Ptolémée XV"], categorie: "Histoire" },
  { id: 29, question: "Quelle bataille a arrêté l'expansion arabe en Europe occidentale ?", reponse: "La bataille de Poitiers (732)", fausses: ["La bataille de Tours", "La bataille de Toulouse", "La bataille de Covadonga"], categorie: "Histoire" },
  { id: 30, question: "En quelle année le traité de Westphalie a-t-il été signé ?", reponse: "1648", fausses: ["1618", "1659", "1678"], categorie: "Histoire" },
  { id: 31, question: "Qui était l'empereur romain lors de l'éruption du Vésuve qui détruisit Pompéi ?", reponse: "Titus", fausses: ["Néron", "Vespasien", "Domitien"], categorie: "Histoire" },
  { id: 32, question: "Quelle civilisation a construit la cité de Teotihuacan ?", reponse: "Une civilisation méso-américaine pré-aztèque", fausses: ["Les Mayas", "Les Aztèques", "Les Toltèques"], categorie: "Histoire" },
  { id: 33, question: "En quelle année Saladin a-t-il repris Jérusalem aux croisés ?", reponse: "1187", fausses: ["1099", "1169", "1204"], categorie: "Histoire" },
  { id: 34, question: "Qui était le roi de Prusse pendant la guerre de Sept Ans ?", reponse: "Frédéric II (le Grand)", fausses: ["Frédéric-Guillaume Ier", "Frédéric-Guillaume II", "Frédéric III"], categorie: "Histoire" },
  { id: 35, question: "Quelle était la capitale de l'Empire perse achéménide ?", reponse: "Persépolis", fausses: ["Babylone", "Suse", "Ecbatane"], categorie: "Histoire" },
  { id: 36, question: "En quelle année la dynastie des Omeyyades a-t-elle été renversée ?", reponse: "750", fausses: ["711", "786", "809"], categorie: "Histoire" },
  { id: 37, question: "Qui a fondé l'Empire moghol en Inde ?", reponse: "Babur", fausses: ["Akbar", "Humayun", "Shah Jahan"], categorie: "Histoire" },
  { id: 38, question: "Quelle bataille a marqué la fin de la République romaine ?", reponse: "La bataille d'Actium (31 av. J.-C.)", fausses: ["La bataille de Pharsale", "La bataille d'Alesia", "La bataille de Philippes"], categorie: "Histoire" },
  { id: 39, question: "En quelle année le royaume du Maroc a-t-il été unifié par la dynastie alaouite ?", reponse: "1666", fausses: ["1578", "1554", "1700"], categorie: "Histoire" },
  { id: 40, question: "Qui était le chef des Huns lors de l'invasion de l'Empire romain ?", reponse: "Attila", fausses: ["Genséric", "Alaric", "Théodoric"], categorie: "Histoire" },

  // Sciences (20 questions)
  { id: 41, question: "Quel est le nombre d'Avogadro ?", reponse: "6,022 × 10²³", fausses: ["6,626 × 10⁻³⁴", "3,14159", "9,81"], categorie: "Sciences" },
  { id: 42, question: "Quelle particule subatomique a été découverte au CERN en 2012 ?", reponse: "Le boson de Higgs", fausses: ["Le quark top", "Le graviton", "Le neutrino"], categorie: "Sciences" },
  { id: 43, question: "Combien d'acides aminés essentiels existe-t-il pour l'être humain ?", reponse: "9", fausses: ["8", "10", "11"], categorie: "Sciences" },
  { id: 44, question: "Quelle est la constante de Planck ?", reponse: "6,626 × 10⁻³⁴ J·s", fausses: ["1,38 × 10⁻²³ J/K", "3 × 10⁸ m/s", "6,67 × 10⁻¹¹ N·m²/kg²"], categorie: "Sciences" },
  { id: 45, question: "Quel scientifique a proposé le principe d'incertitude ?", reponse: "Werner Heisenberg", fausses: ["Niels Bohr", "Erwin Schrödinger", "Max Planck"], categorie: "Sciences" },
  { id: 46, question: "Combien de paires de nerfs crâniens possède l'être humain ?", reponse: "12", fausses: ["10", "14", "16"], categorie: "Sciences" },
  { id: 47, question: "Quelle est la demi-vie du carbone-14 ?", reponse: "5 730 ans", fausses: ["11 460 ans", "2 865 ans", "1 200 ans"], categorie: "Sciences" },
  { id: 48, question: "Quel est le nom du cycle de l'acide citrique ?", reponse: "Le cycle de Krebs", fausses: ["Le cycle de Calvin", "Le cycle de l'urée", "Le cycle de Cori"], categorie: "Sciences" },
  { id: 49, question: "Combien d'isotopes stables possède l'étain ?", reponse: "10", fausses: ["6", "8", "12"], categorie: "Sciences" },
  { id: 50, question: "Quelle est la température du zéro absolu en Celsius ?", reponse: "-273,15°C", fausses: ["-273°C", "-270°C", "-300°C"], categorie: "Sciences" },
  { id: 51, question: "Qui a découvert la structure de l'ADN avec Watson ?", reponse: "Francis Crick", fausses: ["Rosalind Franklin", "Linus Pauling", "Maurice Wilkins"], categorie: "Sciences" },
  { id: 52, question: "Quelle est la distance moyenne Terre-Lune ?", reponse: "384 400 km", fausses: ["350 000 km", "420 000 km", "300 000 km"], categorie: "Sciences" },
  { id: 53, question: "Combien de quarks composent un proton ?", reponse: "3", fausses: ["2", "4", "6"], categorie: "Sciences" },
  { id: 54, question: "Quel est le nom du processus de mort cellulaire programmée ?", reponse: "L'apoptose", fausses: ["La nécrose", "La mitose", "La méiose"], categorie: "Sciences" },
  { id: 55, question: "Quelle est la masse du boson de Higgs en GeV/c² ?", reponse: "Environ 125", fausses: ["Environ 91", "Environ 173", "Environ 80"], categorie: "Sciences" },
  { id: 56, question: "Combien d'éléments chimiques sont naturels sur Terre ?", reponse: "94", fausses: ["92", "98", "118"], categorie: "Sciences" },
  { id: 57, question: "Quelle est l'équation de la relativité restreinte d'Einstein ?", reponse: "E = mc²", fausses: ["F = ma", "E = hν", "P = mv"], categorie: "Sciences" },
  { id: 58, question: "Qui a établi les lois de l'hérédité génétique ?", reponse: "Gregor Mendel", fausses: ["Charles Darwin", "Thomas Hunt Morgan", "Hugo de Vries"], categorie: "Sciences" },
  { id: 59, question: "Combien de dimensions possède l'espace-temps selon Einstein ?", reponse: "4", fausses: ["3", "5", "11"], categorie: "Sciences" },
  { id: 60, question: "Quel est le nom de la théorie qui unifie les forces électromagnétiques et faibles ?", reponse: "La théorie électrofaible", fausses: ["La théorie des cordes", "La chromodynamique quantique", "La supersymétrie"], categorie: "Sciences" },

  // Culture générale (20 questions)
  { id: 61, question: "Qui a écrit 'À la recherche du temps perdu' ?", reponse: "Marcel Proust", fausses: ["André Gide", "Paul Valéry", "Louis-Ferdinand Céline"], categorie: "Culture" },
  { id: 62, question: "Combien d'opéras Mozart a-t-il composés ?", reponse: "22", fausses: ["18", "26", "20"], categorie: "Culture" },
  { id: 63, question: "Quel philosophe a écrit 'Critique de la raison pure' ?", reponse: "Emmanuel Kant", fausses: ["Georg Hegel", "Arthur Schopenhauer", "Friedrich Nietzsche"], categorie: "Culture" },
  { id: 64, question: "Qui a peint 'Les Ménines' ?", reponse: "Diego Vélasquez", fausses: ["Francisco Goya", "Le Greco", "Murillo"], categorie: "Culture" },
  { id: 65, question: "En quelle année Beethoven est-il devenu complètement sourd ?", reponse: "Vers 1818-1820", fausses: ["Vers 1800", "Vers 1810", "Vers 1825"], categorie: "Culture" },
  { id: 66, question: "Qui a composé 'Le Sacre du printemps' ?", reponse: "Igor Stravinsky", fausses: ["Sergueï Prokofiev", "Dmitri Chostakovitch", "Maurice Ravel"], categorie: "Culture" },
  { id: 67, question: "Quel est le vrai prénom de Voltaire ?", reponse: "François-Marie Arouet", fausses: ["Jean-Jacques Rousseau", "Denis Diderot", "Charles de Montesquieu"], categorie: "Culture" },
  { id: 68, question: "Combien de symphonies Mahler a-t-il composées (complètes) ?", reponse: "9", fausses: ["8", "10", "11"], categorie: "Culture" },
  { id: 69, question: "Qui a écrit 'Ulysse' en 1922 ?", reponse: "James Joyce", fausses: ["Virginia Woolf", "T.S. Eliot", "Franz Kafka"], categorie: "Culture" },
  { id: 70, question: "Dans quelle ville est né le mouvement Bauhaus ?", reponse: "Weimar", fausses: ["Berlin", "Dessau", "Munich"], categorie: "Culture" },
  { id: 71, question: "Qui a réalisé le film 'Le Septième Sceau' ?", reponse: "Ingmar Bergman", fausses: ["Federico Fellini", "Akira Kurosawa", "Luis Buñuel"], categorie: "Culture" },
  { id: 72, question: "Combien de quatuors à cordes Beethoven a-t-il composés ?", reponse: "16", fausses: ["14", "18", "20"], categorie: "Culture" },
  { id: 73, question: "Qui a écrit 'La Divine Comédie' ?", reponse: "Dante Alighieri", fausses: ["Pétrarque", "Boccace", "Le Tasse"], categorie: "Culture" },
  { id: 74, question: "Dans quelle ville se trouve le musée de l'Ermitage ?", reponse: "Saint-Pétersbourg", fausses: ["Moscou", "Kiev", "Stockholm"], categorie: "Culture" },
  { id: 75, question: "Qui a peint 'Le Cri' ?", reponse: "Edvard Munch", fausses: ["Vincent van Gogh", "Egon Schiele", "James Ensor"], categorie: "Culture" },
  { id: 76, question: "Quel écrivain a obtenu le prix Nobel de littérature en 1957 ?", reponse: "Albert Camus", fausses: ["Jean-Paul Sartre", "André Malraux", "Samuel Beckett"], categorie: "Culture" },
  { id: 77, question: "Qui a composé 'La Flûte enchantée' ?", reponse: "Wolfgang Amadeus Mozart", fausses: ["Joseph Haydn", "Ludwig van Beethoven", "Franz Schubert"], categorie: "Culture" },
  { id: 78, question: "Combien de mouvements comporte une symphonie classique ?", reponse: "4", fausses: ["3", "5", "6"], categorie: "Culture" },
  { id: 79, question: "Qui a écrit 'Les Frères Karamazov' ?", reponse: "Fiodor Dostoïevski", fausses: ["Léon Tolstoï", "Anton Tchekhov", "Ivan Tourgueniev"], categorie: "Culture" },
  { id: 80, question: "Quel architecte a conçu la cathédrale de Brasilia ?", reponse: "Oscar Niemeyer", fausses: ["Le Corbusier", "Frank Lloyd Wright", "Ludwig Mies van der Rohe"], categorie: "Culture" },

  // Sport (20 questions)
  { id: 81, question: "En quelle année Jesse Owens a-t-il remporté 4 médailles d'or aux JO de Berlin ?", reponse: "1936", fausses: ["1932", "1940", "1948"], categorie: "Sport" },
  { id: 82, question: "Quel joueur de tennis a remporté le Grand Chelem en 1969 ?", reponse: "Rod Laver", fausses: ["Ken Rosewall", "Roy Emerson", "John Newcombe"], categorie: "Sport" },
  { id: 83, question: "Combien de médailles d'or olympiques Paavo Nurmi a-t-il remportées ?", reponse: "9", fausses: ["7", "11", "8"], categorie: "Sport" },
  { id: 84, question: "Quel pays a remporté la première Coupe du monde de rugby ?", reponse: "La Nouvelle-Zélande", fausses: ["L'Australie", "L'Afrique du Sud", "La France"], categorie: "Sport" },
  { id: 85, question: "En quelle année Ayrton Senna a-t-il remporté son premier titre de F1 ?", reponse: "1988", fausses: ["1987", "1989", "1990"], categorie: "Sport" },
  { id: 86, question: "Combien de Ballons d'Or Lionel Messi a-t-il remportés ?", reponse: "8", fausses: ["7", "9", "6"], categorie: "Sport" },
  { id: 87, question: "Quel joueur d'échecs a battu Garry Kasparov en 1997 ?", reponse: "Deep Blue (ordinateur IBM)", fausses: ["Viswanathan Anand", "Vladimir Kramnik", "Anatoli Karpov"], categorie: "Sport" },
  { id: 88, question: "Combien de points Wilt Chamberlain a-t-il marqués en un match NBA ?", reponse: "100", fausses: ["81", "78", "92"], categorie: "Sport" },
  { id: 89, question: "En quelle année le Tour de France a-t-il été créé ?", reponse: "1903", fausses: ["1898", "1910", "1905"], categorie: "Sport" },
  { id: 90, question: "Quel boxeur était surnommé 'Hands of Stone' ?", reponse: "Roberto Durán", fausses: ["Sugar Ray Leonard", "Marvin Hagler", "Thomas Hearns"], categorie: "Sport" },
  { id: 91, question: "Combien de titres de champion du monde Valentino Rossi a-t-il remportés en MotoGP ?", reponse: "9 (toutes catégories)", fausses: ["7", "8", "10"], categorie: "Sport" },
  { id: 92, question: "Quel pays a organisé les premiers Jeux Olympiques d'hiver ?", reponse: "La France (Chamonix 1924)", fausses: ["La Suisse", "La Norvège", "L'Autriche"], categorie: "Sport" },
  { id: 93, question: "Combien de manches parfaites ont été lancées en MLB au 20e siècle ?", reponse: "11", fausses: ["9", "13", "15"], categorie: "Sport" },
  { id: 94, question: "Quel joueur a marqué le plus de buts en Coupe du monde de football ?", reponse: "Miroslav Klose (16)", fausses: ["Ronaldo (15)", "Gerd Müller (14)", "Just Fontaine (13)"], categorie: "Sport" },
  { id: 95, question: "En quelle année l'URSS a-t-elle boycotté les Jeux Olympiques de Los Angeles ?", reponse: "1984", fausses: ["1980", "1988", "1976"], categorie: "Sport" },
  { id: 96, question: "Combien de victoires en Grand Chelem Serena Williams a-t-elle remportées ?", reponse: "23", fausses: ["21", "24", "22"], categorie: "Sport" },
  { id: 97, question: "Quel nageur a été le premier à passer sous les 50 secondes au 100m nage libre ?", reponse: "César Cielo", fausses: ["Alexander Popov", "Pieter van den Hoogenband", "Ian Thorpe"], categorie: "Sport" },
  { id: 98, question: "Combien de médailles olympiques Larisa Latynina a-t-elle remportées ?", reponse: "18", fausses: ["15", "16", "20"], categorie: "Sport" },
  { id: 99, question: "En quelle année Diego Maradona a-t-il marqué le 'But du siècle' ?", reponse: "1986", fausses: ["1982", "1990", "1994"], categorie: "Sport" },
  { id: 100, question: "Quel joueur de snooker a remporté le plus de championnats du monde ?", reponse: "Stephen Hendry (7)", fausses: ["Steve Davis (6)", "Ronnie O'Sullivan (7)", "Ray Reardon (6)"], categorie: "Sport" }
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
console.log("=== 100 QUESTIONS NIVEAU DIFFICILE POUR UN CHAMPION ===\n");

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
