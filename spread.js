/*const str = "Digital Innovation One";
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a,b,c);
}

logArgs(...arr)
*/

const obj = {
    test: 123.
    subObj; {
        test: 123
    }
};

const obj2 = { ...obj, subObj: { ...obj.subObj }}

obj2.subObj.test = 456;
console.log(obj);