// A user class with name, age
export default class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
// printName() method
function printName(user){
    console.log(`User's name is ${user.name}`);
}
// printAge() method
function printAge(user){
    console.log(`User is ${user.age} years old.`);
}

export { printName, printAge}