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

/*
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
*/

/* Qual a diferença entre função de declaração e função de expressão ?
   A diferença é que na função de declaração eu posso chamar a função antes dela
   já na função de expressão eu tenho que chamar depois dela.
*/

// Em arow function o que tem antes da arow seria os parametros do método a arow é o que 
 // se espera de ReadableByteStreamController.
/*
const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(" A idade é " + age3);
console.log(" A idade é " + calAge3(1990));

// Quando eu tenho mais de dois parametros em uma arow function eu deixo eles entre parenteses
const yearsUntilRetirement = (birthYear,firstName) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    const retirement = 65 - age;
    return (`${firstName} retires in ${retirement} years`);
}

console.log(yearsUntilRetirement (1990,'JUNIOR'));
console.log(yearsUntilRetirement(1988,'MARIA'));
*/

/*
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with  ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));
*/

const calAge = function(birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear,firstName){
    const age = calAge(birthYear);
    const retirement = 65-age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        console.log(`${firstName} has already retired 🤩`);
        return -1;
    }

}

console.log(yearsUntilRetirement(1991, 'Junior'));
console.log(yearsUntilRetirement(1950, 'Mike'));
