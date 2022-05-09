let affichage = [false, false, false];
let categG = ""
let iG = 0
//localStorage.setItem('panier',JSON.stringify(cart))

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

    // traitement modal
    // document.getElementById("modal-button").addEventListener('click', function() {
    //     document.getElementById(pModalp).add
    // })



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
    //alert(affichage[array.indexOf(categ)])
   
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
    if(!affichage[array.indexOf(categ)]){
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

        //Ajout du bouton Achat
        iG = i
        categG = categ
        const node3 = document.createElement("button");
        node3.classList.add("btn")
        node3.classList.add("btn-primary")
        node3.dataset.num = i
        //console.log(node3.classList.item(2))
        node3.append("Ajouter au panier")
        //JSON.parse(localStorage.getItem('cart'));
        node3.onclick =ajouterAuPanier
        //localStorage.setItem('panier',JSON.stringify(cart))
        console.log(node3.classList)
        document.getElementById("div"+i+categ).appendChild(node3); 
        //const textnode3 = document.createTextNode("€dssssssddd")
        //node.appendChild(textnode3);
        //document.getElementById("div"+i+categ).appendChild(node3); 
        

        //Hover des descriptions
        document.getElementById("p"+categ+i).innerHTML = tableauProduits[i-1].description
        
        affichage[array.indexOf(categ)] = true;

    }
}


}

function masquer(lettre){
    
    let id = "s"+lettre;
    
    document.getElementById(id).style.display ="none";

}

function ajouterAuPanier(){
    

    let char = this.textContent
    let num = this.dataset.num
    
    if(char=="Ajouter au panier"){
        
    this.classList.replace("btn-primary","btn-secondary")
    this.textContent = "ajouté"
    
    plusUn(num);
    }
    else{

        this.textContent = "Ajouter au panier"
        this.classList.replace("btn-secondary","btn-primary")
        moinsUn(num);
    }
}

function plusUn(item){


    console.log("avant",cart[index(item)]) 
    cart[index(item)]++;
    console.log("apres",cart[index(item)]) 



}

function moinsUn(item){


    console.log("avant",cart[index(item)]) 
    cart[index(item)]--;
    console.log("apres",cart[index(item)]) 
}

function index (itm){

    let index = 0
    switch (categG){
        case "h":
            index = itm -1
            break
        case "f":
            index = 5 + parseInt(itm)
            break
        default :
            index = 11 + parseInt(itm)

    }
    return index

}

function afficherModal(){

    //var text ="test"
    //document.getElementById(pModal).innerHTML = "text"
    //var p = element.createElement("p")
    //element.appendChild("test")

    // const node = document.createElement("p");
    // const textnode = document.createTextNode("tableauProduits[i-1].nom")
    // node.appendChild(document.createElement('br')); //Saut de ligne
    // node.appendChild(textnode);
    // document.getElementById(pModalp).innerHTML = "text"

    var list = inventaire()
    document.querySelector("#pModalp").innerHTML = list
    //el.appendChild("gdgd")

    // var node = document.createElement("p");
    // const textnode = document.createTextNode(tableauProduits[i-1].nom)
    // node.appendChild(document.createElement('br')); //Saut de ligne
    // node.appendChild(textnode);
    // node.appendChild(document.createElement('br')); //Saut de ligne
  

}

function inventaire(){
var invent = " "

for(var i=0; i<cart.length; i++){
    
    if(cart[i]>0) {
        
        invent = invent + cartToProds[i].nom +" x "+ cart[i] +"    =      "+invent + cartToProds[i].prix +"<br/>"

    }

}

console.log(invent)
return invent


}