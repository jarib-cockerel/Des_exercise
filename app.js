/*
Object Destructuriing 1

what does the followoing code return/print?

let facts = {numPlantes: 8, yerNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts



console.log(numPlanets);// undefined
console.log(yearNeptuneDiscovered);// undefined 
*/

// let facts = { numPlantes: 8, yerNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;

/*
Object Destructing 2

what does the following code return/print?

let planetFacts = {
    numPlanets : 8,
    yearNeptuneDiscovered : 1846,
    yearMarsDiscovered : 1659
};

let {numPlanets, ... discoveryYears} = planetFacts;

console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

object is returned 

...discoveryYears is the rest which collected what was left after numPlanets: 8





*/

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears);

/*
Object Destructing 3

what does the following code return/print

function getUserData({firstName, favoriteColor = 'green'}){
    return `your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"})// 'Your name is Alejandro and you like purple.


getUserData({firstName: Melissa})//Your name is Melissa and you like green.


getUserData({})//Your name is undefined and you like green 

*/

function getUserData({ firstName, favoriteColor = "green" }) {
  return `your name is ${firstName} and you like ${favoriteColor}`;
}

/*
Array Deconstructing 1

let [first, second, third] = ["Maya", "Marisa", "Chi"]


console.log(first)
console.log(second)
console.log(third)


*/

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first);
console.log(second);
console.log(third);
