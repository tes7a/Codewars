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

//Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
//
// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

const smash = (words) => words.join(" ");