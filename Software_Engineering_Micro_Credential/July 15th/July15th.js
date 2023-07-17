alert('HELLO JS');

console.log(2 + 2);

alert('Hello again');

console.log(2 + 2 > 3);

console.log(2 + 3 * 234 / 12 % 2, 1234 + 'Trying something out using console.log function', true, false, null)


// document.querySelector('h1').textContent='Pizza'

document.querySelector('button').addEventListener('click', function () {

    const userInput = prompt('What is your favorite food');
    if (userInput == 'Pizza') {
        document.querySelector('h1').textContent = 'I like Pizza too';
    }
    else { document.querySelector('h1').textContent = '-__-'; }
})



const userInputNew = 'Fries'

if (userInputNew === 'Pizza') {
    console.log('I like Pizza too')
}
else {

    console.log('-__-')
}