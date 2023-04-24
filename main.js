const userNameField = document.getElementById("username-field");
const warningMessage = document.getElementById("username-warning");

userNameField.addEventListener('keyup', checkUsername);

function checkUsername (e) {
    if (e.target.value.includes('@')) {
        warningMessage.textContent = 'Gebruikersnaam mag geen @ bevatten';
    } else {
        warningMessage.textContent = '';
    }
}

const passWordField = document.getElementById('password-field');
const warningPassword = document.getElementById('password-warning');

passWordField.addEventListener("keyup", checkPassword)

function checkPassword (e) {
    if (e.target.value === '' || e.target.value.length >= 6) {
        warningPassword.textContent = '';
    } else {
        warningPassword.textContent = 'Wachtwoord is te kort, gebruik minimaal 6 tekens';
    }
}

