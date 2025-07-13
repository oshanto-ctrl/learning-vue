/*
    Promise = An object that manages asynchronous operations.
            Wrap a Promise Object around {asynchronous code}
            "I promise to return a value"
            PENDING -> RESOLVED or REJECTED
            new Promise((resolve, reject) => {asynchronous code})

*/

// DO the following chores in order

// 1. Walk the dog
// 2. Clean the kitchen
// 3. Take out the trash


// function walkDog(callback){
//     setTimeout( () => {
//         console.log("You Walk the dog. VowVow!!");
//         callback(); // invoke callback
//     }, 1500);
// }

// function cleanKitchen(callback){
//     setTimeout( () => {
//         console.log("You clean the kitchen. kitchin!!");
//         callback();
//     }, 2500);
// }

// function takeOutTrash(callback){
//     setTimeout( () => {
//         console.log("You take out the trash. Garbageing!!");
//         callback();
//     }, 500);
// }

// // Callback Hell: Not good when there are many callback => Instead use promise.
// walkDog(() => {
//     cleanKitchen( () => {
//         takeOutTrash( () => console.log("You finished all the chores!"));
//     });
// });

/* Using Promise(resolve, reject) */

// 1. Do the homework
// 2. Play cricket
// 3. Eat Dinner

function doHomework(){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const hwDone = false;
            if (hwDone){
                resolve("You completed the homework!");
            } else {
                reject("Didn't Completed Homework! Dont go to play!")
            }
    
        }, 3000);
    });
}

function playCricekt(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const playedCricket = true;
            if (playedCricket){
                resolve("You enjoyed playing cricket!");
            } else {
                reject("You couldn't played cricket, GO TO DINNER!");
            }
        }, 2500);
    });
}

function eatingDinner(){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const dinnerFinished = true;
            if (dinnerFinished){
                resolve("You completed delicious dinner!");
            } else {
                reject("You didn't take dinner on time, foods in the fridge!");
            }
        }, 500);
    });
}

// Method chaining in order:
doHomework().then(value => {console.log(value); return playCricekt()})
            .then(value => {console.log(value); return eatingDinner()})
            .then(value => {console.log(value); console.log("You finished all the tasks!");})
            .catch(error => console.error(error));