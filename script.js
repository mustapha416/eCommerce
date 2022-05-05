

document.addEventListener("DOMContentLoaded", ()=>{

    //document.body.style.backgroundImage = h1.image;
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
  
    document.getElementById(id).style.display ="flex"

    var array = ['h', 'f', 'e'];
    var array2 = array.filter(function(){
        return 1;
     });

   
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
    

}

function masquer(lettre){
    
    let id = "s"+lettre;
    
    document.getElementById(id).style.display ="none";

}

