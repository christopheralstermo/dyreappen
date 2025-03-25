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
    }
    return html;
}

function frontPageView() {
    return 'test';
}

function logInView() {
    return /*HTML*/`
    <h2>Logg in</h2>
    <form onsubmit="handleLogin(event)">
    <label for="username">Brukernavn</label>
    <input type="text" id="username" name="username">
    <br>
    <label for="password">Passord</label>
    <input type="password" id="password" name="password">
    <br>
    <button type="submit">Logg in</button>
    </form>
    `;
}

function handleLogin(event) {
    event.preventDefault();
    const {username, password} = model.inputs.loginForm;
    login(username, password);
    updateView();
}