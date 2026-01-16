// 100 Questions de difficulté MOYENNE - Manche "Face à Face"
// 8 propositions par question - La bonne réponse est mélangée aléatoirement

const questionsBase = [
  // Géographie (20 questions)
  { 
    id: 1, 
    question: "Quelle est la capitale de l'Australie ?", 
    reponse: "Canberra", 
    fausses: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adélaïde", "Darwin"], 
    categorie: "Géographie" 
  },
  { 
    id: 2, 
    question: "Quel est le plus long fleuve du monde ?", 
    reponse: "Le Nil", 
    fausses: ["L'Amazone", "Le Yangtsé", "Le Mississippi", "La Volga", "Le Danube", "Le Congo"], 
    categorie: "Géographie" 
  },
  { 
    id: 3, 
    question: "Dans quel pays se trouve le Mont Fuji ?", 
    reponse: "Japon", 
    fausses: ["Chine", "Corée du Sud", "Thaïlande", "Vietnam", "Mongolie", "Philippines"], 
    categorie: "Géographie" 
  },
  { 
    id: 4, 
    question: "Quelle est la capitale du Canada ?", 
    reponse: "Ottawa", 
    fausses: ["Toronto", "Montréal", "Vancouver", "Québec", "Calgary", "Edmonton"], 
    categorie: "Géographie" 
  },
  { 
    id: 5, 
    question: "Quel océan sépare l'Amérique de l'Asie ?", 
    reponse: "L'océan Pacifique", 
    fausses: ["L'océan Atlantique", "L'océan Indien", "L'océan Arctique", "La mer de Chine", "La mer du Japon", "La mer Méditerranée"], 
    categorie: "Géographie" 
  },
  { 
    id: 6, 
    question: "Dans quel pays se trouve Prague ?", 
    reponse: "République tchèque", 
    fausses: ["Pologne", "Hongrie", "Slovaquie", "Autriche", "Roumanie", "Bulgarie"], 
    categorie: "Géographie" 
  },
  { 
    id: 7, 
    question: "Quelle est la monnaie du Royaume-Uni ?", 
    reponse: "La livre sterling", 
    fausses: ["L'euro", "Le dollar", "Le franc", "La couronne", "Le mark", "Le peso"], 
    categorie: "Géographie" 
  },
  { 
    id: 8, 
    question: "Quel pays a pour capitale Buenos Aires ?", 
    reponse: "Argentine", 
    fausses: ["Brésil", "Chili", "Uruguay", "Paraguay", "Pérou", "Bolivie"], 
    categorie: "Géographie" 
  },
  { 
    id: 9, 
    question: "Quelle mer borde Israël ?", 
    reponse: "La mer Méditerranée", 
    fausses: ["La mer Rouge", "La mer Noire", "La mer Caspienne", "Le golfe Persique", "La mer d'Arabie", "La mer Morte"], 
    categorie: "Géographie" 
  },
  { 
    id: 10, 
    question: "Dans quel pays se trouve la Transylvanie ?", 
    reponse: "Roumanie", 
    fausses: ["Bulgarie", "Hongrie", "Serbie", "Moldavie", "Ukraine", "Slovaquie"], 
    categorie: "Géographie" 
  },
  { 
    id: 11, 
    question: "Quelle est la capitale de la Norvège ?", 
    reponse: "Oslo", 
    fausses: ["Stockholm", "Helsinki", "Copenhague", "Reykjavik", "Bergen", "Tallinn"], 
    categorie: "Géographie" 
  },
  { 
    id: 12, 
    question: "Quel pays partage la plus longue frontière avec la France ?", 
    reponse: "L'Espagne", 
    fausses: ["L'Allemagne", "L'Italie", "La Belgique", "La Suisse", "Le Luxembourg", "Monaco"], 
    categorie: "Géographie" 
  },
  { 
    id: 13, 
    question: "Dans quelle ville se trouve la Statue de la Liberté ?", 
    reponse: "New York", 
    fausses: ["Washington", "Boston", "Philadelphie", "Chicago", "Los Angeles", "San Francisco"], 
    categorie: "Géographie" 
  },
  { 
    id: 14, 
    question: "Quel est le plus petit pays du monde ?", 
    reponse: "Le Vatican", 
    fausses: ["Monaco", "Saint-Marin", "Liechtenstein", "Malte", "Andorre", "Luxembourg"], 
    categorie: "Géographie" 
  },
  { 
    id: 15, 
    question: "Quelle ville marocaine est connue pour ses tanneries ?", 
    reponse: "Fès", 
    fausses: ["Marrakech", "Casablanca", "Tanger", "Meknès", "Rabat", "Agadir"], 
    categorie: "Géographie" 
  },
  { 
    id: 16, 
    question: "Quel pays a pour capitale Lisbonne ?", 
    reponse: "Portugal", 
    fausses: ["Espagne", "Grèce", "Italie", "Croatie", "Malte", "Chypre"], 
    categorie: "Géographie" 
  },
  { 
    id: 17, 
    question: "Dans quel pays se trouve le Machu Picchu ?", 
    reponse: "Pérou", 
    fausses: ["Bolivie", "Équateur", "Colombie", "Chili", "Argentine", "Brésil"], 
    categorie: "Géographie" 
  },
  { 
    id: 18, 
    question: "Quelle est la capitale de la Turquie ?", 
    reponse: "Ankara", 
    fausses: ["Istanbul", "Izmir", "Antalya", "Bursa", "Adana", "Konya"], 
    categorie: "Géographie" 
  },
  { 
    id: 19, 
    question: "Quel fleuve traverse Paris ?", 
    reponse: "La Seine", 
    fausses: ["La Loire", "Le Rhône", "La Garonne", "La Marne", "L'Oise", "La Meuse"], 
    categorie: "Géographie" 
  },
  { 
    id: 20, 
    question: "Dans quel pays se trouve la Grande Barrière de Corail ?", 
    reponse: "Australie", 
    fausses: ["Philippines", "Indonésie", "Thaïlande", "Malaisie", "Fidji", "Nouvelle-Zélande"], 
    categorie: "Géographie" 
  },

  // Histoire (20 questions)
  { 
    id: 21, 
    question: "En quelle année a débuté la Seconde Guerre mondiale ?", 
    reponse: "1939", 
    fausses: ["1938", "1940", "1941", "1937", "1942", "1936"], 
    categorie: "Histoire" 
  },
  { 
    id: 22, 
    question: "Qui a peint la Chapelle Sixtine ?", 
    reponse: "Michel-Ange", 
    fausses: ["Léonard de Vinci", "Raphaël", "Botticelli", "Le Caravage", "Titien", "Donatello"], 
    categorie: "Histoire" 
  },
  { 
    id: 23, 
    question: "En quelle année l'homme a-t-il marché sur la Lune ?", 
    reponse: "1969", 
    fausses: ["1968", "1970", "1971", "1967", "1972", "1966"], 
    categorie: "Histoire" 
  },
  { 
    id: 24, 
    question: "Qui était le premier président des États-Unis ?", 
    reponse: "George Washington", 
    fausses: ["Thomas Jefferson", "Abraham Lincoln", "Benjamin Franklin", "John Adams", "James Madison", "Theodore Roosevelt"], 
    categorie: "Histoire" 
  },
  { 
    id: 25, 
    question: "Quelle guerre a opposé le Nord et le Sud des États-Unis ?", 
    reponse: "La Guerre de Sécession", 
    fausses: ["La Guerre d'Indépendance", "La Guerre de 1812", "La Guerre hispano-américaine", "La Guerre du Vietnam", "La Guerre de Corée", "La Guerre du Mexique"], 
    categorie: "Histoire" 
  },
  { 
    id: 26, 
    question: "En quelle année le mur de Berlin est-il tombé ?", 
    reponse: "1989", 
    fausses: ["1987", "1990", "1991", "1988", "1985", "1992"], 
    categorie: "Histoire" 
  },
  { 
    id: 27, 
    question: "Qui a découvert l'Amérique en 1492 ?", 
    reponse: "Christophe Colomb", 
    fausses: ["Amerigo Vespucci", "Fernand de Magellan", "Vasco de Gama", "Marco Polo", "Jacques Cartier", "Hernán Cortés"], 
    categorie: "Histoire" 
  },
  { 
    id: 28, 
    question: "Quelle civilisation a construit les pyramides de Gizeh ?", 
    reponse: "Les Égyptiens", 
    fausses: ["Les Mayas", "Les Aztèques", "Les Incas", "Les Babyloniens", "Les Assyriens", "Les Phéniciens"], 
    categorie: "Histoire" 
  },
  { 
    id: 29, 
    question: "Qui était Jules César ?", 
    reponse: "Un empereur romain", 
    fausses: ["Un roi égyptien", "Un philosophe grec", "Un général carthaginois", "Un empereur perse", "Un pharaon", "Un consul romain"], 
    categorie: "Histoire" 
  },
  { 
    id: 30, 
    question: "En quelle année a eu lieu la Révolution française ?", 
    reponse: "1789", 
    fausses: ["1776", "1799", "1804", "1792", "1793", "1815"], 
    categorie: "Histoire" 
  },
  { 
    id: 31, 
    question: "Qui a inventé l'imprimerie ?", 
    reponse: "Gutenberg", 
    fausses: ["Léonard de Vinci", "Isaac Newton", "Galilée", "Thomas Edison", "Benjamin Franklin", "Alexander Bell"], 
    categorie: "Histoire" 
  },
  { 
    id: 32, 
    question: "Quel empereur a unifié la Chine ?", 
    reponse: "Qin Shi Huang", 
    fausses: ["Mao Zedong", "Confucius", "Sun Tzu", "Genghis Khan", "Kublai Khan", "Marco Polo"], 
    categorie: "Histoire" 
  },
  { 
    id: 33, 
    question: "En quelle année le Titanic a-t-il coulé ?", 
    reponse: "1912", 
    fausses: ["1910", "1914", "1918", "1911", "1913", "1915"], 
    categorie: "Histoire" 
  },
  { 
    id: 34, 
    question: "Qui a peint la Joconde ?", 
    reponse: "Léonard de Vinci", 
    fausses: ["Michel-Ange", "Raphaël", "Donatello", "Botticelli", "Le Caravage", "Titien"], 
    categorie: "Histoire" 
  },
  { 
    id: 35, 
    question: "Quelle était la capitale de l'Empire byzantin ?", 
    reponse: "Constantinople", 
    fausses: ["Rome", "Athènes", "Alexandrie", "Jérusalem", "Antioche", "Babylone"], 
    categorie: "Histoire" 
  },
  { 
    id: 36, 
    question: "Qui était Cléopâtre ?", 
    reponse: "Une reine d'Égypte", 
    fausses: ["Une impératrice romaine", "Une déesse grecque", "Une princesse perse", "Une reine de Babylone", "Une pharaonne nubienne", "Une impératrice chinoise"], 
    categorie: "Histoire" 
  },
  { 
    id: 37, 
    question: "En quelle année l'Inde a-t-elle obtenu son indépendance ?", 
    reponse: "1947", 
    fausses: ["1945", "1950", "1952", "1948", "1946", "1949"], 
    categorie: "Histoire" 
  },
  { 
    id: 38, 
    question: "Qui a écrit 'L'Odyssée' ?", 
    reponse: "Homère", 
    fausses: ["Sophocle", "Aristote", "Platon", "Euripide", "Hérodote", "Eschyle"], 
    categorie: "Histoire" 
  },
  { 
    id: 39, 
    question: "Quelle bataille a marqué la défaite de Napoléon ?", 
    reponse: "Waterloo", 
    fausses: ["Austerlitz", "Iéna", "Wagram", "Leipzig", "Marengo", "Borodino"], 
    categorie: "Histoire" 
  },
  { 
    id: 40, 
    question: "En quelle année le Maroc a-t-il obtenu son indépendance ?", 
    reponse: "1956", 
    fausses: ["1952", "1960", "1962", "1954", "1958", "1950"], 
    categorie: "Histoire" 
  },

  // Sciences (20 questions)
  { 
    id: 41, 
    question: "Quelle est la formule chimique de l'eau ?", 
    reponse: "H2O", 
    fausses: ["CO2", "O2", "H2SO4", "NaCl", "CH4", "NH3"], 
    categorie: "Sciences" 
  },
  { 
    id: 42, 
    question: "Combien de planètes y a-t-il dans le système solaire ?", 
    reponse: "8", 
    fausses: ["7", "9", "10", "6", "11", "12"], 
    categorie: "Sciences" 
  },
  { 
    id: 43, 
    question: "Quelle planète est la plus proche du Soleil ?", 
    reponse: "Mercure", 
    fausses: ["Vénus", "Mars", "Terre", "Jupiter", "Saturne", "Neptune"], 
    categorie: "Sciences" 
  },
  { 
    id: 44, 
    question: "Quel organe pompe le sang dans le corps ?", 
    reponse: "Le cœur", 
    fausses: ["Le cerveau", "Le foie", "Les poumons", "L'estomac", "Les reins", "La rate"], 
    categorie: "Sciences" 
  },
  { 
    id: 45, 
    question: "Quelle est la vitesse de la lumière ?", 
    reponse: "300 000 km/s", 
    fausses: ["150 000 km/s", "500 000 km/s", "100 000 km/s", "200 000 km/s", "400 000 km/s", "250 000 km/s"], 
    categorie: "Sciences" 
  },
  { 
    id: 46, 
    question: "Combien d'os a le corps humain adulte ?", 
    reponse: "206", 
    fausses: ["198", "214", "220", "190", "200", "210"], 
    categorie: "Sciences" 
  },
  { 
    id: 47, 
    question: "Quel gaz les plantes absorbent-elles ?", 
    reponse: "Le dioxyde de carbone (CO2)", 
    fausses: ["L'oxygène", "L'azote", "L'hydrogène", "L'hélium", "Le méthane", "L'ozone"], 
    categorie: "Sciences" 
  },
  { 
    id: 48, 
    question: "Qui a découvert la pénicilline ?", 
    reponse: "Alexander Fleming", 
    fausses: ["Louis Pasteur", "Marie Curie", "Albert Einstein", "Isaac Newton", "Charles Darwin", "Thomas Edison"], 
    categorie: "Sciences" 
  },
  { 
    id: 49, 
    question: "Quelle est la plus grande planète du système solaire ?", 
    reponse: "Jupiter", 
    fausses: ["Saturne", "Neptune", "Uranus", "Terre", "Mars", "Vénus"], 
    categorie: "Sciences" 
  },
  { 
    id: 50, 
    question: "Combien de chromosomes a l'être humain ?", 
    reponse: "46", 
    fausses: ["44", "48", "50", "42", "52", "40"], 
    categorie: "Sciences" 
  },
  { 
    id: 51, 
    question: "Quel scientifique a développé la théorie de l'évolution ?", 
    reponse: "Charles Darwin", 
    fausses: ["Isaac Newton", "Albert Einstein", "Galilée", "Louis Pasteur", "Marie Curie", "Stephen Hawking"], 
    categorie: "Sciences" 
  },
  { 
    id: 52, 
    question: "À quelle température l'eau bout-elle ?", 
    reponse: "100°C", 
    fausses: ["90°C", "110°C", "80°C", "120°C", "95°C", "105°C"], 
    categorie: "Sciences" 
  },
  { 
    id: 53, 
    question: "Quel est le symbole chimique de l'or ?", 
    reponse: "Au", 
    fausses: ["Ag", "Fe", "Cu", "Pb", "Zn", "Al"], 
    categorie: "Sciences" 
  },
  { 
    id: 54, 
    question: "Combien de dents a un adulte ?", 
    reponse: "32", 
    fausses: ["28", "30", "36", "34", "26", "38"], 
    categorie: "Sciences" 
  },
  { 
    id: 55, 
    question: "Quel est l'animal le plus rapide sur terre ?", 
    reponse: "Le guépard", 
    fausses: ["Le lion", "L'antilope", "Le cheval", "Le léopard", "Le tigre", "La gazelle"], 
    categorie: "Sciences" 
  },
  { 
    id: 56, 
    question: "Quelle planète est surnommée la planète rouge ?", 
    reponse: "Mars", 
    fausses: ["Vénus", "Jupiter", "Saturne", "Mercure", "Neptune", "Uranus"], 
    categorie: "Sciences" 
  },
  { 
    id: 57, 
    question: "Qui a inventé l'ampoule électrique ?", 
    reponse: "Thomas Edison", 
    fausses: ["Nikola Tesla", "Benjamin Franklin", "Alexander Bell", "James Watt", "George Stephenson", "Albert Einstein"], 
    categorie: "Sciences" 
  },
  { 
    id: 58, 
    question: "Combien de pattes a une araignée ?", 
    reponse: "8", 
    fausses: ["6", "10", "12", "4", "14", "16"], 
    categorie: "Sciences" 
  },
  { 
    id: 59, 
    question: "Quel est le plus grand mammifère du monde ?", 
    reponse: "La baleine bleue", 
    fausses: ["L'éléphant", "La girafe", "L'hippopotame", "Le rhinocéros", "L'ours polaire", "Le cachalot"], 
    categorie: "Sciences" 
  },
  { 
    id: 60, 
    question: "Quelle est la température normale du corps humain ?", 
    reponse: "37°C", 
    fausses: ["36°C", "38°C", "35°C", "39°C", "36,5°C", "37,5°C"], 
    categorie: "Sciences" 
  },

  // Culture générale (20 questions)
  { 
    id: 61, 
    question: "Qui a écrit 'Les Misérables' ?", 
    reponse: "Victor Hugo", 
    fausses: ["Émile Zola", "Gustave Flaubert", "Honoré de Balzac", "Alexandre Dumas", "Guy de Maupassant", "Stendhal"], 
    categorie: "Culture" 
  },
  { 
    id: 62, 
    question: "Combien de joueurs y a-t-il dans une équipe de football ?", 
    reponse: "11", 
    fausses: ["10", "12", "9", "13", "8", "14"], 
    categorie: "Culture" 
  },
  { 
    id: 63, 
    question: "Quel est l'instrument de musique de Chopin ?", 
    reponse: "Le piano", 
    fausses: ["Le violon", "La flûte", "La guitare", "Le violoncelle", "La harpe", "L'orgue"], 
    categorie: "Culture" 
  },
  { 
    id: 64, 
    question: "Qui a composé 'Les Quatre Saisons' ?", 
    reponse: "Vivaldi", 
    fausses: ["Mozart", "Bach", "Beethoven", "Haydn", "Haendel", "Schubert"], 
    categorie: "Culture" 
  },
  { 
    id: 65, 
    question: "Dans quel pays se trouve le Taj Mahal ?", 
    reponse: "Inde", 
    fausses: ["Pakistan", "Bangladesh", "Sri Lanka", "Népal", "Thaïlande", "Myanmar"], 
    categorie: "Culture" 
  },
  { 
    id: 66, 
    question: "Combien de cordes a une guitare classique ?", 
    reponse: "6", 
    fausses: ["5", "7", "8", "4", "10", "12"], 
    categorie: "Culture" 
  },
  { 
    id: 67, 
    question: "Qui a écrit 'Roméo et Juliette' ?", 
    reponse: "Shakespeare", 
    fausses: ["Molière", "Racine", "Corneille", "Victor Hugo", "Voltaire", "Beaumarchais"], 
    categorie: "Culture" 
  },
  { 
    id: 68, 
    question: "Quel est le sport pratiqué à Roland-Garros ?", 
    reponse: "Le tennis", 
    fausses: ["Le football", "Le rugby", "Le golf", "Le basketball", "Le volleyball", "Le handball"], 
    categorie: "Culture" 
  },
  { 
    id: 69, 
    question: "Combien de touches a un piano ?", 
    reponse: "88", 
    fausses: ["76", "92", "100", "80", "96", "84"], 
    categorie: "Culture" 
  },
  { 
    id: 70, 
    question: "Qui a peint 'La Nuit étoilée' ?", 
    reponse: "Vincent van Gogh", 
    fausses: ["Claude Monet", "Pablo Picasso", "Paul Cézanne", "Édouard Manet", "Pierre-Auguste Renoir", "Edgar Degas"], 
    categorie: "Culture" 
  },
  { 
    id: 71, 
    question: "Quelle est la langue officielle du Brésil ?", 
    reponse: "Le portugais", 
    fausses: ["L'espagnol", "Le français", "L'anglais", "L'italien", "Le néerlandais", "L'allemand"], 
    categorie: "Culture" 
  },
  { 
    id: 72, 
    question: "Combien de symphonies Beethoven a-t-il composées ?", 
    reponse: "9", 
    fausses: ["7", "10", "12", "8", "11", "6"], 
    categorie: "Culture" 
  },
  { 
    id: 73, 
    question: "Qui a écrit 'Le Petit Prince' ?", 
    reponse: "Antoine de Saint-Exupéry", 
    fausses: ["Jules Verne", "Alexandre Dumas", "Victor Hugo", "Marcel Pagnol", "Albert Camus", "Jean de La Fontaine"], 
    categorie: "Culture" 
  },
  { 
    id: 74, 
    question: "Dans quelle ville se trouve le musée du Louvre ?", 
    reponse: "Paris", 
    fausses: ["Londres", "Rome", "Madrid", "Berlin", "Vienne", "Amsterdam"], 
    categorie: "Culture" 
  },
  { 
    id: 75, 
    question: "Quel pays a remporté le plus de Coupes du monde de football ?", 
    reponse: "Le Brésil", 
    fausses: ["L'Allemagne", "L'Italie", "L'Argentine", "La France", "L'Uruguay", "L'Espagne"], 
    categorie: "Culture" 
  },
  { 
    id: 76, 
    question: "Qui a composé 'La Flûte enchantée' ?", 
    reponse: "Mozart", 
    fausses: ["Beethoven", "Bach", "Haydn", "Vivaldi", "Haendel", "Schubert"], 
    categorie: "Culture" 
  },
  { 
    id: 77, 
    question: "Combien de joueurs y a-t-il dans une équipe de basket ?", 
    reponse: "5", 
    fausses: ["6", "7", "4", "8", "3", "9"], 
    categorie: "Culture" 
  },
  { 
    id: 78, 
    question: "Qui a écrit 'L'Étranger' ?", 
    reponse: "Albert Camus", 
    fausses: ["Jean-Paul Sartre", "André Gide", "Albert Memmi", "André Malraux", "Simone de Beauvoir", "Louis Aragon"], 
    categorie: "Culture" 
  },
  { 
    id: 79, 
    question: "Dans quelle ville se trouve la Sagrada Familia ?", 
    reponse: "Barcelone", 
    fausses: ["Madrid", "Séville", "Valence", "Bilbao", "Grenade", "Tolède"], 
    categorie: "Culture" 
  },
  { 
    id: 80, 
    question: "Combien de minutes y a-t-il dans deux heures ?", 
    reponse: "120", 
    fausses: ["100", "110", "130", "140", "90", "150"], 
    categorie: "Culture" 
  },

  // Sport et Divertissement (20 questions)
  { 
    id: 81, 
    question: "Combien de sets faut-il gagner pour remporter un match de tennis masculin en Grand Chelem ?", 
    reponse: "3", 
    fausses: ["2", "4", "5", "1", "6", "7"], 
    categorie: "Sport" 
  },
  { 
    id: 82, 
    question: "Quel pays a organisé les Jeux Olympiques de 2016 ?", 
    reponse: "Le Brésil", 
    fausses: ["La Chine", "Le Royaume-Uni", "Le Japon", "La Russie", "La Grèce", "L'Australie"], 
    categorie: "Sport" 
  },
  { 
    id: 83, 
    question: "Combien de joueurs y a-t-il dans une équipe de volleyball ?", 
    reponse: "6", 
    fausses: ["5", "7", "8", "4", "9", "10"], 
    categorie: "Sport" 
  },
  { 
    id: 84, 
    question: "Quelle est la distance d'un marathon ?", 
    reponse: "42,195 km", 
    fausses: ["40 km", "45 km", "50 km", "38 km", "35 km", "48 km"], 
    categorie: "Sport" 
  },
  { 
    id: 85, 
    question: "Quel joueur de football est surnommé 'CR7' ?", 
    reponse: "Cristiano Ronaldo", 
    fausses: ["Lionel Messi", "Neymar", "Karim Benzema", "Kylian Mbappé", "Robert Lewandowski", "Mohamed Salah"], 
    categorie: "Sport" 
  },
  { 
    id: 86, 
    question: "Combien de joueurs y a-t-il dans une équipe de handball ?", 
    reponse: "7", 
    fausses: ["6", "8", "9", "5", "10", "11"], 
    categorie: "Sport" 
  },
  { 
    id: 87, 
    question: "Dans quel sport utilise-t-on une raquette et un volant ?", 
    reponse: "Le badminton", 
    fausses: ["Le tennis", "Le squash", "Le ping-pong", "Le padel", "Le racquetball", "Le tennis de table"], 
    categorie: "Sport" 
  },
  { 
    id: 88, 
    question: "Combien de trous y a-t-il sur un parcours de golf standard ?", 
    reponse: "18", 
    fausses: ["12", "16", "20", "15", "24", "9"], 
    categorie: "Sport" 
  },
  { 
    id: 89, 
    question: "Quel pays a remporté la Coupe du monde de football en 2018 ?", 
    reponse: "La France", 
    fausses: ["La Croatie", "Le Brésil", "L'Allemagne", "L'Argentine", "La Belgique", "L'Espagne"], 
    categorie: "Sport" 
  },
  { 
    id: 90, 
    question: "Dans quel sport dit-on 'strike' et 'spare' ?", 
    reponse: "Le bowling", 
    fausses: ["Le baseball", "Le tennis", "Le golf", "Le cricket", "Le hockey", "Le rugby"], 
    categorie: "Sport" 
  },
  { 
    id: 91, 
    question: "Combien de périodes y a-t-il dans un match de hockey sur glace ?", 
    reponse: "3", 
    fausses: ["2", "4", "5", "1", "6", "8"], 
    categorie: "Sport" 
  },
  { 
    id: 92, 
    question: "Quelle couleur de ceinture est la plus haute au judo ?", 
    reponse: "Noire", 
    fausses: ["Rouge", "Blanche", "Marron", "Bleue", "Verte", "Orange"], 
    categorie: "Sport" 
  },
  { 
    id: 93, 
    question: "Combien de points vaut un panier à 3 points au basket ?", 
    reponse: "3", 
    fausses: ["2", "4", "5", "1", "6", "7"], 
    categorie: "Sport" 
  },
  { 
    id: 94, 
    question: "Quel sport se pratique sur un tatami ?", 
    reponse: "Le judo", 
    fausses: ["La boxe", "Le karaté", "Le kung-fu", "Le taekwondo", "L'escrime", "La lutte"], 
    categorie: "Sport" 
  },
  { 
    id: 95, 
    question: "Dans quel sport utilise-t-on un ballon ovale ?", 
    reponse: "Le rugby", 
    fausses: ["Le football", "Le handball", "Le volleyball", "Le basketball", "Le water-polo", "Le polo"], 
    categorie: "Sport" 
  },
  { 
    id: 96, 
    question: "Combien de rounds y a-t-il dans un combat de boxe professionnel ?", 
    reponse: "12", 
    fausses: ["10", "15", "8", "9", "6", "18"], 
    categorie: "Sport" 
  },
  { 
    id: 97, 
    question: "Quel Grand Chelem de tennis se joue sur terre battue ?", 
    reponse: "Roland-Garros", 
    fausses: ["Wimbledon", "US Open", "Open d'Australie", "Masters de Paris", "ATP Finals", "Coupe Davis"], 
    categorie: "Sport" 
  },
  { 
    id: 98, 
    question: "Combien de points vaut un essai au rugby à XV ?", 
    reponse: "5", 
    fausses: ["3", "7", "4", "6", "2", "8"], 
    categorie: "Sport" 
  },
  { 
    id: 99, 
    question: "Dans quel sport pratique-t-on le 'slam dunk' ?", 
    reponse: "Le basketball", 
    fausses: ["Le volleyball", "Le handball", "Le tennis", "Le badminton", "Le rugby", "Le football"], 
    categorie: "Sport" 
  },
  { 
    id: 100, 
    question: "Quel pays a remporté le plus de médailles d'or olympiques en athlétisme ?", 
    reponse: "Les États-Unis", 
    fausses: ["La Russie", "La Chine", "Le Royaume-Uni", "L'Allemagne", "Le Kenya", "La Jamaïque"], 
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
console.log("=== MANCHE FINALE: FACE À FACE - 100 QUESTIONS MOYENNES (8 PROPOSITIONS) ===\n");

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
