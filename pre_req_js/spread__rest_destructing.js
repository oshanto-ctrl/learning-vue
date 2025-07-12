/* 
Destructing
*/
// Try changing the values in the arrays and objects below!

// Array destructuring
const fruits = ['apple', 'banana', 'orange'];
const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log('Array destructuring:');
console.log('First fruit:', firstFruit);
console.log('Type of firstFruit:', typeof(firstFruit));
console.log('Second fruit:', secondFruit);
console.log('Third fruit:', thirdFruit);

// Exercise 1: Uncomment and modify the fruits array
// const fruits = ['mango', 'kiwi', 'pineapple'];
// const [firstFruit, secondFruit, thirdFruit] = fruits;

// Object destructuring
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const { name, age, city } = person;

console.log('\nObject destructuring:');
console.log('Name:', name);
console.log('Age:',age);
console.log('City:', city);

// Exercise 2: Add a new property to the person object
// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
//     country: 'USA'
// };

// Advanced destructuring
// const numbers = [1, 2, 3, 4, 5];
// const [first, ...rest] = numbers;

// console.log('\nAdvanced destructuring:');
// console.log('First number:', first);
// console.log('First Number Type: ', typeof(first));
// console.log('Rest of numbers:', rest);
// console.log('Type of rest number: ', typeof(rest));

// Exercise 3: Try changing the numbers array
// const numbers = [1, 'x', 30, 40, 50];
const numbers = [1,];
const [first, ...rest] = numbers;

console.log('\nAdvanced destructuring:');
console.log('First number:', first);
console.log('First Number Type: ', typeof(first));
console.log('Rest of numbers:', rest);
console.log('Type of rest number: ', typeof(rest));


// Nested destructuring
// const nested = {
//     user: {
//         name: 'Jane',
//         settings: {
//             theme: 'dark',
//             notifications: true
//         }
//     }
// };

// const { user: { name: userName, settings: { theme } } } = nested;

// console.log('\nNested destructuring:');
// console.log('User name:', userName);
// console.log('Theme:', theme);

// Exercise 4: Add a new nested property
const nestedDestruct = {
    user: {
        name: 'Jane',
        settings: {
            theme: 'dark',
            notifications: true,
            language: 'english'
        }
    }
};

const {user: { name: username, settings: { userlanguage, notifications, usertheme }}} = nestedDestruct;
console.log(`
    Username: ${username}
    ----------------------
    Notification turned on? ${notifications}
    User Language? ${nestedDestruct.user.language}
    Uses theme? ${usertheme}
    `);



/* 
    Spread Operator
*/
// Add elements of an existing array to new array
var certToAdd = ['DSA', 'FE', 'Libs'];
var certifications = ['RespWebDes', ...certToAdd, 'DataViz', 'API', 'QA'];
console.log(`Certifications on xyz-LMS:\n${certifications} `);

certifications.forEach((cer) => {
    console.log(`# ${cer}`);
});

// Pass elements of an array as arguments to a function
function addNums(...args){
    let sum=null;
    args.forEach(num=>sum+=num);
    return sum;
}

var args = [0, 1, 2, 4];
console.log("Addition of number: "+ addNums(...args));

/*
    Rest Operator
*/ 
const arg1 = [100.1, 300.1]; const arg2 = [111.15, 345.33];
function sumNumbers(...numbers){
    let sum = 0;
    numbers.forEach(num=>sum+=num);
    return sum;
}
console.log(`Sum of two diff array using Rest: ${sumNumbers(...arg1, ...arg2)}`);
