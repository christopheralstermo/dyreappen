function registerView() {
    return /*HTML*/`
    <div id="registerContainer">
        <h2>Registrer deg</h2>
        <form id="registerForm" onsubmit="handleRegister(event)">
            <label for="name">Fornavn:</label>
            <input type="text" id="name" name="name" oninput="model.inputs.register.name = this.value">
            
            <label for="lastName">Etternavn:</label>
            <input type="text" id="lastName" name="lastName" oninput="model.inputs.register.lastName = this.value">
            
            <label for="email">Epost:</label>
            <input type="email" id="email" name="email" oninput="model.inputs.register.email = this.value">
            
            <label for="username">Brukernavn:</label>
            <input type="text" id="username" name="username" oninput="model.inputs.register.username = this.value">
            
            <label for="password">Passord:</label>
            <input type="password" id="password" name="password" oninput="model.inputs.register.password = this.value">
            
            <label for="repeatPassword">Gjenta passord:</label>
            <input type="password" id="repeatPassword" name="repeatPassword" oninput="model.inputs.register.repeatPassword = this.value">
            
            <button type="submit">Registrer deg</button>
        </form>
        <p id="errorMessage" class="error"></p>
    </div>
    `;
}

function handleRegister(event) {
    event.preventDefault();
    console.log('handleRegister called');
    const {name, lastName, email, username, password, repeatPassword, animal} = model.inputs.register;
    
    // Validering
    const error = validateRegistration(name, lastName, email, username, password, repeatPassword);
    if (error) {
        displayError(error);
        return;
    }

    // Registrer bruker
    register(name, lastName, email, username, password, repeatPassword, animal);
    updateView();
}

function validateRegistration(name, lastName, email, username, password, repeatPassword) {
    if (!name || !lastName || !email || !username || !password || !repeatPassword) {
        return 'Alle felt må fylles ut';
    } if (password !== repeatPassword) {
        return 'Passordene må være like';
    }
    const existingUser = model.data.users.find(user => user.username === username);
    if (existingUser) {
        return 'Brukernavnet er allerede i bruk';
    }
    return null; // Ingen feil
}

function displayError(message) {
    const errorMessageElement = document.getElementById('errorMessage');
    if (errorMessageElement) {
    errorMessageElement.textContent = message;
}
}

function register(name, lastName, email, username, password, repeatPassword, animal) {
    if (!email.includes('@')) {
        alert('Ugyldig epostadresse');
        return;
    }

    if(password.length <8) {
        alert('Passordet må være minst 8 tegn langt');
        return;
    }
    
    if (password !== repeatPassword) {
        alert('Passordene er ikke like');
        return;
    }
    const existingUser = model.data.users.find(user => user.username === username);
    if (existingUser) {
        alert('Brukernavnet er allerede i bruk');
        return;
    }
    // Opprett ny bruker
    const newUser = {
        username,
        password,
        email,
        name,
        lastName,
        animalId: [],
        userId: model.data.users.length,
        isAdmin: false,
        picture: '',
        animals: animal ? [{ name: animal, animalId: 0 }] : [] // Legg til dyr hvis oppgitt
    };
    model.data.users.push(newUser);
    alert('Bruker opprettet');
    // Lagre bruker i localStorage
    model.app.loggedInUserId = newUser.userId; // Sett innlogget bruker
    model.app.currentPage = 'createAnimalProfile'; // Gå til dyreregistrering
    updateView(); // Oppdater visningen
}