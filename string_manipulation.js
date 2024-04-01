//Write a function that reverses a given string
var reverseString = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}; 

var originalString = "Holding Back The Years";
var reversedString = reverseString(originalString);
console.log("---------------------------Reverse a String---------------------------------------------");
console.log(`Original String: "${originalString}" \nReversed String: "${reversedString}"`);


//Create a function that counts the number of characters in a string.
var countCharacters = (str) => {
    let characters = 0;
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] !== " ") {
            characters++;
        } else {
            continue;
        }
    }
    return characters;
}

var string = "Our lives begin to end the moment we become silent about things that matter.";
var stringCharactersCount = countCharacters(string);
console.log(" ");
console.log("---------------------------Count characters in a String---------------------------------------------");
console.log(`The string: "${string}", \nhas ${stringCharactersCount} characters in it.\nCool right? 😁`);

// Implement a function that capitalizes the first letter of each word in a sentence.
var capitalizeSentence = (str) => {
    let capitalized = "";
    for (let i = 0; i < str.length; i++) {
        capitalized += str[i].toUpperCase();
    }
    return capitalized;
}
console.log(" ");
var sentence = "leaving a legacy";
var capitalized = capitalizeSentence(sentence);
console.log("---------------------------Capitalize a Sentence---------------------------------------------");
console.log(`The sentence/word: "${sentence}" \nhas been capitalized to: "${capitalized}"`); 



