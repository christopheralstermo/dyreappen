function userView() {
    let loggedInUser = model.data.users.find((user) => user.isLoggedIn == true);

    return /*HTML*/`
    <div>
        <h1>Hei, ${loggedInUser.username}</h1>
        <br>
        <div class="flex-container">
            <div>${userInfoRows()}</div>
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

function userInfoRows() {
    let infoRowsHtml = '';
    for (const [key, value] of Object.entries(model.inputs.info)) {
        if (key === 'animal' || key === 'location') {
            infoRowsHtml += /*HTML*/`
                <tr>
                    <td>${key}</td>
                    <td>
                        <select onchange="updateInfo('${key}', this.value)">
                            <option value="">Velg ${key === 'animal' ? 'dyr' : 'sted'}</option>
            `;
            const optionsList = key === 'animal' ? model.data.categories.animals : model.data.categories.counties;
            for (let option of optionsList) {
                infoRowsHtml += /*HTML*/`
                    <option value="${option}" ${value === option ? 'selected' : ''}>
                        ${option}
                    </option>
                `;
            }
            infoRowsHtml += /*HTML*/`
                        </select><br><br>
                    </td>
                </tr>
            `;
        } else {
            infoRowsHtml += /*HTML*/`
                <tr>
                    <td>${key}</td>
                    <td>
                        <input 
                            type="text" 
                            placeholder="Skriv her" 
                            value="${value || ''}"
                            oninput="updateInfo('${key}', this.value)"
                        /><br><br>
                    </td>
                </tr>
            `;
        }
    }
    infoRowsHtml += /*HTML*/`
        <tr>
            <td colspan="2">
                <button onclick="saveAnimal()">Registrer</button>
            </td>
        </tr>
    `;
    return infoRowsHtml;
}

function changePage(newPage) {
    model.app.currentPage = newPage;
    updateView();
}
