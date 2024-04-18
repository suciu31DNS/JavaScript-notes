// 1. Tipuri de date primitive
//bigint = stocheaza numere foarte mari
// symbol = folosit pentru a crea valori unice

//boolean (true sau false)
let isActive = true;
console.log(typeof isActive);

//number (folosit pentru stocat numere)
let myNumber = 10;
console.log(typeof myNumber);

//string (insiruire de caractere declarata cu "" sau '' sau ``)
let fullName = "Alex Pop";
console.log(typeof fullName);

//undefine (variabile declarata dar neinitializara)
let myUndefined;
console.log(myUndefined);

//null ( pentru a spune ca o variabila este goala sau nu are nici o valoare )
let myNull = null;
console.log(myNull);

// 2. Tipuri de date rederinta
//array-uri

//functii
//date calendaristice
//expresii regex

//obiecte (o colectie de  proprietati, o propietate are un nume si o valoare;
let person = {
  firstName: "Alex",
  lastName: "Pop",
  Age: 30,
};

console.log(typeof person);

//let numberOne = 1;
let numberOne = { value: 1 };

let numberTwo = numberOne;
console.log(numberOne);
console.log(numberTwo);

numberOne.value = 10; //sau modificat valorile ambelor variabile, in variabile se retine adresa unde se afla aces obiect;
console.log(numberOne);
console.log(numberTwo);

// numberOne = 10;
// console.log(numberOne);
// console.log(numberTwo);

// Modificarea valorii unei variabile nu afecteaza valoarea celeilate variabile in acest caz de data primitiv
