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
