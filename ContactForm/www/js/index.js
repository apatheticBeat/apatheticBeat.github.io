function process() {

    var full_name = document.getElementById('full_name').value;

    var email = document.getElementById('email').value;

    var phone = document.getElementById('phone').value;

    var inquiry = document.getElementById('inquiry').value;

    var result = ' ';

    result += 'Full Name: <br><br>' + full_name + '<br> <br>';

    result += 'Email Address: <br> <br>' + email + '<br> <br>';

    result += 'Phone Number: <br> <br>' + phone + '<br> <br>';

    result += 'Inquiry: <br> <br>' + inquiry + '<br> <br>';

    document.getElementById('result').innerHTML = result;

}