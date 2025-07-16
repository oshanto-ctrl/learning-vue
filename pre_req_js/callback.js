/*
    callback = a function that is passed as an argument
                to another.

                used to handle asynchronous operation:
                1. reading a file
                2. network requests
                3. interacting with databases


            "Hey, when you're done, call this next."
*/
// callback = a function that is passed as an argument to another function

hello(leave);

function hello(callback){
    console.log("Hello!");
    callback();
}


function wait(){
    console.log("wait");
}

function leave(){
    console.log("Leave");
}

function goodbye(){
    console.log("goodbye!");
}


