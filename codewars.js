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
export function sum( ...nums) {
   return nums.reduce((ac,vl) => {
       return  ac + vl
   },0)
}

// 8

// Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a,b,c) {
    if (a + b >= c && b + c >= a && a + c >= b) {
        if (a === b && c === b) {
            return "10"
        } else if (a === b || a === c || c === b) {
            return "01"
        } else {
            return "11"
        }
    } else {
        return "00"
    }
}

//9
// Your function takes two arguments:
//
//     current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
