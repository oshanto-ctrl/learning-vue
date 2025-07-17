// Template Literals
// `` [Back-tick]

let a = 5;
let b = 10;
// Normal approach to print
console.log("I am " + a + " and She is " + b);

const PI = Math.PI;
const radius = 5;
console.log(`Given radius ${radius}m, so area of your cirle is: ${PI*Math.pow(radius, 2)}m`);
console.log(`\n
    He Said,
            Oh Gaaps,
    Let me Live!
            I Live Literals.
    Amazing things.\n`);

// Tagged template literals (YT: LWS)

function modifier(strings, ...values){
        // console.log(strings); // All other strings excluding values(Array)
        // console.log(values); // All the p1, p2 values(Array)

        // using reduce() for putting 'Mr.; before values.
        const m = strings.reduce((prev, curr) => {
                return prev + curr + (values.length ? "Mr. " + values.shift() : "")
        }, "");
        return m;
}

let p1 = "sakib"; let p2 = "tamim";
console.log(modifier`We have ${p1}, ${p2} in our team`);