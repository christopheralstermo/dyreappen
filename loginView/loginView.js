function logInView() {
    return /*HTML*/`
    <div id="loginContainer">
    <h2>Logg inn</h2>
    <form id="loginForm">
    <label for="username">Brukernavn:</label>
    <input type="text" id="username" name="username" oninput="model.inputs.loginForm.username = this.value" required>
    
    <label for="password">Passord:</label>
    <input type="password" id="password" name="password" oninput="model.inputs.loginForm.password = this.value" required>
    
    <button onclick="checkLogIn()"> Log In </button>
    </form>
    <p id="errorMessage" class="error"></p>
    <p>Har du ikke konto? <button onclick="navigate('registerView')" class="link-button">Registrer deg her!</button></p>
    </div>
    `;
}
function checkLogIn(){
    //sjekke om det som er skrivi i login finnes i en bruker som finnes i data
    console.log("login stuff kjører");
    for(let i = 0; i < model.data.users.length; i++){
        console.log(" getting loopy..")
        if(model.inputs.loginForm.username == model.data.users[i].username
            && model.inputs.loginForm.password == model.data.users[i].password
        ){
            model.app.isLoggedIn = true; // Update the logged-in state
            model.app.currentPage = 'frontPage'; // Set the current page to the dashboard
            loggedInNavBarView();
            updateView();
        }
        else {
            //evt 404 eller feil passord / brukernavn view her
        }
    }
}
function handleLogIn(event) {
    event.preventDefault();
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