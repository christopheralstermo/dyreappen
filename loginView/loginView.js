function logInView() {
    return /*HTML*/`
    <div id="loginContainer">
    <h2>Logg inn</h2>
    <form id="loginForm" onsubmit="handleLogin(event)">
    <label for="username">Brukernavn:</label>
    <input type="text" id="username" name="username" oninput="model.inputs.loginForm.username = this.value" required>
    
    <label for="password">Passord:</label>
    <input type="password" id="password" name="password" oninput="model.inputs.loginForm.password = this.value" required>
    
    <button type="submit">Logg inn</button>
    </form>
    <p id="errorMessage" class="error"></p>
    <p>Har du ikke konto? <button onclick="navigate('registerView')" class="link-button">Registrer deg her!</button></p>
    </div>
    `;
}

function handleLogIn(event) {
    event.preventDefault();
    console.log('Logg inn funksjon kalt');
    displayError(''); //Fjern forrige feilmelding
    const { username, password } = model.inputs.loginForm;
    console.log('handleLogIn ble kalt med - Brukernavn:', username, 'Passord:', password);
    logIn(username, password); //Kall logg inn funksjon med brukernavn og passord

    // Validering
    const error = validateLogin(username, password);
    if (error) {
        displayError(error);
        return;
    }

    //Autentisering
    const isAuthenticated = mockAuthenticate(username, password);
    if (isAuthenticated) {
        localStorage.setItem('username', username); //Lagre brukernavn i localStorage
        model.app.isLoggedIn = true;
        model.app.currentPage = 'frontPage';
        updateView();
    } else {
        displayError('Feil brukernavn eller passord');
    }
}

function validateLogin(username, password) {
    if (!username.trim() || !password.trim()) {
        return 'Vennligst fyll ut alle felt';
    }
    return null; //Ingen feil
}

function displayError(message) {
    const errorMessageElement = document.getElementById('errorMessage');
     if ( errorMessageElement) {
        errorMessageElement.textContent = message;
    }
}

function mockAuthenticate(username, password) {
    const validUsers = [
        { username: 'testUser', password: 'testPassword' },
        { username: 'admin', password: 'admin123' },
    ];
    return validUsers.some(user => user.username === username && user.password === password);
}