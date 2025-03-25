function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <div class="navBarContainer">${navBarView()}</div>
        <div class="mainContainer">${contentManager()}</div>
        <div class="footer"></div>
    `;
    }

function contentManager() {
    let html = '';
    switch(model.app.currentPage) {
        case 'frontPage':
            html = frontPageView();
            break;
        case 'logInView':
            html = logInView();
            break;
        case 'registerView':
            html = registerView();
            break;
    }
    return html;
}

function frontPageView() {
    return 'test';
}

function logInView() {
    return /*HTML*/`
    <h2>Logg inn</h2>
    <form onsubmit="handleLogin(event)">
    <label for="username">Brukernavn:</label>
    <input type="text" id="username" name="username" oninput="model.inputs.loginForm.username = this.value">;
    <br>
    <label for="password">Passord:</label>
    <input type="password" id="password" name="password" oninput="model.inputs.loginForm.password = this.value">;>
    <br>
    <button type="submit">Logg inn</button>
    </form>
    `;
}

function handleLogin(event) {
    event.preventDefault();
    const {username, password} = model.inputs.loginForm;
    login(username, password);
    updateView();
}

function registerView() {
    return /*HTML*/`
    <h2>Registrer deg</h2>
    <form onsubmit="handleRegister(event)">
    <label for="name">Fornavn:</label>
    <input type="text" id="name" name="name" oninput="model.inputs.register.name = this.value">;
    <br>
    <label for="lastName">Etternavn:</label>
    <input type="text" id="lastName" name="lastName" oninput="model.inputs.register.lastName = this.value">;
    <br>
    <label for="email">Epost:</label>
    <input type="email" id="email" name="email" oninput="model.inputs.register.email = this.value">;
    <br>
    <label for="username">Brukernavn:</label>
    <input type="text" id="username" name="username" oninput="model.inputs.register.username = this.value">;
    <br>
    <label for="password">Passord:</label>
    <input type="password" id="password" name="password" oninput="model.inputs.register.password = this.value">;
    <br>
    <label for="repeatPassword">Gjenta passord:</label>
    <input type="password" id="repeatPassword" name="repeatPassword" oninput="model.inputs.register.repeatPassword = this.value">;
    <br>
    <button type="submit">Registrer deg</button>
    </form>
    `;
}

function handleRegister(event) {
    event.preventDefault();
    const {name, lastName, email, username, password, repeatPassword} = model.inputs.register;
    register(name, lastName, email, username, password, repeatPassword);
    updateView();
}