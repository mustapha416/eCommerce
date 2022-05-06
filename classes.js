class Produit {
    constructor(nom, image, description, categorie, prix) {
      this.nom = nom;
      this.image = image;
      this.description = description;
      this.categorie = categorie;
      this.prix = prix;
    }
  }
  let test = "h";

  let e1 = new Produit("Pokemon", "url('./Produits/Enfant/1.webp')", " Pokémon - ensemble - débardeur et T-shirt - 2 pièces  Coloris : jaune  ", "Enfant", 14.99);
  let e2 = new Produit("Ensemble", "url('./Produits/Enfant/2.webp')", "Ensemble - T-shirts et short en molleton - 2 pièces Coloris : bleu foncé  ", "Enfant", 19.99);
  let e3 = new Produit("Nasa", "url('./Produits/Enfant/3.webp')", "Lot de 2 - NASA - pyjashorts Coloris : bleu", "Enfant", 19.99);
  let e4 = new Produit("polo et T-shirt", "url('./Produits/Enfant/4.webp')", " Ensemble - polo et T-shirt - 2 pièces - à rayures Coloris : blanc / bleu", "Enfant", 12.99);
  let e5 = new Produit("Looney Tunes", "url('./Produits/Enfant/5.webp')", " Looney Tunes - ensemble - 3 T-shirts et 3 pantalons de jogging Coloris : bleu", "Enfant", 44.99);
  let e6 = new Produit("Minions", "url('./Produits/Enfant/6.webp')", " Minions - ensemble - T-shirt et short en jean - 2 pièces Coloris : jaune ", "Enfant", 17.99);

  let f1 = new Produit("Chapeau de paille", "url('./Produits/Femme/1.webp')", "Chapeau de paille Coloris : marron clair ", "Femme", 14.99);
  let f2 = new Produit("Lunettes de soleil", "url('./Produits/Femme/2.webp')", " Coloris : marron foncé  ", "Femme", 9.99);
  let f3 = new Produit("Cabas", "url('./Produits/Femme/3.webp')", " Cabas - à pois - Bambi Coloris : vert menthe  ", "Femme", 9.99);
  let f4 = new Produit("Pochette", "url('./Produits/Femme/4.webp')", " Coloris : jaune clair", "Femme", 12.99);
  let f5 = new Produit("Ensemble ", "url('./Produits/Femme/5.webp')", " Ensemble - pochette à cosmétiques et porte-monnaie - similicuir Coloris : blanc", "Femme", 12.99);
  let f6 = new Produit("CLOCKHOUSE - besace", "url('./Produits/Femme/6.webp')", " CLOCKHOUSE - besace et serviette de plage - 2-en-1 - à fleurs Coloris : bleu clair ", "Femme", 15.99);

  let h1 = new Produit("Polo", "url('./Produits/Homme/1.webp')", " Polo - Flex - coton bio - LYCRA®", "Homme", 12.99);
  let h2 = new Produit("Blouson", "url('./Produits/Homme/2.webp')", " Blouson - Flex - LYCRA® Coloris : blanc crème ", "Homme", 79.99);
  let h3 = new Produit("CLOCKHOUSE - blouson", "url('./Produits/Homme/3.webp')", " CLOCKHOUSE - blouson Coloris : gris chiné", "Homme", 39.99);
  let h4 = new Produit("Veste à capuche", "url('./Produits/Homme/4.webp')", " Veste à capuche - matière recyclée Mode plus durable ", "Homme", 34.99);
  let h5 = new Produit("Veste matelassée", "url('./Produits/Homme/5.webp')", " Veste matelassée à capuche, avec garniture de fausse fourrure - matière recyclée ", "Homme", 79.99);
  let h6 = new Produit("Jean", "url('./Produits/Homme/6.webp')", " Jean coupe droite - production économe en eau Mode plus durable", "Homme", 44.99);

  let h = [h1, h2, h3, h4, h5, h6]
  let f = [f1, f2, f3, f4, f5, f6]
  let e = [e1, e2, e3, e4, e5, e6]
  let cart = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0]
  // if(localStorage.getItem('panier') == null){
  // localStorage.setItem('panier',JSON.stringify(cart))
  // }


