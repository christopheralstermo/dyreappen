function logIn(username, password) {
    const user = model.data.users.find(user => user.username === username);
    if (user && user.password === password) {
        model.app.isLoggedIn = true;
        model.app.currentPage = 'frontPage';
        updateView();
    } else {
        alert('Feil brukernavn eller passord');
    }
    console.log('Brukernavn:', username);
    console.log('Passord:', password);

    if (!username.trim() || !password.trim()) {
        displayError('Vennligst fyll ut alle felt');
        return;
    }
    
    const isAuthenticated = mockAuthenticate(username, password);
    console.log('Er autentisert:', isAuthenticated);
    
    if (isAuthenticated) {
        model.app.isLoggedIn = true;
        model.app.currentPage = 'frontPage';
        updateView();
    } else {
        displayError('Feil brukernavn eller passord');
    }
}

function displayError(message) {
    const errorMessageElement = document.getElementById('errorMessage');
    if (errorMessageElement) {
        errorMessageElement.textContent = message;
    }
}

function mockAuthenticate(username, password) {
    const validUsers = [
        { username: 'testuser', password: 'password123' },
        { username: 'admin', password: 'admin123' }
    ];

    console.log('Gyldige brukere:', validUsers)
    console.log('Inndata - Brukernavn:', username.trim(), 'Passord:', password.trim());

    //Sjekk om brukernavn og passord matcher n gyldig bruker
    const result = validUsers.some(user => 
        user.username === username.trim() && user.password === password.trim()
    );

    console.log('Autentiseringsresultat:', result)
    return result; // Returner resultatet av autentiseringen
}