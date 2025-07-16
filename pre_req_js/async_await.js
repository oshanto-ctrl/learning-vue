/*
    Async/Await = Async = makes a function return a promise.
                = Await = makes and async function wait for promise.

                Allows you write asynchronous code in synchronous manner
                Async doesn't have resolve or reject parameters.
                Everything after Await is placed in an event queue.

*/

function doHomework(){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const hwDone = true; // This false means will not proceed other promises.
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
            const playedCricket = false;
            if (playedCricket){
                resolve("You enjoyed playing cricket!");
            } else {
                reject("You couldn't play cricket, GO TO DINNER!");
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

// Async/Await
async function todayActivities(){
    try{
        const hwDoneResult = await doHomework(); 
    console.log(hwDoneResult);

    const playCricketResult = await playCricekt(); 
    console.log(playCricketResult);

    const eatingDinnerResult = await eatingDinner();
    console.log(eatingDinnerResult);

    console.log("You finished all the activity listed, Yippe-yay!");
    } catch(error) {
        console.error(error);
    }
}

todayActivities();