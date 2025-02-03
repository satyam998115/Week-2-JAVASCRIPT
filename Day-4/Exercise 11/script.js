function factorialUsingReduce(n) {
    if (n === 0 || n === 1) return 1;
    return [...Array(n).keys()].map(i => i + 1).reduce((acc, val) => acc * val, 1);
}

function factorialUsingLoop(n) {
    let result = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    return result;
}

const number = 6;
console.log(`Factorial of ${number} using reduce:`, factorialUsingReduce(number));
console.log(`Factorial of ${number} using loop:`, factorialUsingLoop(number));