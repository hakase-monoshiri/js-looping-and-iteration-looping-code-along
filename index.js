// Code your solutions in this file
function writeCards (namesArray, eventName) {
    let newNames = []
    for ( let i = 0; i < namesArray.length; i ++ ) {
        let name = namesArray[i];
        newNames.push(`Thank you, ${name}, for the wonderful ${eventName} gift!`);
    }
    return newNames
}

function countDown (number) {
    let i = number
    while (i >= 0) {
        console.log(i);
        i--;
    }
}