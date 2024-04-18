// operatorii aritmetici +, -, *, /, %, ++, --
// let numberOne = 10;
// let numberTwo = 2;
// console.log(numberOne + numberTwo);
// console.log(numberOne - numberTwo);
// console.log(numberOne * numberTwo);
// console.log(numberOne / numberTwo);
// console.log(numberOne % numberTwo);

// let myNumber = 1;
// myNumber++; // muNumber = myNumber + 1 (operatorul de incrementare)
// console.log(myNumber);

// myNumber--; // muNumber = myNumber - 1 (operatorul de decrementare)
// console.log(myNumber);

//operatori de comparatie <, <=, >, >=, ==, !=, ===, !== (returneaza boolean)

// let numberOne = 10;
// let numberTwo = 2;
// console.log(numberOne > numberTwo);
// console.log(numberOne < numberTwo);

// let numberOne = "10"; // 10 strig
// let numberTwo = 10; //10 numar
// console.log(numberOne === numberTwo); // se compara valoarea si tipul de date
// console.log(numberOne == numberTwo); // se compara numa valoarea

//operatori logici && = si(and) returneaza fals deoarece epresia1 este falsa si nici nu mai evalueaza expresia2
// let expresion1 = 3 > 5; //false
// let expresion2 = 3 < 5; //true
// console.log(expresion1 && expresion2);

// Operatorul ||= sau(or) returneaza adevarat daca cel putin una dintre este adevarat
let expresion1 = 3 > 5; //false
let expresion2 = 3 < 5; //true
console.log(expresion1 || expresion2);

// Operatorul != negatie(not) returneaza negatia(din adevarat in fals si invers)
console.log(!expresion1);

// operatorul de atrubuire =, -=, += *=, /=, %=
let firstNumber = 10;
firstNumber -= 5; //firstNumber = firstNumber - 5
firstNumber += 5; //firstNumber = firstNumber + 5
firstNumber *= 5; //firstNumber = firstNumber * 5
firstNumber /= 5; //firstNumber = firstNumber / 5
firstNumber %= 5; //firstNumber = firstNumber % 5
console.log(firstNumber);

// operatorul de concatenare = cand concatenam (imbinam)  mai multe string-uri dintr un singur string

let firstName = "Alex";
let secoundName = "Pop";
let fullName = firstName + " " + secoundName;
console.log(fullName);

// operatorul ternar
//expresie ? <exp adevarata> : <exp falsa>
let result = 3 > 5 ? "adevarat" : "fals";
console.log(result);
