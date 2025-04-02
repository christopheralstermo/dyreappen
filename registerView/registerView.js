function registerView() {
    return /*HTML*/`
    <div id="registerContainer">
    <h2>Registrer deg</h2>
    <form id="registerForm" onsubmit="handleRegister(event)">
    <label for="name">Fornavn:</label>
    <input type="text" id="name" name="name" oninput="model.inputs.register.name = this.value">
    <br>
    <label for="lastName">Etternavn:</label>
    <input type="text" id="lastName" name="lastName" oninput="model.inputs.register.lastName = this.value">
    <br>
    <label for="email">Epost:</label>
    <input type="email" id="email" name="email" oninput="model.inputs.register.email = this.value">
    <br>
    <label for="username">Brukernavn:</label>
    <input type="text" id="username" name="username" oninput="model.inputs.register.username = this.value">
    <br>
    <label for="password">Passord:</label>
    <input type="password" id="password" name="password" oninput="model.inputs.register.password = this.value">
    <br>
    <label for="repeatPassword">Gjenta passord:</label>
    <input type="password" id="repeatPassword" name="repeatPassword" oninput="model.inputs.register.repeatPassword = this.value">
    <br>
    <button type="submit">Registrer deg</button>
    </form>
    </div>
    `;
}

function handleRegister(event) {
    event.preventDefault();

    if (!model.inputs.register) {
        alert('Registrringsdata mangler');
        return;
    }

    const {name, lastName, email, username, password, repeatPassword} = model.inputs.register;
    
    if (!name.trim() || !lastName.trim() || !email.trim() || !username.trim() || !password.trim() || !repeatPassword.trim()) {
        alert('Vennligst fyll ut alle felt');
        return;
    } if (password !== repeatPassword) {
        alert('Passordene må være like');
        return;
    } if(isUsernameTaken(username)) {
        alert('Brukernavnet er allerede tatt');
        return;
    } 
    alert('Registrering vellykket!');
    model.app.currentPage = 'logInView';
    updateView();
}

function isUsernameTaken(username) {
    const existingUsers = [
        { username: 'testuser' },
        { username: 'admin' }
    ];
    return existingUsers.some(user => user.username === username);
}