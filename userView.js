function userView() {
    let loggedInUser = model.data.users.find((user) => user.isLoggedIn == true);

    return /*HTML*/`
    <div>
        <h1>Min profil</h1>
        <br>
        <div class="flex-container">
            <div>${userInfoRows(loggedInUser)}</div>
            <div class="upload-container">
                <label for="profile-picture">Upload Picture:</label>
                <input type="file" id="profile-picture" name="profile-picture" accept="image/*" onchange="handleImageUpload(event)">
                <div class="preview">
                    <p>No image selected</p>
                </div>
            </div>
        </div>
    </div>
    `;
}

function userInfoRows(loggedInUser) {
    let infoRowsHtml = '';
        infoRowsHtml = /*HTML*/`
                <tr>
                    <td> Navn: <input value="${loggedInUser.name}"></td>
                    <br>
                    <td> Brukernavn: <input value="${loggedInUser.username}"></td>
                    <br>
                    <td>Passord: <input type="password" id="password" value="${loggedInUser.password}" readonly>
                    <br>
                    <td> Email: <input value="${loggedInUser.email}"></td>
                    <br>
                    <button onclick="goToChangePassword()">Endre passord</button>
                    <br> <br>
                    <button onclick="saveProfile()">Lagre</button>
                    <br> <br>
                    <td> <button onclick="goToCreateAnimalProfile()">Registrer dyreprofil</button></td>
                    <br>
                </td>
                 
                </tr>
            `;
    return infoRowsHtml;
}

function saveProfile() {
    
}

function goToCreateAnimalProfile() {
    model.app.currentPage = 'createAnimalProfile'; // Gå til animalProfileView
    updateView();
}

function goToChangePassword(){
    model.app.currentPage = 'changePassword'; // Gå til changePassword
    updateView();
}    


function changePage(newPage) {
    model.app.currentPage = newPage;
    updateView();
}