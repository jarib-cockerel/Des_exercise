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

console.log(discoveryYears); //



*/

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears);
