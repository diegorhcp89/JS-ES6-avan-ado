/*function* naturalNumber() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const it = naturalNumber();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
*/

//Symbol.interator;

const arr = [1, 2, 3, 4];
const str = 'Digital innovation one';

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    } 
};