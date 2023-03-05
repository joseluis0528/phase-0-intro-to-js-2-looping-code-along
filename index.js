// Code your solutions in this file

function writeCards(array, event) {
    let cardContainer = []
    for (let i = 0; i < array.length; i++) {
        let message = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
        cardContainer.push(message);
    }
    return cardContainer
}

function countDown(num) {
    let i = 0;
    while (i <= num) {
        console.log(i++);
    }
}