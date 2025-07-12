// arrow function: a concise way to write function
//                 expressions good for simple function
//                 that you use only once.
//                 (parameter) => some working code

// regular function: hello()
function hello(){
    console.log("HELLO.\n");
} hello();

// Store function expression in variable.
const pi = function(){
    console.log("3.14159");
}
pi();

// arrow function:
const reg_no = () => console.log("\nBGDAA404DGDG");
reg_no(); // call it.

// => with parameters.
const greeting_message = (fname, lname) => console.log(`\nHello ${fname} ${lname}!`);
greeting_message("Humayra", "Siddiky");

// If we need more than 1 line of code inside => function use { } outside
// after writing name () =>{ }
const report_message = (ID, response) => {
    console.log(`Hello ${ID}`);
    console.log(`Sorry that you faced: ${response}. We'll address the problems at early convenience.'.`);
};
report_message('3303A', "Door lock isn't working and fauchet is leaking.")

// Settimeout(): callback, time
setTimeout( () => console.log("Allo...allo\n"), 2000);

// Array function with: map, filter, reduce
const numbers = [1, 2, 3, 4, 5, 6]

const squares = numbers.map((i) => Math.pow(i, 2));
const evenNums  = numbers.filter((i) => !(i&1));
const total = numbers.reduce((accumulator, i) => accumulator + i);

console.log(squares);
console.log(evenNums);
console.log(total);

// Example of arrow function inside methods.
function greetAll(){
    const names = ['Alice', 'Dove', 'Bob'];
    names.forEach(name => {
        console.log(`Hello, ${name} from ${this.username}`);
    });
}

greetAll();