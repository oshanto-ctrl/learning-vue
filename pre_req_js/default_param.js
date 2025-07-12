// Default parameters - useful for fallback values
function greet(name="Guest"){
    console.log(`Hello ${name}!`);
}
greet(); // Hello Guest!
greet("NOSCUBEEE"); // Hello NOSCUBEEE!

// Classes - structure and reuse logic(Like components)
class userCard{
    constructor(name, role="Member"){
        this.name = name;
        this.role = role;
    }

    display(){
        console.log(`${this.name} - ${this.role}`);
    }
}

const u1 = new userCard("noscube");
const u2 = new userCard("OSUM", "Admin");
u1.display();
u2.display();
