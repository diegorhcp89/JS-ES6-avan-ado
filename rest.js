const multiply = (...args) => args.reduce((acc, value)) => acc * value, 1);

const sum = (...rest) => {
    return multiply.apply(undefined, rest);
};

console.log(sum(5, 5, 5, 2, 3));