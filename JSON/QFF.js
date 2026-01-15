// 100 Questions FACILES - Manche "Face à Face"
// 8 propositions par question - La bonne réponse est mélangée aléatoirement

const questionsBase = [
  // Animaux (20 questions)
  { 
    id: 1, 
    question: "Quel animal rugit ?", 
    reponse: "Le lion", 
    fausses: ["Le chat", "Le chien", "Le lapin", "La vache", "Le mouton", "Le cheval"], 
    categorie: "Animaux" 
  },
  { 
    id: 2, 
    question: "Quel animal vit dans l'eau ?", 
    reponse: "Le poisson", 
    fausses: ["Le chien", "Le chat", "L'oiseau", "Le lapin", "La vache", "Le cheval"], 
    categorie: "Animaux" 
  },
  { 
    id: 3, 
    question: "Quel animal pond des œufs ?", 
    reponse: "La poule", 
    fausses: ["La vache", "Le chien", "Le chat", "Le lapin", "Le cheval", "Le mouton"], 
    categorie: "Animaux" 
  },
  { 
    id: 4, 
    question: "Quel animal fait du miel ?", 
    reponse: "L'abeille", 
    fausses: ["La mouche", "Le papillon", "La coccinelle", "La fourmi", "Le moustique", "La guêpe"], 
    categorie: "Animaux" 
  },
  { 
    id: 5, 
    question: "Quel animal a une trompe ?", 
    reponse: "L'éléphant", 
    fausses: ["Le lion", "Le tigre", "La girafe", "Le zèbre", "L'hippopotame", "Le rhinocéros"], 
    categorie: "Animaux" 
  },
  { 
    id: 6, 
    question: "Quel animal miaule ?", 
    reponse: "Le chat", 
    fausses: ["Le chien", "Le lapin", "La souris", "L'oiseau", "La vache", "Le mouton"], 
    categorie: "Animaux" 
  },
  { 
    id: 7, 
    question: "Quel animal a des rayures noires et blanches ?", 
    reponse: "Le zèbre", 
    fausses: ["Le lion", "L'éléphant", "La girafe", "Le tigre", "Le léopard", "Le guépard"], 
    categorie: "Animaux" 
  },
  { 
    id: 8, 
    question: "Quel animal aboie ?", 
    reponse: "Le chien", 
    fausses: ["Le chat", "Le lapin", "Le cheval", "La vache", "Le mouton", "La chèvre"], 
    categorie: "Animaux" 
  },
  { 
    id: 9, 
    question: "Quel animal a un long cou ?", 
    reponse: "La girafe", 
    fausses: ["L'éléphant", "Le lion", "Le zèbre", "Le cheval", "La vache", "Le chameau"], 
    categorie: "Animaux" 
  },
  { 
    id: 10, 
    question: "Quel animal donne du lait ?", 
    reponse: "La vache", 
    fausses: ["Le cheval", "Le mouton", "Le cochon", "Le lapin", "Le chien", "Le chat"], 
    categorie: "Animaux" 
  },
  { 
    id: 11, 
    question: "Quel oiseau ne peut pas voler ?", 
    reponse: "L'autruche", 
    fausses: ["L'aigle", "Le pigeon", "Le corbeau", "La mouette", "Le perroquet", "Le canard"], 
    categorie: "Animaux" 
  },
  { 
    id: 12, 
    question: "Quel animal grimpe aux arbres ?", 
    reponse: "Le singe", 
    fausses: ["Le chien", "La vache", "Le cochon", "Le lapin", "Le mouton", "Le cheval"], 
    categorie: "Animaux" 
  },
  { 
    id: 13, 
    question: "Quel animal vit au pôle Nord ?", 
    reponse: "L'ours polaire", 
    fausses: ["Le lion", "Le tigre", "L'éléphant", "La girafe", "Le zèbre", "Le singe"], 
    categorie: "Animaux" 
  },
  { 
    id: 14, 
    question: "Quel animal a de grandes oreilles ?", 
    reponse: "Le lapin", 
    fausses: ["Le chat", "La souris", "Le chien", "Le cheval", "La vache", "Le cochon"], 
    categorie: "Animaux" 
  },
  { 
    id: 15, 
    question: "Quel animal hurle à la lune ?", 
    reponse: "Le loup", 
    fausses: ["Le chien", "Le chat", "Le renard", "L'ours", "Le lion", "Le tigre"], 
    categorie: "Animaux" 
  },
  { 
    id: 16, 
    question: "Quel animal a une carapace ?", 
    reponse: "La tortue", 
    fausses: ["Le lézard", "Le serpent", "La grenouille", "Le crocodile", "Le poisson", "La souris"], 
    categorie: "Animaux" 
  },
  { 
    id: 17, 
    question: "Quel animal saute très haut ?", 
    reponse: "Le kangourou", 
    fausses: ["Le lion", "L'éléphant", "Le zèbre", "La vache", "Le cheval", "Le cochon"], 
    categorie: "Animaux" 
  },
  { 
    id: 18, 
    question: "Quel animal est rose et aime la boue ?", 
    reponse: "Le cochon", 
    fausses: ["La vache", "Le mouton", "Le cheval", "Le lapin", "La chèvre", "L'âne"], 
    categorie: "Animaux" 
  },
  { 
    id: 19, 
    question: "Quel animal vit dans le désert ?", 
    reponse: "Le chameau", 
    fausses: ["Le pingouin", "L'ours", "Le phoque", "Le dauphin", "La baleine", "Le requin"], 
    categorie: "Animaux" 
  },
  { 
    id: 20, 
    question: "Quel animal a des piquants ?", 
    reponse: "Le hérisson", 
    fausses: ["Le lapin", "L'écureuil", "La souris", "Le rat", "Le hamster", "La taupe"], 
    categorie: "Animaux" 
  },

  // Couleurs et Formes (20 questions)
  { 
    id: 21, 
    question: "Quelle est la couleur du ciel ?", 
    reponse: "Bleu", 
    fausses: ["Rouge", "Vert", "Jaune", "Orange", "Violet", "Rose"], 
    categorie: "Couleurs" 
  },
  { 
    id: 22, 
    question: "Quelle est la couleur du soleil ?", 
    reponse: "Jaune", 
    fausses: ["Bleu", "Vert", "Rouge", "Orange", "Violet", "Rose"], 
    categorie: "Couleurs" 
  },
  { 
    id: 23, 
    question: "Quelle est la couleur de la neige ?", 
    reponse: "Blanc", 
    fausses: ["Noir", "Gris", "Bleu", "Vert", "Jaune", "Rouge"], 
    categorie: "Couleurs" 
  },
  { 
    id: 24, 
    question: "Quelle est la couleur de l'herbe ?", 
    reponse: "Vert", 
    fausses: ["Bleu", "Jaune", "Rouge", "Orange", "Violet", "Rose"], 
    categorie: "Couleurs" 
  },
  { 
    id: 25, 
    question: "Combien de côtés a un carré ?", 
    reponse: "4", 
    fausses: ["3", "5", "6", "7", "8", "2"], 
    categorie: "Formes" 
  },
  { 
    id: 26, 
    question: "Combien de côtés a un triangle ?", 
    reponse: "3", 
    fausses: ["4", "5", "6", "7", "8", "2"], 
    categorie: "Formes" 
  },
  { 
    id: 27, 
    question: "Quelle forme a un ballon de foot ?", 
    reponse: "Rond", 
    fausses: ["Carré", "Triangle", "Rectangle", "Ovale", "Hexagone", "Étoile"], 
    categorie: "Formes" 
  },
  { 
    id: 28, 
    question: "Quelle est la couleur du sang ?", 
    reponse: "Rouge", 
    fausses: ["Bleu", "Vert", "Jaune", "Orange", "Violet", "Rose"], 
    categorie: "Couleurs" 
  },
  { 
    id: 29, 
    question: "Quelle est la couleur d'une orange ?", 
    reponse: "Orange", 
    fausses: ["Bleu", "Vert", "Violet", "Rose", "Jaune", "Rouge"], 
    categorie: "Couleurs" 
  },
  { 
    id: 30, 
    question: "Quelle est la couleur du drapeau marocain ?", 
    reponse: "Rouge", 
    fausses: ["Vert", "Bleu", "Jaune", "Orange", "Violet", "Blanc"], 
    categorie: "Couleurs" 
  },
  { 
    id: 31, 
    question: "Quelle est la couleur d'une banane ?", 
    reponse: "Jaune", 
    fausses: ["Rouge", "Vert", "Bleu", "Orange", "Violet", "Rose"], 
    categorie: "Couleurs" 
  },
  { 
    id: 32, 
    question: "Quelle est la couleur de la nuit ?", 
    reponse: "Noir", 
    fausses: ["Blanc", "Gris", "Bleu", "Vert", "Jaune", "Rouge"], 
    categorie: "Couleurs" 
  },
  { 
    id: 33, 
    question: "Combien de roues a une voiture ?", 
    reponse: "4", 
    fausses: ["2", "3", "6", "8", "5", "1"], 
    categorie: "Nombres" 
  },
  { 
    id: 34, 
    question: "Combien de doigts a une main ?", 
    reponse: "5", 
    fausses: ["4", "6", "10", "3", "7", "8"], 
    categorie: "Nombres" 
  },
  { 
    id: 35, 
    question: "Quelle est la couleur d'une fraise ?", 
    reponse: "Rouge", 
    fausses: ["Bleu", "Vert", "Jaune", "Orange", "Violet", "Rose"], 
    categorie: "Couleurs" 
  },
  { 
    id: 36, 
    question: "Quelle est la couleur du café ?", 
    reponse: "Marron", 
    fausses: ["Blanc", "Rouge", "Vert", "Bleu", "Jaune", "Orange"], 
    categorie: "Couleurs" 
  },
  { 
    id: 37, 
    question: "Combien de pattes a un chien ?", 
    reponse: "4", 
    fausses: ["2", "3", "6", "8", "5", "1"], 
    categorie: "Nombres" 
  },
  { 
    id: 38, 
    question: "Quelle est la couleur d'un citron ?", 
    reponse: "Jaune", 
    fausses: ["Rouge", "Vert", "Bleu", "Orange", "Violet", "Rose"], 
    categorie: "Couleurs" 
  },
  { 
    id: 39, 
    question: "Combien d'yeux a une personne ?", 
    reponse: "2", 
    fausses: ["1", "3", "4", "5", "6", "8"], 
    categorie: "Nombres" 
  },
  { 
    id: 40, 
    question: "Combien de côtés a un hexagone ?", 
    reponse: "6", 
    fausses: ["3", "4", "5", "7", "8", "10"], 
    categorie: "Formes" 
  },

  // Fruits et Aliments (20 questions)
  { 
    id: 41, 
    question: "Quel fruit est rouge et rond ?", 
    reponse: "La pomme", 
    fausses: ["La banane", "L'orange", "Le raisin", "La poire", "La pêche", "L'ananas"], 
    categorie: "Fruits" 
  },
  { 
    id: 42, 
    question: "Quel fruit est jaune et long ?", 
    reponse: "La banane", 
    fausses: ["La pomme", "L'orange", "La fraise", "La poire", "Le kiwi", "L'ananas"], 
    categorie: "Fruits" 
  },
  { 
    id: 43, 
    question: "Quel fruit est orange ?", 
    reponse: "L'orange", 
    fausses: ["La pomme", "La banane", "La poire", "La fraise", "Le kiwi", "Le raisin"], 
    categorie: "Fruits" 
  },
  { 
    id: 44, 
    question: "Quel légume est orange ?", 
    reponse: "La carotte", 
    fausses: ["La tomate", "Le concombre", "La salade", "Le poivron", "Le radis", "Le chou"], 
    categorie: "Légumes" 
  },
  { 
    id: 45, 
    question: "Quel fruit pousse en grappes ?", 
    reponse: "Le raisin", 
    fausses: ["La pomme", "La poire", "La pêche", "L'orange", "La banane", "Le kiwi"], 
    categorie: "Fruits" 
  },
  { 
    id: 46, 
    question: "Quel légume fait pleurer ?", 
    reponse: "L'oignon", 
    fausses: ["La tomate", "La carotte", "Le poivron", "Le concombre", "La salade", "Le radis"], 
    categorie: "Légumes" 
  },
  { 
    id: 47, 
    question: "Quel légume est vert et long ?", 
    reponse: "Le concombre", 
    fausses: ["La tomate", "La carotte", "Le radis", "Le poivron", "L'oignon", "Le chou"], 
    categorie: "Légumes" 
  },
  { 
    id: 48, 
    question: "Quel légume est rouge et rond ?", 
    reponse: "La tomate", 
    fausses: ["La carotte", "Le concombre", "Le poivron", "Le radis", "L'oignon", "La salade"], 
    categorie: "Légumes" 
  },
  { 
    id: 49, 
    question: "Quel fruit est petit et rouge ?", 
    reponse: "La fraise", 
    fausses: ["La pomme", "L'orange", "La banane", "La poire", "Le kiwi", "L'ananas"], 
    categorie: "Fruits" 
  },
  { 
    id: 50, 
    question: "Quel légume est utilisé pour faire des frites ?", 
    reponse: "La pomme de terre", 
    fausses: ["La carotte", "Le concombre", "La tomate", "Le poivron", "L'oignon", "Le radis"], 
    categorie: "Légumes" 
  },
  { 
    id: 51, 
    question: "Quel fruit a une couronne ?", 
    reponse: "L'ananas", 
    fausses: ["La banane", "L'orange", "La pomme", "La poire", "Le kiwi", "La fraise"], 
    categorie: "Fruits" 
  },
  { 
    id: 52, 
    question: "De quelle couleur est le lait ?", 
    reponse: "Blanc", 
    fausses: ["Jaune", "Rouge", "Vert", "Bleu", "Marron", "Rose"], 
    categorie: "Aliments" 
  },
  { 
    id: 53, 
    question: "Quel fruit est jaune et acide ?", 
    reponse: "Le citron", 
    fausses: ["L'orange", "La pomme", "La banane", "La poire", "Le kiwi", "L'ananas"], 
    categorie: "Fruits" 
  },
  { 
    id: 54, 
    question: "Quel fruit est brun et poilu ?", 
    reponse: "Le kiwi", 
    fausses: ["La pomme", "L'orange", "La poire", "La banane", "La fraise", "L'ananas"], 
    categorie: "Fruits" 
  },
  { 
    id: 55, 
    question: "Quel aliment est fait avec du lait ?", 
    reponse: "Le fromage", 
    fausses: ["Le pain", "La viande", "Le poisson", "Les pâtes", "Le riz", "Les œufs"], 
    categorie: "Aliments" 
  },
  { 
    id: 56, 
    question: "Avec quelle céréale fait-on le pain ?", 
    reponse: "Le blé", 
    fausses: ["Le riz", "Le maïs", "L'avoine", "L'orge", "Le seigle", "Le millet"], 
    categorie: "Aliments" 
  },
  { 
    id: 57, 
    question: "Quel fruit a un noyau ?", 
    reponse: "La pêche", 
    fausses: ["La pomme", "L'orange", "Le raisin", "La fraise", "L'ananas", "Le kiwi"], 
    categorie: "Fruits" 
  },
  { 
    id: 58, 
    question: "Quelle boisson est chaude le matin ?", 
    reponse: "Le café", 
    fausses: ["Le jus d'orange", "L'eau", "Le soda", "Le lait froid", "La limonade", "Le thé glacé"], 
    categorie: "Aliments" 
  },
  { 
    id: 59, 
    question: "Quel aliment est sucré et fait par les abeilles ?", 
    reponse: "Le miel", 
    fausses: ["Le sucre", "Le chocolat", "La confiture", "Le caramel", "La crème", "Le sirop"], 
    categorie: "Aliments" 
  },
  { 
    id: 60, 
    question: "Quel fruit est vert à l'extérieur et rouge à l'intérieur ?", 
    reponse: "La pastèque", 
    fausses: ["La pomme", "La poire", "Le kiwi", "L'avocat", "Le melon", "La mangue"], 
    categorie: "Fruits" 
  },

  // Vie quotidienne (20 questions)
  { 
    id: 61, 
    question: "Avec quoi mange-t-on ?", 
    reponse: "Une fourchette", 
    fausses: ["Un marteau", "Une brosse", "Un crayon", "Un couteau seul", "Une règle", "Un ciseau"], 
    categorie: "Quotidien" 
  },
  { 
    id: 62, 
    question: "Dans quoi dort-on ?", 
    reponse: "Un lit", 
    fausses: ["Une chaise", "Une table", "Un placard", "Un canapé", "Un banc", "Un fauteuil"], 
    categorie: "Quotidien" 
  },
  { 
    id: 63, 
    question: "Où se lave-t-on ?", 
    reponse: "Dans la salle de bain", 
    fausses: ["Dans la cuisine", "Dans le salon", "Dans la chambre", "Dans le garage", "Dans le jardin", "Dans l'entrée"], 
    categorie: "Quotidien" 
  },
  { 
    id: 64, 
    question: "Qu'utilise-t-on pour se brosser les dents ?", 
    reponse: "Une brosse à dents", 
    fausses: ["Un peigne", "Une cuillère", "Un crayon", "Une brosse à cheveux", "Une éponge", "Un chiffon"], 
    categorie: "Quotidien" 
  },
  { 
    id: 65, 
    question: "Où cuisine-t-on ?", 
    reponse: "Dans la cuisine", 
    fausses: ["Dans la chambre", "Dans le salon", "Dans le garage", "Dans la salle de bain", "Dans le jardin", "Dans l'entrée"], 
    categorie: "Quotidien" 
  },
  { 
    id: 66, 
    question: "Avec quoi coupe-t-on du papier ?", 
    reponse: "Des ciseaux", 
    fausses: ["Un marteau", "Une cuillère", "Un crayon", "Un peigne", "Une brosse", "Une règle"], 
    categorie: "Quotidien" 
  },
  { 
    id: 67, 
    question: "Dans quoi boit-on de l'eau ?", 
    reponse: "Un verre", 
    fausses: ["Une assiette", "Une fourchette", "Un couteau", "Une poêle", "Une casserole", "Un bol"], 
    categorie: "Quotidien" 
  },
  { 
    id: 68, 
    question: "Où range-t-on les vêtements ?", 
    reponse: "Dans l'armoire", 
    fausses: ["Dans le frigo", "Dans le four", "Sur la table", "Dans le lit", "Sur le canapé", "Dans l'évier"], 
    categorie: "Quotidien" 
  },
  { 
    id: 69, 
    question: "Qu'utilise-t-on pour écrire ?", 
    reponse: "Un stylo", 
    fausses: ["Une fourchette", "Un marteau", "Une cuillère", "Un peigne", "Une brosse", "Des ciseaux"], 
    categorie: "Quotidien" 
  },
  { 
    id: 70, 
    question: "Où met-on les aliments frais ?", 
    reponse: "Dans le frigo", 
    fausses: ["Dans l'armoire", "Sur le lit", "Dans la douche", "Dans le placard", "Sur la chaise", "Dans le tiroir"], 
    categorie: "Quotidien" 
  },
  { 
    id: 71, 
    question: "Qu'utilise-t-on pour se sécher ?", 
    reponse: "Une serviette", 
    fausses: ["Un oreiller", "Un drap", "Une nappe", "Une couverture", "Un rideau", "Un tapis"], 
    categorie: "Quotidien" 
  },
  { 
    id: 72, 
    question: "Sur quoi s'assoit-on pour manger ?", 
    reponse: "Une chaise", 
    fausses: ["Un lit", "Un tapis", "Un mur", "Une table", "Un placard", "Un four"], 
    categorie: "Quotidien" 
  },
  { 
    id: 73, 
    question: "Qu'utilise-t-on pour voir l'heure ?", 
    reponse: "Une montre", 
    fausses: ["Un thermomètre", "Un miroir", "Une lampe", "Une clé", "Un téléphone éteint", "Une règle"], 
    categorie: "Quotidien" 
  },
  { 
    id: 74, 
    question: "Où regarde-t-on la télévision ?", 
    reponse: "Dans le salon", 
    fausses: ["Dans la cuisine", "Dans la salle de bain", "Dans le garage", "Dans le jardin", "Dans l'entrée", "Dans le placard"], 
    categorie: "Quotidien" 
  },
  { 
    id: 75, 
    question: "Qu'utilise-t-on pour balayer ?", 
    reponse: "Un balai", 
    fausses: ["Une cuillère", "Un marteau", "Un crayon", "Une brosse à dents", "Un peigne", "Des ciseaux"], 
    categorie: "Quotidien" 
  },
  { 
    id: 76, 
    question: "Qu'utilise-t-on pour se peigner ?", 
    reponse: "Un peigne", 
    fausses: ["Une fourchette", "Un couteau", "Une cuillère", "Un crayon", "Un marteau", "Des ciseaux"], 
    categorie: "Quotidien" 
  },
  { 
    id: 77, 
    question: "Où gare-t-on la voiture ?", 
    reponse: "Dans le garage", 
    fausses: ["Dans la cuisine", "Dans la chambre", "Dans le salon", "Dans la salle de bain", "Dans le jardin", "Sur le toit"], 
    categorie: "Quotidien" 
  },
  { 
    id: 78, 
    question: "Qu'utilise-t-on pour ouvrir une porte ?", 
    reponse: "Une clé", 
    fausses: ["Un marteau", "Un crayon", "Une cuillère", "Un peigne", "Une brosse", "Des ciseaux"], 
    categorie: "Quotidien" 
  },
  { 
    id: 79, 
    question: "Dans quoi mange-t-on la soupe ?", 
    reponse: "Un bol", 
    fausses: ["Un verre", "Une fourchette", "Un couteau", "Une poêle", "Une casserole", "Un plat"], 
    categorie: "Quotidien" 
  },
  { 
    id: 80, 
    question: "Qu'utilise-t-on pour se laver les mains ?", 
    reponse: "Du savon", 
    fausses: ["Du dentifrice", "Du shampoing", "De la crème", "Du parfum", "De l'huile", "Du miel"], 
    categorie: "Quotidien" 
  },

  // Nature et Saisons (20 questions)
  { 
    id: 81, 
    question: "Quelle saison vient après l'été ?", 
    reponse: "L'automne", 
    fausses: ["Le printemps", "L'hiver", "L'été à nouveau", "Il n'y a pas d'autre saison", "La mousson", "La canicule"], 
    categorie: "Saisons" 
  },
  { 
    id: 82, 
    question: "Quelle saison vient après l'hiver ?", 
    reponse: "Le printemps", 
    fausses: ["L'été", "L'automne", "L'hiver à nouveau", "Il n'y a pas d'autre saison", "La mousson", "La canicule"], 
    categorie: "Saisons" 
  },
  { 
    id: 83, 
    question: "Quand fait-il le plus chaud ?", 
    reponse: "En été", 
    fausses: ["En hiver", "En automne", "Au printemps", "Toute l'année", "Jamais", "En décembre"], 
    categorie: "Saisons" 
  },
  { 
    id: 84, 
    question: "Quand neige-t-il ?", 
    reponse: "En hiver", 
    fausses: ["En été", "Au printemps", "En automne", "Toute l'année", "Jamais", "En juillet"], 
    categorie: "Saisons" 
  },
  { 
    id: 85, 
    question: "Qu'est-ce qui brille dans le ciel la nuit ?", 
    reponse: "La lune", 
    fausses: ["Le soleil", "Un nuage", "Un avion", "Un oiseau", "Une étoile filante", "Un ballon"], 
    categorie: "Nature" 
  },
  { 
    id: 86, 
    question: "Qu'est-ce qui brille dans le ciel le jour ?", 
    reponse: "Le soleil", 
    fausses: ["La lune", "Les étoiles", "Un nuage", "Un avion", "Un oiseau", "Un ballon"], 
    categorie: "Nature" 
  },
  { 
    id: 87, 
    question: "Que voit-on après la pluie ?", 
    reponse: "Un arc-en-ciel", 
    fausses: ["La neige", "Le vent", "Le brouillard", "Le tonnerre", "Un nuage noir", "La tempête"], 
    categorie: "Météo" 
  },
  { 
    id: 88, 
    question: "Où pousse un arbre ?", 
    reponse: "Dans la terre", 
    fausses: ["Dans l'eau", "Dans l'air", "Sur le toit", "Dans la maison", "Dans le frigo", "Sur la lune"], 
    categorie: "Nature" 
  },
  { 
    id: 89, 
    question: "Que font les feuilles en automne ?", 
    reponse: "Elles tombent", 
    fausses: ["Elles poussent", "Elles volent", "Elles chantent", "Elles dansent", "Elles nagent", "Elles courent"], 
    categorie: "Nature" 
  },
  { 
    id: 90, 
    question: "Que fait le vent ?", 
    reponse: "Il souffle", 
    fausses: ["Il pleut", "Il neige", "Il brille", "Il dort", "Il mange", "Il chante"], 
    categorie: "Météo" 
  },
  { 
    id: 91, 
    question: "Où vit un poisson ?", 
    reponse: "Dans l'eau", 
    fausses: ["Dans l'air", "Dans la terre", "Sur un arbre", "Dans une maison", "Dans le ciel", "Dans le sable"], 
    categorie: "Nature" 
  },
  { 
    id: 92, 
    question: "Quelle fleur est jaune avec un cœur marron ?", 
    reponse: "Le tournesol", 
    fausses: ["La rose", "La tulipe", "Le lys", "La marguerite", "L'orchidée", "Le coquelicot"], 
    categorie: "Nature" 
  },
  { 
    id: 93, 
    question: "Que fait un oiseau ?", 
    reponse: "Il vole", 
    fausses: ["Il nage", "Il rampe", "Il court seulement", "Il dort", "Il mange seulement", "Il chante seulement"], 
    categorie: "Nature" 
  },
  { 
    id: 94, 
    question: "Où pousse l'herbe ?", 
    reponse: "Dans le jardin", 
    fausses: ["Dans la mer", "Dans le ciel", "Dans la maison", "Dans le frigo", "Sur la lune", "Dans le four"], 
    categorie: "Nature" 
  },
  { 
    id: 95, 
    question: "Quel insecte fait du miel ?", 
    reponse: "L'abeille", 
    fausses: ["La mouche", "Le moustique", "La fourmi", "Le papillon", "La coccinelle", "La sauterelle"], 
    categorie: "Nature" 
  },
  { 
    id: 96, 
    question: "Que fait le soleil ?", 
    reponse: "Il brille", 
    fausses: ["Il pleut", "Il neige", "Il souffle", "Il dort", "Il nage", "Il court"], 
    categorie: "Météo" 
  },
  { 
    id: 97, 
    question: "Où vit un oiseau ?", 
    reponse: "Dans un nid", 
    fausses: ["Dans une grotte", "Dans l'eau", "Sous terre", "Dans le frigo", "Dans une voiture", "Dans un tiroir"], 
    categorie: "Nature" 
  },
  { 
    id: 98, 
    question: "Quelle est la couleur des nuages quand il pleut ?", 
    reponse: "Gris", 
    fausses: ["Blanc", "Bleu", "Rose", "Vert", "Jaune", "Rouge"], 
    categorie: "Météo" 
  },
  { 
    id: 99, 
    question: "Combien de saisons y a-t-il dans une année ?", 
    reponse: "4", 
    fausses: ["2", "3", "5", "6", "7", "8"], 
    categorie: "Saisons" 
  },
  { 
    id: 100, 
    question: "Que fait-il quand il pleut ?", 
    reponse: "Il tombe de l'eau", 
    fausses: ["Il fait chaud", "Il neige", "Il fait du vent seulement", "Il fait beau", "Il fait nuit", "Il fait jour"], 
    categorie: "Météo"
