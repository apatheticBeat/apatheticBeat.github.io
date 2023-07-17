function displayMonday() {

    var Todo = [

        "Do Some Physics Labs",
        "Do a Basket of Laundry",
        "Call Psychiatrists Office Finally"

    ];

    display(Todo);

}

function displayTuesday() {

    var Todo = [

        "Clean The Kitchen",
        "Exercise",
        "Practice Scales",

    ];

    display(Todo);

}

function displayWednesday() {

    var Todo = [

        "More Physics Work",
        "Do More Programming Labs",
        "Smoke A Joint"

    ];

    display(Todo);

}

function display(list) {

    var preview = document.getElementById("Preview");
    var todo_list = "";

    for (var index = 0; index < list.length; index++) {

        todo_list += "<li>" + list[index] + "</li>";

    }

    preview.innerHTML = "<ol>" + todo_list + "</ol>";

}