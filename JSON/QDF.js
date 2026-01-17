// 100 Questions de difficulté DIFFICILE - Manche "Face à Face"
// 8 propositions par question - La bonne réponse est mélangée aléatoirement

const questionsBase = [
  // Géographie avancée (20 questions)
  { 
    id: 1, 
    question: "Quelle est la capitale du Kazakhstan ?", 
    reponse: "Astana (Nur-Sultan)", 
    fausses: ["Almaty", "Bichkek", "Tachkent", "Achgabat", "Douchanbé", "Bakou"], 
    categorie: "Géographie" 
  },
  { 
    id: 2, 
    question: "Quel est le point le plus profond des océans ?", 
    reponse: "La fosse des Mariannes", 
    fausses: ["La fosse des Tonga", "La fosse de Porto Rico", "La fosse du Japon", "La fosse des Kermadec", "La fosse des Philippines", "La fosse du Pérou-Chili"], 
    categorie: "Géographie" 
  },
  { 
    id: 3, 
    question: "Quelle est la capitale du Myanmar (Birmanie) ?", 
    reponse: "Naypyidaw", 
    fausses: ["Rangoun", "Mandalay", "Bangkok", "Vientiane", "Phnom Penh", "Hanoi"], 
    categorie: "Géographie" 
  },
  { 
    id: 4, 
    question: "Dans quel pays se trouve la ville de Ouagadougou ?", 
    reponse: "Burkina Faso", 
    fausses: ["Mali", "Niger", "Tchad", "Togo", "Bénin", "Mauritanie"], 
    categorie: "Géographie" 
  },
  { 
    id: 5, 
    question: "Quelle est la capitale de la Mongolie ?", 
    reponse: "Oulan-Bator", 
    fausses: ["Almaty", "Bichkek", "Achgabat", "Astana", "Irkoutsk", "Vladivostok"], 
    categorie: "Géographie" 
  },
  { 
    id: 6, 
    question: "Quel détroit sépare l'Europe de l'Asie en Turquie ?", 
    reponse: "Le Bosphore", 
    fausses: ["Les Dardanelles", "Le détroit de Gibraltar", "Le détroit de Béring", "Le détroit de Malacca", "Le détroit d'Ormuz", "Le Bab el-Mandeb"], 
    categorie: "Géographie" 
  },
  { 
    id: 7, 
    question: "Quelle est la capitale de l'Érythrée ?", 
    reponse: "Asmara", 
    fausses: ["Djibouti", "Addis-Abeba", "Mogadiscio", "Khartoum", "Nairobi", "Kampala"], 
    categorie: "Géographie" 
  },
  { 
    id: 8, 
    question: "Dans quel pays se trouve le lac Titicaca ?", 
    reponse: "Pérou et Bolivie", 
    fausses: ["Chili et Argentine", "Équateur et Colombie", "Brésil et Paraguay", "Venezuela et Colombie", "Pérou et Équateur", "Bolivie et Chili"], 
    categorie: "Géographie" 
  },
  { 
    id: 9, 
    question: "Quel est le plus haut volcan actif d'Europe ?", 
    reponse: "L'Etna", 
    fausses: ["Le Vésuve", "Le Stromboli", "L'Hekla", "Le Santorin", "Le Teide", "Le Pico"], 
    categorie: "Géographie" 
  },
  { 
    id: 10, 
    question: "Quelle est la capitale du Bhoutan ?", 
    reponse: "Thimphou", 
    fausses: ["Katmandou", "Dhaka", "Colombo", "New Delhi", "Islamabad", "Kaboul"], 
    categorie: "Géographie" 
  },
  { 
    id: 11, 
    question: "Quel pays possède le plus de volcans actifs au monde ?", 
    reponse: "L'Indonésie", 
    fausses: ["Le Japon", "Les Philippines", "Les États-Unis", "Le Chili", "L'Islande", "Le Mexique"], 
    categorie: "Géographie" 
  },
  { 
    id: 12, 
    question: "Quelle est la capitale de l'Azerbaïdjan ?", 
    reponse: "Bakou", 
    fausses: ["Tbilissi", "Erevan", "Achgabat", "Tachkent", "Douchanbé", "Astana"], 
    categorie: "Géographie" 
  },
  { 
    id: 13, 
    question: "Combien de pays ont une frontière terrestre avec la Chine ?", 
    reponse: "14", 
    fausses: ["12", "16", "10", "18", "8", "20"], 
    categorie: "Géographie" 
  },
  { 
    id: 14, 
    question: "Quel est le deuxième plus long fleuve d'Afrique ?", 
    reponse: "Le Congo", 
    fausses: ["Le Niger", "Le Zambèze", "Le Nil Blanc", "L'Orange", "Le Limpopo", "Le Sénégal"], 
    categorie: "Géographie" 
  },
  { 
    id: 15, 
    question: "Dans quel pays se trouve le désert de Gobi ?", 
    reponse: "Mongolie et Chine", 
    fausses: ["Kazakhstan", "Afghanistan", "Iran", "Pakistan", "Ouzbékistan", "Turkménistan"], 
    categorie: "Géographie" 
  },
  { 
    id: 16, 
    question: "Quelle est la plus grande île de la Méditerranée ?", 
    reponse: "La Sicile", 
    fausses: ["La Sardaigne", "Chypre", "La Crète", "La Corse", "Malte", "Rhodes"], 
    categorie: "Géographie" 
  },
  { 
    id: 17, 
    question: "Dans quel pays se trouve la région du Darfour ?", 
    reponse: "Soudan", 
    fausses: ["Tchad", "République centrafricaine", "Éthiopie", "Soudan du Sud", "Érythrée", "Somalie"], 
    categorie: "Géographie" 
  },
  { 
    id: 18, 
    question: "Quelle ville est surnommée 'la Venise du Nord' ?", 
    reponse: "Amsterdam", 
    fausses: ["Stockholm", "Bruges", "Copenhague", "Saint-Pétersbourg", "Hamburg", "Oslo"], 
    categorie: "Géographie" 
  },
  { 
    id: 19, 
    question: "Dans quel pays se trouve la Transylvanie ?", 
    reponse: "Roumanie", 
    fausses: ["Hongrie", "Bulgarie", "Serbie", "Moldavie", "Ukraine", "Slovaquie"], 
    categorie: "Géographie" 
  },
  { 
    id: 20, 
    question: "Quelle est la capitale du Kirghizistan ?", 
    reponse: "Bichkek", 
    fausses: ["Tachkent", "Almaty", "Douchanbé", "Achgabat", "Astana", "Oulan-Bator"], 
    categorie: "Géographie" 
  },

  // Histoire approfondie (20 questions)
  { 
    id: 21, 
    question: "En quelle année a eu lieu la bataille de Lépante ?", 
    reponse: "1571", 
    fausses: ["1453", "1588", "1492", "1526", "1683", "1529"], 
    categorie: "Histoire" 
  },
  { 
    id: 22, 
    question: "Qui était le dernier empereur de Chine ?", 
    reponse: "Puyi", 
    fausses: ["Guangxu", "Qianlong", "Kangxi", "Cixi", "Yongzheng", "Jiaqing"], 
    categorie: "Histoire" 
  },
  { 
    id: 23, 
    question: "En quelle année Constantin a-t-il légalisé le christianisme (Édit de Milan) ?", 
    reponse: "313", 
    fausses: ["325", "380", "395", "312", "410", "476"], 
    categorie: "Histoire" 
  },
  { 
    id: 24, 
    question: "Qui était le sultan ottoman lors de la prise de Constantinople ?", 
    reponse: "Mehmed II", 
    fausses: ["Soliman le Magnifique", "Selim Ier", "Bayezid II", "Mourad II", "Mehmed Ier", "Orkhan"], 
    categorie: "Histoire" 
  },
  { 
    id: 25, 
    question: "Quelle dynastie a construit la Grande Muraille de Chine ?", 
    reponse: "La dynastie Qin", 
    fausses: ["La dynastie Ming", "La dynastie Han", "La dynastie Tang", "La dynastie Song", "La dynastie Yuan", "La dynastie Zhou"], 
    categorie: "Histoire" 
  },
  { 
    id: 26, 
    question: "En quelle année a eu lieu la bataille de Poitiers (Charles Martel) ?", 
    reponse: "732", 
    fausses: ["800", "622", "1066", "711", "756", "814"], 
    categorie: "Histoire" 
  },
  { 
    id: 27, 
    question: "Qui a fondé l'Empire moghol en Inde ?", 
    reponse: "Babur", 
    fausses: ["Akbar", "Shah Jahan", "Aurangzeb", "Humayun", "Jahangir", "Timur"], 
    categorie: "Histoire" 
  },
  { 
    id: 28, 
    question: "En quelle année le traité de Westphalie a-t-il été signé ?", 
    reponse: "1648", 
    fausses: ["1618", "1659", "1678", "1598", "1688", "1713"], 
    categorie: "Histoire" 
  },
  { 
    id: 29, 
    question: "Quelle civilisation a construit Teotihuacan au Mexique ?", 
    reponse: "Une civilisation pré-aztèque", 
    fausses: ["Les Mayas", "Les Aztèques", "Les Toltèques", "Les Olmèques", "Les Zapotèques", "Les Mixtèques"], 
    categorie: "Histoire" 
  },
  { 
    id: 30, 
    question: "Qui était le roi de Prusse pendant la guerre de Sept Ans ?", 
    reponse: "Frédéric II le Grand", 
    fausses: ["Frédéric-Guillaume Ier", "Frédéric III", "Guillaume Ier", "Frédéric-Guillaume II", "Guillaume II", "Frédéric Ier"], 
    categorie: "Histoire" 
  },
  { 
    id: 31, 
    question: "En quelle année Saladin a-t-il repris Jérusalem aux croisés ?", 
    reponse: "1187", 
    fausses: ["1099", "1204", "1291", "1169", "1191", "1244"], 
    categorie: "Histoire" 
  },
  { 
    id: 32, 
    question: "Quelle était la capitale de l'Empire perse achéménide ?", 
    reponse: "Persépolis", 
    fausses: ["Babylone", "Suse", "Ecbatane", "Pasargades", "Ctésiphon", "Ispahan"], 
    categorie: "Histoire" 
  },
  { 
    id: 33, 
    question: "En quelle année la dynastie des Omeyyades a-t-elle été renversée ?", 
    reponse: "750", 
    fausses: ["711", "800", "632", "661", "786", "809"], 
    categorie: "Histoire" 
  },
  { 
    id: 34, 
    question: "Qui était l'empereur romain lors de l'éruption du Vésuve (79 ap. J.-C.) ?", 
    reponse: "Titus", 
    fausses: ["Néron", "Vespasien", "Domitien", "Trajan", "Hadrien", "Claude"], 
    categorie: "Histoire" 
  },
  { 
    id: 35, 
    question: "Quelle bataille a marqué la fin de la République romaine (31 av. J.-C.) ?", 
    reponse: "La bataille d'Actium", 
    fausses: ["La bataille de Pharsale", "La bataille d'Alésia", "La bataille de Philippes", "La bataille de Zama", "La bataille de Cannes", "La bataille de Trasimène"], 
    categorie: "Histoire" 
  },
  { 
    id: 36, 
    question: "En quelle année la dynastie alaouite a-t-elle unifié le Maroc ?", 
    reponse: "1666", 
    fausses: ["1578", "1700", "1554", "1610", "1720", "1591"], 
    categorie: "Histoire" 
  },
  { 
    id: 37, 
    question: "Qui était le chef des Huns lors de l'invasion de l'Europe ?", 
    reponse: "Attila", 
    fausses: ["Genséric", "Alaric", "Théodoric", "Odoacre", "Clovis", "Stilicon"], 
    categorie: "Histoire" 
  },
  { 
    id: 38, 
    question: "En quelle année a eu lieu la révolte des Boxers en Chine ?", 
    reponse: "1899-1901", 
    fausses: ["1850-1864", "1911", "1927", "1884-1885", "1937-1945", "1894-1895"], 
    categorie: "Histoire" 
  },
  { 
    id: 39, 
    question: "Quelle bataille a arrêté l'expansion mongole en Europe centrale (1241) ?", 
    reponse: "La bataille de Legnica", 
    fausses: ["La bataille de Vienne", "La bataille de Kosovo", "La bataille de Mohács", "La bataille de Nicopolis", "La bataille de Varna", "La bataille de Manzikert"], 
    categorie: "Histoire" 
  },
  { 
    id: 40, 
    question: "Quel pharaon est traditionnellement associé à l'Exode biblique ?", 
    reponse: "Ramsès II", 
    fausses: ["Toutânkhamon", "Akhénaton", "Khéops", "Thoutmôsis III", "Séthi Ier", "Aménophis III"], 
    categorie: "Histoire" 
  },

  // Sciences avancées (20 questions)
  { 
    id: 41, 
    question: "Quel est le nombre d'Avogadro ?", 
    reponse: "6,022 × 10²³", 
    fausses: ["3,14 × 10⁸", "9,81 m/s²", "6,626 × 10⁻³⁴", "1,38 × 10⁻²³", "6,67 × 10⁻¹¹", "2,99 × 10⁸"], 
    categorie: "Sciences" 
  },
  { 
    id: 42, 
    question: "Quelle particule a été découverte au CERN en 2012 ?", 
    reponse: "Le boson de Higgs", 
    fausses: ["Le quark top", "Le graviton", "Le neutrino", "Le quark bottom", "Le boson W", "Le photon"], 
    categorie: "Sciences" 
  },
  { 
    id: 43, 
    question: "Combien d'acides aminés essentiels existe-t-il pour l'être humain ?", 
    reponse: "9", 
    fausses: ["8", "10", "12", "11", "7", "13"], 
    categorie: "Sciences" 
  },
  { 
    id: 44, 
    question: "Quelle est la constante de Planck (h) ?", 
    reponse: "6,626 × 10⁻³⁴ J·s", 
    fausses: ["3 × 10⁸ m/s", "9,81 m/s²", "6,67 × 10⁻¹¹", "1,38 × 10⁻²³", "6,022 × 10²³", "2,99 × 10⁸"], 
    categorie: "Sciences" 
  },
  { 
    id: 45, 
    question: "Qui a proposé le principe d'incertitude en mécanique quantique ?", 
    reponse: "Werner Heisenberg", 
    fausses: ["Niels Bohr", "Erwin Schrödinger", "Max Planck", "Louis de Broglie", "Paul Dirac", "Wolfgang Pauli"], 
    categorie: "Sciences" 
  },
  { 
    id: 46, 
    question: "Combien de paires de nerfs crâniens possède l'être humain ?", 
    reponse: "12", 
    fausses: ["10", "14", "16", "8", "18", "20"], 
    categorie: "Sciences" 
  },
  { 
    id: 47, 
    question: "Quelle est la demi-vie du carbone-14 ?", 
    reponse: "5 730 ans", 
    fausses: ["2 865 ans", "11 460 ans", "1 200 ans", "8 000 ans", "3 500 ans", "10 000 ans"], 
    categorie: "Sciences" 
  },
  { 
    id: 48, 
    question: "Quel est le nom du cycle de l'acide citrique en biochimie ?", 
    reponse: "Le cycle de Krebs", 
    fausses: ["Le cycle de Calvin", "Le cycle de l'urée", "Le cycle de Cori", "La glycolyse", "La néoglucogenèse", "La β-oxydation"], 
    categorie: "Sciences" 
  },
  { 
    id: 49, 
    question: "Combien d'isotopes stables possède l'étain (Sn) ?", 
    reponse: "10", 
    fausses: ["6", "8", "12", "14", "4", "16"], 
    categorie: "Sciences" 
  },
  { 
    id: 50, 
    question: "Quelle est la température du zéro absolu en Celsius ?", 
    reponse: "-273,15°C", 
    fausses: ["-273°C", "-300°C", "-250°C", "-270°C", "-280°C", "-260°C"], 
    categorie: "Sciences" 
  },
  { 
    id: 51, 
    question: "Qui a découvert la structure en double hélice de l'ADN avec Watson ?", 
    reponse: "Francis Crick", 
    fausses: ["Rosalind Franklin", "Linus Pauling", "Maurice Wilkins", "Erwin Chargaff", "Oswald Avery", "Frederick Griffith"], 
    categorie: "Sciences" 
  },
  { 
    id: 52, 
    question: "Quelle est la distance moyenne Terre-Lune ?", 
    reponse: "384 400 km", 
    fausses: ["350 000 km", "420 000 km", "300 000 km", "400 000 km", "360 000 km", "450 000 km"], 
    categorie: "Sciences" 
  },
  { 
    id: 53, 
    question: "Combien de quarks composent un proton ?", 
    reponse: "3", 
    fausses: ["2", "4", "6", "5", "1", "8"], 
    categorie: "Sciences" 
  },
  { 
    id: 54, 
    question: "Quel est le nom du processus de mort cellulaire programmée ?", 
    reponse: "L'apoptose", 
    fausses: ["La nécrose", "La mitose", "La méiose", "La cytokinèse", "L'autophagie", "La phagocytose"], 
    categorie: "Sciences" 
  },
  { 
    id: 55, 
    question: "Quelle est la masse approximative du boson de Higgs en GeV/c² ?", 
    reponse: "Environ 125", 
    fausses: ["Environ 91", "Environ 173", "Environ 80", "Environ 200", "Environ 60", "Environ 150"], 
    categorie: "Sciences" 
  },
  { 
    id: 56, 
    question: "Combien d'éléments chimiques sont naturellement présents sur Terre ?", 
    reponse: "94", 
    fausses: ["92", "98", "118", "90", "100", "88"], 
    categorie: "Sciences" 
  },
  { 
    id: 57, 
    question: "Qui a établi les lois de l'hérédité génétique ?", 
    reponse: "Gregor Mendel", 
    fausses: ["Charles Darwin", "Thomas Morgan", "Hugo de Vries", "Oswald Avery", "Barbara McClintock", "Rosalind Franklin"], 
    categorie: "Sciences" 
  },
  { 
    id: 58, 
    question: "Combien de dimensions possède l'espace-temps selon Einstein ?", 
    reponse: "4", 
    fausses: ["3", "5", "11", "10", "6", "2"], 
    categorie: "Sciences" 
  },
  { 
    id: 59, 
    question: "Quel est le nom de la théorie unifiant les forces électromagnétique et faible ?", 
    reponse: "La théorie électrofaible", 
    fausses: ["La théorie des cordes", "La chromodynamique quantique", "La supersymétrie", "La gravitation quantique", "La théorie M", "La théorie GUT"], 
    categorie: "Sciences" 
  },
  { 
    id: 60, 
    question: "Quelle enzyme catalyse la réplication de l'ADN ?", 
    reponse: "L'ADN polymérase", 
    fausses: ["L'ARN polymérase", "La ligase", "L'hélicase", "La topoisomérase", "La primase", "La télomérase"], 
    categorie: "Sciences" 
  },

  // Culture d'élite (20 questions)
  { 
    id: 61, 
    question: "Qui a écrit 'À la recherche du temps perdu' ?", 
    reponse: "Marcel Proust", 
    fausses: ["André Gide", "Paul Valéry", "Louis-Ferdinand Céline", "François Mauriac", "Julien Gracq", "Claude Simon"], 
    categorie: "Culture" 
  },
  { 
    id: 62, 
    question: "Combien d'opéras Mozart a-t-il composés ?", 
    reponse: "22", 
    fausses: ["18", "26", "30", "20", "24", "28"], 
    categorie: "Culture" 
  },
  { 
    id: 63, 
    question: "Qui a écrit 'Critique de la raison pure' ?", 
    reponse: "Emmanuel Kant", 
    fausses: ["Georg Hegel", "Arthur Schopenhauer", "Friedrich Nietzsche", "Baruch Spinoza", "Gottfried Leibniz", "René Descartes"], 
    categorie: "Culture" 
  },
  { 
    id: 64, 
    question: "Qui a peint 'Les Ménines' ?", 
    reponse: "Diego Vélasquez", 
    fausses: ["Francisco Goya", "Le Greco", "Murillo", "Zurbarán", "Ribera", "El Greco"], 
    categorie: "Culture" 
  },
  { 
    id: 65, 
    question: "Qui a composé 'Le Sacre du printemps' ?", 
    reponse: "Igor Stravinsky", 
    fausses: ["Sergueï Prokofiev", "Dmitri Chostakovitch", "Maurice Ravel", "Claude Debussy", "Béla Bartók", "Arnold Schoenberg"], 
    categorie: "Culture" 
  },
  { 
    id: 66, 
    question: "Quel est le vrai nom de Voltaire ?", 
    reponse: "François-Marie Arouet", 
    fausses: ["Jean-Jacques Rousseau", "Denis Diderot", "Charles de Montesquieu", "Jean le Rond d'Alembert", "Pierre Bayle", "Condorcet"], 
    categorie: "Culture" 
  },
  { 
    id: 67, 
    question: "Combien de symphonies complètes Mahler a-t-il composées ?", 
    reponse: "9", 
    fausses: ["8", "10", "11", "7", "12", "6"], 
    categorie: "Culture" 
  },
  { 
    id: 68, 
    question: "Qui a écrit 'Ulysse' en 1922 ?", 
    reponse: "James Joyce", 
    fausses: ["Virginia Woolf", "T.S. Eliot", "Franz Kafka", "Thomas Mann", "William Faulkner", "D.H. Lawrence"], 
    categorie: "Culture" 
  },
  { 
    id: 69, 
    question: "Dans quelle ville est né le mouvement Bauhaus ?", 
    reponse: "Weimar", 
    fausses: ["Berlin", "Dessau", "Munich", "Francfort", "Hamburg", "Cologne"], 
    categorie: "Culture" 
  },
  { 
    id: 70, 
    question: "Qui a réalisé le film 'Le Septième Sceau' ?", 
    reponse: "Ingmar Bergman", 
    fausses: ["Federico Fellini", "Akira Kurosawa", "Luis Buñuel", "Andrei Tarkovski", "Michelangelo Antonioni", "Jean-Luc Godard"], 
    categorie: "Culture" 
  },
  { 
    id: 71, 
    question: "Combien de quatuors à cordes Beethoven a-t-il composés ?", 
    reponse: "16", 
    fausses: ["14", "18", "20", "12", "22", "10"], 
    categorie: "Culture" 
  },
  { 
    id: 72, 
    question: "Qui a écrit 'La Divine Comédie' ?", 
    reponse: "Dante Alighieri", 
    fausses: ["Pétrarque", "Boccace", "Le Tasse", "Machiavel", "Arioste", "Castiglione"], 
    categorie: "Culture" 
  },
  { 
    id: 73, 
    question: "Dans quelle ville se trouve le musée de l'Ermitage ?", 
    reponse: "Saint-Pétersbourg", 
    fausses: ["Moscou", "Kiev", "Stockholm", "Helsinki", "Tallinn", "Varsovie"], 
    categorie: "Culture" 
  },
  { 
    id: 74, 
    question: "Qui a peint 'Le Cri' ?", 
    reponse: "Edvard Munch", 
    fausses: ["Vincent van Gogh", "Egon Schiele", "James Ensor", "Emil Nolde", "Ernst Ludwig Kirchner", "Oskar Kokoschka"], 
    categorie: "Culture" 
  },
  { 
    id: 75, 
    question: "Qui a obtenu le prix Nobel de littérature en 1957 ?", 
    reponse: "Albert Camus", 
    fausses: ["Jean-Paul Sartre", "André Malraux", "Samuel Beckett", "Boris Pasternak", "Salvatore Quasimodo", "Saint-John Perse"], 
    categorie: "Culture" 
  },
  { 
    id: 76, 
    question: "Combien de mouvements comporte une symphonie classique ?", 
    reponse: "4", 
    fausses: ["3", "5", "6", "2", "7", "8"], 
    categorie: "Culture" 
  },
  { 
    id: 77, 
    question: "Qui a écrit 'Les Frères Karamazov' ?", 
    reponse: "Fiodor Dostoïevski", 
    fausses: ["Léon Tolstoï", "Anton Tchekhov", "Ivan Tourgueniev", "Nikolaï Gogol", "Maxime Gorki", "Alexandre Pouchkine"], 
    categorie: "Culture" 
  },
  { 
    id: 78, 
    question: "Qui a conçu la cathédrale de Brasilia ?", 
    reponse: "Oscar Niemeyer", 
    fausses: ["Le Corbusier", "Frank Lloyd Wright", "Mies van der Rohe", "Walter Gropius", "Alvar Aalto", "Louis Kahn"], 
    categorie: "Culture" 
  },
  { 
    id: 79, 
    question: "Qui a écrit 'En attendant Godot' ?", 
    reponse: "Samuel Beckett", 
    fausses: ["Eugène Ionesco", "Jean-Paul Sartre", "Albert Camus", "Jean Genet", "Arthur Adamov", "Fernando Arrabal"], 
    categorie: "Culture" 
  },
  { 
    id: 80, 
    question: "Qui a peint 'La Persistance de la mémoire' (montres molles) ?", 
    reponse: "Salvador Dalí", 
    fausses: ["René Magritte", "Joan Miró", "Max Ernst", "Giorgio de Chirico", "Yves Tanguy", "André Breton"], 
    categorie: "Culture" 
  },

  // Sport d'experts (20 questions)
  { 
    id: 81, 
    question: "En quelle année Jesse Owens a-t-il remporté 4 médailles d'or aux JO de Berlin ?", 
    reponse: "1936", 
    fausses: ["1932", "1948", "1952", "1928", "1956", "1940"], 
    categorie: "Sport" 
  },
  { 
    id: 82, 
    question: "Quel joueur de tennis a réalisé le Grand Chelem calendaire en 1969 ?", 
    reponse: "Rod Laver", 
    fausses: ["Ken Rosewall", "Roy Emerson", "John Newcombe", "Lew Hoad", "Fred Stolle", "Tony Roche"], 
    categorie: "Sport" 
  },
  { 
    id: 83, 
    question: "Combien de médailles d'or olympiques Paavo Nurmi a-t-il remportées ?", 
    reponse: "9", 
    fausses: ["7", "11", "8", "10", "6", "12"], 
    categorie: "Sport" 
  },
  { 
    id: 84, 
    question: "Quel pays a remporté la première Coupe du monde de rugby en 1987 ?", 
    reponse: "Nouvelle-Zélande", 
    fausses: ["Australie", "Afrique du Sud", "Angleterre", "France", "Galles", "Irlande"], 
    categorie: "Sport" 
  },
  { 
    id: 85, 
    question: "En quelle année Ayrton Senna a-t-il remporté son premier titre de F1 ?", 
    reponse: "1988", 
    fausses: ["1987", "1989", "1990", "1991", "1986", "1992"], 
    categorie: "Sport" 
  },
  { 
    id: 86, 
    question: "Combien de Ballons d'Or Lionel Messi a-t-il remportés ?", 
    reponse: "8", 
    fausses: ["7", "6", "9", "5", "10", "4"], 
    categorie: "Sport" 
  },
  { 
    id: 87, 
    question: "Combien de points Wilt Chamberlain a-t-il marqués en un match NBA ?", 
    reponse: "100", 
    fausses: ["81", "78", "92", "88", "95", "73"], 
    categorie: "Sport" 
  },
  { 
    id: 88, 
    question: "En quelle année le Tour de France a-t-il été créé ?", 
    reponse: "1903", 
    fausses: ["1898", "1910", "1905", "1900", "1907", "1912"], 
    categorie: "Sport" 
  },
  { 
    id: 89, 
    question: "Quel boxeur était surnommé 'Hands of Stone' ?", 
    reponse: "Roberto Durán", 
    fausses: ["Sugar Ray Leonard", "Marvin Hagler", "Thomas Hearns", "Carlos Monzón", "Wilfredo Gómez", "Alexis Argüello"], 
    categorie: "Sport" 
  },
  { 
    id: 90, 
    question: "Combien de titres mondiaux Valentino Rossi a-t-il remportés (toutes catégories) ?", 
    reponse: "9", 
    fausses: ["7", "8", "10", "6", "11", "5"], 
    categorie: "Sport" 
  },
  { 
    id: 91, 
    question: "Quel pays a organisé les premiers Jeux Olympiques d'hiver en 1924 ?", 
    reponse: "France (Chamonix)", 
    fausses: ["Suisse", "Norvège", "Autriche", "Suède", "Allemagne", "Italie"], 
    categorie: "Sport" 
  },
  { 
    id: 92, 
    question: "Quel joueur a marqué le plus de buts en Coupe du monde de football ?", 
    reponse: "Miroslav Klose (16)", 
    fausses: ["Ronaldo (15)", "Gerd Müller (14)", "Pelé (12)", "Just Fontaine (13)", "Sándor Kocsis (11)", "Thomas Müller (10)"], 
    categorie: "Sport" 
  },
  { 
    id: 93, 
    question: "En quelle année l'URSS a-t-elle boycotté les JO de Los Angeles ?", 
    reponse: "1984", 
    fausses: ["1980", "1988", "1976", "1972", "1992", "1968"], 
    categorie: "Sport" 
  },
  { 
    id: 94, 
    question: "Combien de victoires en Grand Chelem Serena Williams a-t-elle remportées ?", 
    reponse: "23", 
    fausses: ["21", "24", "22", "20", "25", "19"], 
    categorie: "Sport" 
  },
  { 
    id: 95, 
    question: "Qui a été le premier nageur à passer sous 50 secondes au 100m nage libre ?", 
    reponse: "César Cielo", 
    fausses: ["Alexander Popov", "Pieter van den Hoogenband", "Ian Thorpe", "Matt Biondi", "Gary Hall Jr.", "Eamon Sullivan"], 
    categorie: "Sport" 
  },
  { 
    id: 96, 
    question: "Combien de médailles olympiques Larisa Latynina a-t-elle remportées ?", 
    reponse: "18", 
    fausses: ["15", "16", "20", "14", "22", "17"], 
    categorie: "Sport" 
  },
  { 
    id: 97, 
    question: "En quelle année Diego Maradona a-t-il marqué le 'But du siècle' ?", 
    reponse: "1986", 
    fausses: ["1982", "1990", "1994", "1984", "1978", "1988"], 
    categorie: "Sport" 
  },
  { 
    id: 98, 
    question: "Quel joueur de snooker a remporté 7 championnats du monde ?", 
    reponse: "Stephen Hendry", 
    fausses: ["Steve Davis", "Ray Reardon", "John Higgins", "Ronnie O'Sullivan", "Mark Selby", "Mark Williams"], 
    categorie: "Sport" 
  },
  { 
    id: 99, 
    question: "Combien de titres en Grand Chelem Rafael Nadal a-t-il remportés à Roland-Garros ?", 
    reponse: "14", 
    fausses: ["12", "13", "15", "11", "16", "10"], 
    categorie: "Sport" 
  },
  { 
    id: 100, 
    question: "Quel pays a remporté la première Coupe du monde de football féminin en 1991 ?", 
    reponse: "États-Unis", 
    fausses: ["Norvège", "Allemagne", "Suède", "Chine", "Brésil", "Japon"], 
    categorie: "Sport" 
  }
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
console.log("=== MANCHE FINALE: FACE À FACE - 100 QUESTIONS DIFFICILES (8 PROPOSITIONS) ===\n");

questions.forEach((q, index) => {
  console.log(`Question ${index + 1} (${q.categorie}):`);
  console.log(q.question);
  q.propositions.forEach((prop, i) => {
    const lettre = String.fromCharCode(65 + i); // A, B, C, D, E, F, G, H
    const marqueur = i === q.bonneReponse ? " ✓" : "";
    console.log(`  ${lettre}) ${prop}${marqueur}`);
  });
  console.log();
});

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questions, creerQuestions };
}
