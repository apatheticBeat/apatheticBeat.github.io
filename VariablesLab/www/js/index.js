function processAdd() {

    var num1 = document.getElementById("num1").value;

    var num2 = document.getElementById("num2").value;

    var total = 0;

    total = add(num1, num2);

    document.getElementById("results").value = total;

}

function processSubtract() {

    var num1 = document.getElementById("num1").value;

    var num2 = document.getElementById("num2").value;

    var total = 0;

    total = subtract(num1, num2);

    document.getElementById("results").value = total;

}

function add(param1, param2) {

    return parseInt(param1) + parseInt(param2);

}

function subtract(param1, param2) {

    return parseInt(param1) - parseInt(param2);

}