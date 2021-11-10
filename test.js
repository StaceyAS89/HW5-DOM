
let usernameValue = document.getElementById('username');
let passwordValue = document.getElementById('password');
// let loginData = usernameValue + passwordValue;
// let loginButton = document.getElementById('login');


document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault(); 
    document.getElementById('enteredValues').innerHTML = 'Username: '+ usernameValue.value + '   '+'Password: ' + passwordValue.value;
}
)
// let usernameData =  usernameValue.innerHTML;
// let passwordData = passwordValue.value;


// localStorage.setItem('username', usernameValue.value);

document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault(); 
    localStorage.setItem('username', usernameValue.value);
    localStorage.setItem('password', passwordValue.value);
}
)