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


console.log(first)//Maya
console.log(second)//Marisa
console.log(third)//Chi


*/

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first);
console.log(second);
console.log(third);

console.log(second);
console.log(second);
console.log(first);

/*
Array Destructing 2

what does the following code return/print?

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]

console.log(raindrops);// "Raindrops on roses"
console.log(whiskers);// "whiskers on Kittens"
console.log(aFewOfMyFavoriteThings);// "Bright Copper Kettles", "warm woolen mittens", "Brown paper packages tied up with strings"


*/

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings",
];

/*
Array Destructuring 3

what does the following code return/print
let numbers = [10,20,30]; 
[numbers[1], numbers[2]] = [ numbers[2], numbers [1]]


console.log(numbers)// [10,20], [20,10]


*/

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];

// [numbers[1], numbers[2], numbers[3]] = [numbers[3], numbers[2], numbers[1]];

/*
ES5 Assigning Variables to Object Properties

var obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

var a = obj.numbers.a;
var b = obj.numbers.b


*/

console.log("ES2015 Object Destructuring");

var obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

const { numbers } = obj;

/*
ES5 Array Swap

var arr = [1,2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;


although we have 1,2 in our array the arr of 0 and array of 1 are referencing the position of the arr variable/object

so [arry position 0 [which is 1], array position of 1 [which is 2]] = [array postion of 1[which is 2],[array position of 0 [which is 1]
*/

var arr = [1, 2];

[arr[0], arr[1]] = [arr[1], arr[0]];

/*
raceResults()

raceResults (['Tom', 'Margaret', 'Allison', 'David','Pierre']);

1. write a function called raceResults
2. accepts a single array argument
3. return object with keys [first, second, ...rest]
4. write a one line function using arrow function and destructuring 

*/

const raceResults = ([first, second, third, ...rest]) => ({
  first,
  second,
  third,
  ...rest,
});
