
let usernameValue = document.getElementById('username');
let passwordValue = document.getElementById('password');

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('enteredValues').innerHTML =
        'Username: ' +
        usernameValue.value +
        '   ' +
        'Password: ' +
        passwordValue.value;

        localStorage.setItem('username', usernameValue.value);
        localStorage.setItem('password', passwordValue.value);

});