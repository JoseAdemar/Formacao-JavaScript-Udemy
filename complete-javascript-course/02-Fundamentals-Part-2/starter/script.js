'use strict';

/*
let hasDriersLicense = false;
const passTest = true;

if(passTest){
    hasDriersLicense = true;
}

if(hasDriersLicense){
    console.log('I can drive :D');
}

//const interface = 'Audio';
//const private = 534;
*/

/*
function logger(){
    console.log('My name is José');
}

logger();
logger();

function fruitProcessor(applesQuantity, orangesQuantity){
    console.log(applesQuantity,orangesQuantity);
    const juice = `Juice with ${applesQuantity} apples and ${orangesQuantity} oranges.`
    return juice;
}

fruitProcessor(5,0)

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrange = fruitProcessor(2,4);
console.log(appleOrange);

const num = Number('23'); // a função Number converte a string para número.
console.log(num);
*/


//Function declaration
function calcAge1(birthYear){
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//Function expression
const calAge2 = function(birthYear){
    return 2037 - birthYear;
}
const age2 = calAge2(1991);
console.log(age2);

/* Qual a diferença entre função de declaração e função de expressão ?
   A diferença é que na função de declaração eu posso chamar a função antes dela
   já na função de expressão eu tenho que chamar depois dela.
*/

