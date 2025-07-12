// JS variables: Const vs Let vs Var

// const: "Values that never change"
const pi = 3.14;
// pi = 2.32 // will give error(Assignment to constant)
console.log(pi);

// let: "Block level variable usage."
for(let i = 0; i < 5; i++){
    console.log(i);
} // This example: let is use for looping a variable in for block.

// var: "We can access var in whole program."
console.log(j) // Undefined: but no error shown.
for(var j = 0; j <=2; j++){
    console.log(j);
}
console.log(j+1) // j = 4: outside scope of for block.