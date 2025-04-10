function registerView() {
    return /*HTML*/`
    <div id="registerContainer">
        <h2>Registrer deg</h2>
        <form id="registerForm" onsubmit="handleRegister(event)">
            <label for="name">Fornavn:</label>
            <input type="text" id="name" name="name" oninput="model.inputs.registerForm.name = this.value">
            
            <label for="lastName">Etternavn:</label>
            <input type="text" id="lastName" name="lastName" oninput="model.inputs.registerForm.lastName = this.value">
            
            <label for="email">Epost:</label>
            <input type="email" id="email" name="email" oninput="model.inputs.registerForm.email = this.value">
            
            <label for="username">Brukernavn:</label>
            <input type="text" id="username" name="username" oninput="model.inputs.registerForm.username = this.value">
            
            <label for="password">Passord:</label>
            <input type="password" id="password" name="password" oninput="model.inputs.registerForm.password = this.value">
            
            <label for="repeatPassword">Gjenta passord:</label>
            <input type="password" id="repeatPassword" name="repeatPassword" oninput="model.inputs.registerForm.repeatPassword = this.value">
            
            <button onclick="checkRegistration()"> Registrer </button>
        </form>
        <p id="errorMessage" class="error"></p>
    </div>
    `;

}

function checkRegistration(){
    //sjekke om det eksisterer en bruker
    console.log("chec reg stuff kjører");
    for(let i = 0; i < model.data.users.length; i++){
        console.log(" getting loopy..")
        if( model.inputs.registerForm.username == model.data.users[i].username
            || model.inputs.registerForm.email == model.data.users[i].email || model.inputs.registerForm.username == model.data.users[i].username && model.inputs.registerForm.email == model.data.users[i].email
        ){
            alert('Bruker eksisterer allerede');
            navigate('registerView')
     
        }
        else if( model.inputs.registerForm.username != model.data.users[i].username
            || model.inputs.registerForm.email != model.data.users[i].email || model.inputs.registerForm.username != model.data.users[i].username && model.inputs.registerForm.email != model.data.users[i].email) {//denne ikke kjører?
            console.log("i check register else")
            registerUser();
            navigate('frontPage');
            model.data.users[i].isLoggedIn = true; // Update the logged-in state of this user
            loggedInNavBarView();
            updateView();

            break;
             //lagre registrert bruker i model (til browser refresher)
          
            //evt 404 eller feil passord / brukernavn view her
        }
    }
}


function handleRegister(event) {
    event.preventDefault()
}

// function validateRegistration(name, lastName, email, username, password, repeatPassword) {
//     if (!name || !lastName || !email || !username || !password || !repeatPassword) {
//         return 'Alle felt må fylles ut';
//     } if (password !== repeatPassword) {
//         return 'Passordene må være like';
//     }
//     const existingUser = model.data.users.find(user => user.username === username);
//     if (existingUser) {
//         return 'Brukernavnet er allerede i bruk';
//     }
//     return null; // Ingen feil
// }

// function displayError(message) {
//     const errorMessageElement = document.getElementById('errorMessage');
//     if (errorMessageElement) {
//     errorMessageElement.textContent = message;
// }
// }

// function register(name, lastName, email, username, password, repeatPassword, animal) {
//     if (!email.includes('@')) {
//         alert('Ugyldig epostadresse');
//         return;
//     }

//     if(password.length <8) {
//         alert('Passordet må være minst 8 tegn langt');
//         return;
//     }
    
//     if (password !== repeatPassword) {
//         alert('Passordene er ikke like');
//         return;
//     }
//     const existingUser = model.data.users.find(user => user.username === username);
//     if (existingUser) {
//         alert('Brukernavnet er allerede i bruk');
//         return;
//     }
//     // Opprett ny bruker
//     const newUser = {
//         username,
//         password,
//         email,
//         name,
//         lastName,
//         animalId: [],
//         userId: model.data.users.length,
//         isAdmin: false,
//         picture: '',
//         animals: animal ? [{ name: animal, animalId: 0 }] : [] // Legg til dyr hvis oppgitt
//     };
//     model.data.users.push(newUser);
//     alert('Bruker opprettet');
//     // Lagre bruker i localStorage
//     model.app.loggedInUserId = newUser.userId; // Sett innlogget bruker
//     // model.app.currentPage = 'createAnimalProfile'; // Gå til dyreregistrering
//     // updateView(); // Oppdater visningen
// }