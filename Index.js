// Strings to Integer Converter

//JavaScript by deafault saves user input as strings and
//Therefore means manual conversion is nessecary.


function getNumber(id) {

    return parseFloat(document.getElementById(id).value);

}

function add() {

    document.getElementById('Results').value = getNumber('Number-1') + getNumber('Number-2');

}

function subtract() {

    document.getElementById('Results').value = getNumber('Number-1') - getNumber('Number-2');

}

function multiply() {

    document.getElementById('Results').value = getNumber('Number-1') * getNumber('Number-2');

}

function divide() {

    document.getElementById('Results').value = getNumber('Number-1') / getNumber('Number-2');

}
