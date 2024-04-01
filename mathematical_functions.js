//Write a function to calculate the factorial of a given number.
var calculateFactorial = (num) => {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

const number1 = 5;
console.log(calculateFactorial(number1));


//Create a function to check if a number is prime or not.
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    if (number <= 3) {
      return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
    let i = 5;
    while (i * i <= number) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  }
  
  console.log(isPrime(7)); // Output: true
  console.log(isPrime(12)); // Output: false


  //: Implement a function to generate the Fibonacci sequence up to a given number of terms.
  function generateFibonacci(numTerms) {
    let previous = 0;
    let current = 1;
    let sequence = [];
    for (let i = 0; i < numTerms; i++) {
      sequence.push(current);
      let temp = previous + current;
      previous = current;
      current = temp;
    }
    return sequence;
  }
  
  console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

  




  