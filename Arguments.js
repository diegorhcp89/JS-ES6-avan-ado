function randomNumber () {
    console.log('Generating a random number...')

    return Math.ramdom() * 10;
}

function multiply(a, b = randomNumber()) {
    return a * b;
}

console.log(multiply(5));
console.log(multiply(5));