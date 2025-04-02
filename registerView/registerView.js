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
    const {name, lastName, email, username, password, repeatPassword, animal} = model.inputs.register;
    register(name, lastName, email, username, password, repeatPassword, animal);
    updateView();
}

function register(name, lastName, email, username, password, repeatPassword, animal) {
    if (password !== repeatPassword) {
        alert('Passordene er ikke like');
        return;
    }
    const existingUser = model.data.users.find(user => user.username === username);
    if (existingUser) {
        alert('Brukernavnet er allerede i bruk');
        return;
    }
    const newId = model.data.users.length;
    const newUser = {
        username,
        password,
        email,
        name,
        lastName,
        animalId: [],
        userId: newId,
        isAdmin: false,
        picture: '',
        animals: animal ? [{ name: animal, animalId: 0 }] : [] // Legg til dyr hvis oppgitt
    };
    model.data.users.push(newUser);
    model.app.loggedInUserId = newId; // Sett innlogget bruker
    model.app.currentPage = 'createAnimalProfile'; // Gå til dyreregistrering
}