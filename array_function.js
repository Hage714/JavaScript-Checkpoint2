//Write functions to find the maximum and minimum values in an array of numbers.
function findMaximum(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    let maxValue = arr[0]; // Initialize maxValue with the first element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    return maxValue;
}

function findMinimum(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    let minValue = arr[0]; // Initialize minValue with the first element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }
    return minValue;
}
const numbers = [1, 8, 0, 2, 3, 8, 4, 7];
console.log("Maximum value:", findMaximum(numbers));
console.log("Minimum value:", findMinimum(numbers));


//Create a function that calculates the sum of all elements in an array
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const numbers2 = [1, 5, 7, 9, 3, 8, 4];
console.log("Sum of all elements:", calculateSum(numbers2));


// Implement a function that filters out elements from an array based on a given condition...filter even numbers
function filterArray(arr, condition) {
    return arr.filter(condition);
  }
  const numbers3 = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers3, num => num % 2 === 0);
console.log(evenNumbers);