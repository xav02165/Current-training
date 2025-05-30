/*function controle(age) {
    if(age >= 18) 
        return "Majeur";
     else 
        return "Mineur";
    }
       
    
    console.log(controle(16));

   /* ou 

let age=25;

    if (age >=18 ) {
        console.log("majeur");
    }

    else  {
        console.log("mineur");
    }
    


/*exercice2: affichage nombre pair de 1 a 20:*/



/*for (let i=0; i<=20; i+=2){
console.log(i);
}*/

const chiffrepair = [];
for (let i=0; i<=20; i++) {
    if (i % 2 ===0 ) {
        chiffrepair.push(i);
    }
}
console.log("chiffre pair:", chiffrepair);

/*variante perso de 5 en 5 jusqu'a 50 
for (let a=0; a=50; a+=5){
    console.log(a);
}*/
