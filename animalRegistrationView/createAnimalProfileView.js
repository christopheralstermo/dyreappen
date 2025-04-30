function createAnimalProfileView() {
    return /*HTML*/`
    <div class="form-container">
        <!-- Venstre seksjon: Skjema -->
        <form onsubmit="saveAnimal(); return false;">
            <h1 class="form-title">Registrer dyr</h1>
            ${getInputRows()}
            <button type="submit" class="submit-btn">Registrer</button>
        </form>

        <!-- Høyre seksjon: Bildeopplasting -->
        <div class="upload-container">
            <label for="profile-picture">Last opp bilde:</label>
            <input type="file" id="profile-picture" name="profile-picture" accept="image/*" onchange="handleImageUpload(event)">
            <div class="preview">
                <p>Ingen bilde valgt</p>
            </div>
        </div>
    </div>
    `;
}

function getInputRows() {
    let inputRowsHtml = '';
    for (const [key, value] of Object.entries(model.inputs.info)) {
        if (key === 'animal' || key === 'location') {
            inputRowsHtml += /*HTML*/`
                <tr>
                    <td>${key}</td>
                    <td>
                        <select onchange="updateInfo('${key}', this.value)">
                            <option value="">Velg ${key === 'animal' ? 'dyr' : 'sted'}</option>
            `;
            const optionsList = key === 'animal' ? model.data.categories.animals : model.data.categories.counties;
            for (let option of optionsList) {
                inputRowsHtml += /*HTML*/`
                    <option value="${option}" ${value === option ? 'selected' : ''}>
                        ${option}
                    </option>
                `;
            }
            inputRowsHtml += /*HTML*/`
                        </select><br><br>
                    </td>
                </tr>
            `;
        } else {
            inputRowsHtml += /*HTML*/`
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
    return inputRowsHtml;
}

function updateInfo(key, newValue) {
    model.inputs.info[key] = newValue;
    console.log("Oppdatert modell:", model.inputs.info);
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    const previewContainer = document.querySelector('.preview');
    previewContainer.innerHTML = ''; // Tøm tidligere innhold

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Uploaded Image';
            img.style.maxWidth = '200px';
            img.style.borderRadius = '5px';
            previewContainer.appendChild(img);

            model.inputs.info.picture = e.target.result;
            console.log("Bilde lastet opp:", model.inputs.info.picture);
        };
        reader.readAsDataURL(file);
    } else {
        previewContainer.innerHTML = '<p>No image selected</p>';
        model.inputs.info.picture = null;
    }
}


function saveAnimal() {
    const userIndex = model.app.loggedInUserId;
    if (userIndex === undefined || userIndex === null) {
        console.error("Ingen innlogget bruker funnet!");
        return;
    }

    const userAnimals = model.data.users[userIndex].animals || [];
    const animalIndex = userAnimals.length;

    const newAnimal = {
        ...model.inputs.info,
        animalId: animalIndex // Sørg for at animalId settes korrekt
    };

    if (!model.data.users[userIndex].animals) {
        model.data.users[userIndex].animals = [];
    }
    model.data.users[userIndex].animals.push(newAnimal);

    // Sett animalProfile.id til den nye animalId
    model.inputs.animalProfile.id = animalIndex;

    // Nullstill inputs.info etter lagring
    model.inputs.info = {
        animal: null,
        rase: null,
        name: null,
        sex: null,
        age: null,
        favouriteActivity: null,
        kg: null,
        location: null,
        readyForPlay: null,
        healthInformation: null,
        availability: null,
        picture: null,
        rating: null
    };

    console.log("Dyr registrert:", model.data.users[userIndex].animals);
    model.app.currentPage = 'animalProfile'; // Gå til animalProfileView
    updateView();
}


function changePage(newPage) {
    model.app.currentPage = newPage;
    updateView();
}