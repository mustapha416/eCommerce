

document.addEventListener("DOMContentLoaded", ()=>{

    let test2 = h1.image.split('\'');
    console.log(h1.image.split('\'')[1])

    // document.getElementById("im1").src = h1.image.split('\'')[1];
    // document.getElementById("im2").src = h2.image.split('\'')[1];
    // document.getElementById("im3").src = h3.image.split('\'')[1];
    // document.getElementById("im4").src = h4.image.split('\'')[1];
    // document.getElementById("im5").src = h5.image.split('\'')[1];
    // document.getElementById("im6").src = h6.image.split('\'')[1];

   
    document.getElementById("sh").style.display ="none"
    document.getElementById("sf").style.display ="none"
    document.getElementById("se").style.display ="none"

}
)

function hommes(){
    afficher("h")
}

function femmes(){

    afficher("f")
}

function enfants(){

    afficher("e")
}

function afficher(categ) {
    let id = "s"+categ;
    let tableauProduits = h
    let id_image = "im"
    
  
    document.getElementById(id).style.display ="flex"

    var array = ['h', 'f', 'e'];
   
    //array.forEach(p => alert(p));


     for (var i = 0; i < array.length; i++) {
         let lettre
        if(array[i]!=categ)
        { //masquer(array[i]);
            lettre =array[i]
            //alert(lettre)
            masquer(lettre);
        }
    }
    
    switch (categ){

        case "h": 
        
        break;
        case "f":
            tableauProduits = f
            id_image = "if"
        break;
        default:
            tableauProduits = e
            id_image = "ie"
        break;

    }

    //Affichage des photos, titres et prix
    for (var i = 1; i <= 6; i++){
        //Affichage des photos
        document.getElementById(id_image+i).src = tableauProduits[i-1].image.split('\'')[1];
        
        //Affichage des titres
        const node = document.createElement("p");
        const textnode = document.createTextNode(tableauProduits[i-1].nom)
        node.appendChild(document.createElement('br')); //Saut de ligne
        node.appendChild(textnode);
        node.appendChild(document.createElement('br')); //Saut de ligne
        document.getElementById("div"+i+categ).appendChild(node); 

    
        //Affichage des prix
        const node2 = document.createElement("p");
        const textnode2 = document.createTextNode(tableauProduits[i-1].prix + "€")
        node.appendChild(textnode2);
        document.getElementById("div"+i+categ).appendChild(node2); 
        

    }


}

function masquer(lettre){
    
    let id = "s"+lettre;
    
    document.getElementById(id).style.display ="none";

}

