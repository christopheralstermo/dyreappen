function logIn(username, password) {
    if (!username.trim() || !password.trim()) {
        alert('Vennligst fyll ut alle felt');
        return;
    }

    const isAuthenticated = mockAuthenticate(username, password);

    if (isAuthenticated) {
        alert('Innlogging vellykket!');
        model.app.isLoggedIn = true;
        model.app.currentPage = 'frontPage';
        updateView();
    } else {
        alert('Feil brukernavn eller passord');
    }
}
function mockAuthenticate(username, password) {
    const validUsers = [
        { username: 'testuser', password: 'password123' },
        { username: 'admin', password: 'admin123' }
    ];
    return validUsers.some(user => user.username === username && user.password === password);
}