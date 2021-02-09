function greeting() {
    var input = prompt('what is your mark in the quiz');
    console.log(input)
    var message = '';
    console.log(message);
    if (input >= 50 && input <= 100) { //f
        message = 'you pass';
    } else {
        alert('you falled' + ' ' + 'try again')
    }
    document.write('<h2>' + message + '</h2>');
}
greeting();