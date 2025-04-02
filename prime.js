let num = 6;
let count = 0;

for (let i = 1; i <= num; i++) { // Loop should go up to num
    if (num % i == 0) {
        count++;
    }
}

if (count == 2) {  // Prime numbers have exactly two divisors (1 and itself)
    console.log("The given number is prime");
} else {
    console.log("The given number is not prime");
}


