//1

// Let's play! You have to return which player won! In case of a draw return Draw!.
//Examples:
//
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) => {
    if (p1 === 'scissors' && p2 === 'paper') {
        return 'Player 1 won!'
    } if (p1 === 'rock' && p2 === 'scissors') {
        return 'Player 1 won!'
    } if (p1 === 'paper' && p2 === 'rock') {
        return 'Player 1 won!'
    }
    if (p2 === 'scissors' && p1 === 'paper') {
        return 'Player 2 won!'
    } if (p2 === 'rock' && p1 === 'scissors') {
        return 'Player 2 won!'
    } if (p2 === 'paper' && p1 === 'rock') {
        return 'Player 2 won!'
    }
    else {
        return 'Draw!'
    }
};
// alternative

// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";
//     var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//     if (p2 === rules[p1]) {
//         return "Player 1 won!";
//     }
//     else {
//         return "Player 2 won!";
//     }
// };

//2

//Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
//
// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
//
// This function should return a number (final grade). There are four types of final grades:
//
// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10) return 100;
    if (exam > 75 && projects >= 5) return 90;
    if (exam > 50 && projects >= 2) return 75;
    return 0;
}

//3

//You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
// Complete the method which accepts such an array, and returns that single different number.
//
// The input array will always be valid! (odd-length >= 3)
//
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers){
    for (var i in numbers){
        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
}


//4

//Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.
//
// Your function should return true if all elements in the array are square numbers and false if not.
//
// An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.
//
// Examples:
//
// is_square([1, 4, 9, 16]) --> True
//
// is_square([3, 4, 7, 9]) --> False
//
// is_square([]) --> None

var isSquare = function(arr){
    return (arr.length) ? arr.every(x=>Math.sqrt(x)%1==0) : undefined;
}

//5
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
}

//6
//Your function takes two arguments:
//
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

//7

////  Функция sum принимает параметром целые положительные
// // числа (неопределённое кол-во) и возвращает их сумму (rest).
//
// export function sum( ...nums) {
//    return nums.reduce((ac,vl) => {
//        return  ac + vl
//    },0)
// }

// 8

// Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

// export function getTriangleType(a,b,c) {
//     if (a + b >= c && b + c >= a && a + c >= b) {
//         if (a === b && c === b) {
//             return "10"
//         } else if (a === b || a === c || c === b) {
//             return "01"
//         } else {
//             return "11"
//         }
//     } else {
//         return "00"
//     }
// }

//9
// Your function takes two arguments:
//
//     current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

//10
//Write a function that checks if a given string (case insensitive) is a palindrome.

const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}

//11
//Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
//
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
//
// Examples:
//
// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ""       => "Hello, World!" # name is an empty String

const hello = s =>
    `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;

//12
//Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
//
// Example: (Input1, Input2 -->Output)
//
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:
//
// If either input is an empty string, consider it as zero.
//
// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

const sumStr = (a,b) =>  Number(a) + Number(b)+ ''


//13
//Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
//
// Can you help her?

function greet(name){
    return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}

//14
//This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

var a = "code";
var b = "wa.rs";
var name = a + b;

//15
//Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
    return s.repeat(n);
}

//16
//Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
//
// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

// function stringClean(s){
//     return s.replace(/\d/g, "");
// }

const stringClean1 = (s) => s.split('').filter(s => s != parseInt(s)).join('');

function stringClean(s){
   const someArr = s.split('');
    let emptyArr = [];
    for (let i = 0; i < someArr.length; i++){
        if(someArr[i] != parseInt(someArr[i])){
            emptyArr.push(someArr[i])
        }
    }
    return emptyArr.join('')

}

// console.log(stringClean("sdsadsa2 123213 12421142dsadsffds"));
// console.log(stringClean1("sdsadsa2 123213 12421142dsadsffds"));


//17 Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
    return parseInt(bin, 2)
}
//6
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

function sumNumber (value) {
    return function sum1(value1) {
        return value + value1
    }
}
//
// console.log(sumNumber(5)(5));

//17
// Переписать функцию из Task 16 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function SumTask11 (value) {
     this.set = function (value1) {
        return value = value1
    }
     this.increase = function () {
        return value = value + 1
    }
    this.decrease = function () {
        return value = value - 1
    }
    this.reset = function () {
        return value = 0
    }
}

// const Task11 = new SumTask11(0)
// console.log(Task11.set(10))
// console.log(Task11.reset())
// console.log(Task11.increase())
// console.log(Task11.increase())
// console.log(Task11.increase())
// console.log(Task11.decrease())
// console.log(Task11.decrease())
// console.log(Task11.decrease())



//18
function howMuchWater(water, load, clothes){
    if(load * 2  < clothes ) {
        return 'Too much clothes';
    } else if(load > clothes ){
        return 'Not enough clothes';
    }else {
        return  Math.round(water * 1.1 ** (clothes - load) * 100) / 100
    }
}

howMuchWater(10,11,20)