// Write a code to check whether the number is odd or even
// Example: 25 → odd number, 2 → even number

const a: number = 26;
if (a % 2 == 0) {
  console.log(a + " is even");
} else {
  console.log(a + " is Odd");
}

// Write a code to check whether the number is prime number or not
// Example: 7 → 7 is a prime number
// Example: 6 → 6 is not a prime number

let prime;
let n: number = 37;
// Check if the number is equal to 1, which is not a prime number
if (n === 1) {
  prime = `${n} is not a prime number`;
  console.log(prime);
}
// Check if the number is equal to 2, which is a prime number
else if (n === 2) {
  prime = `${n} is a prime number`;
  console.log(prime);
} else if (n > 2) {
  // Iterate from 2 to n-1 to check for factors of n
  for (var x = 2; x < n; x++) {
    // If n is divisible by x without a remainder, it is not a prime number
    if (n % x === 0) {
      prime = `${n} is not a prime number`;
      break;
    } else {
      prime = `${n} is a prime number`;
    }
  }
  console.log(prime);
}

// Write a code to find the sum of the numbers 1 to N (deret aritmatika)
let _hasil: number = 0;
const _sumDeret: number = 5;
for (let i = 0; i <= _sumDeret; i++) {
  _hasil += i;
  console.log(_hasil);
}
console.log(_hasil);
