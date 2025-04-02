function animalProfileView() {
    const userIndex = model.app.loggedInUserId;
    if (userIndex === undefined || userIndex === null) {
        return /*HTML*/`<div><h1>Ingen bruker logget inn</h1></div>`;
    }

    const animalId = model.inputs.animalProfile.id;
    const animal = model.data.users[userIndex].animals.find(a => a.animalId === animalId);
    if (!animal) {
        console.error("Ingen dyr funnet med ID", animalId, "for bruker", userIndex);
        return /*HTML*/`<div><h1>Ingen dyr funnet med ID ${animalId}</h1></div>`;
    }

    let animalFieldsHtml = '';
    for (const [key, value] of Object.entries(animal)) {
        if (key !== 'animalId' && key !== 'picture') {
            animalFieldsHtml += /*HTML*/`
                <div class="animal-field">
                    <strong>${key}:</strong> <span>${value || '[Verdi]'}</span>
                </div>
            `;
        }
    }

    const picture = animal.picture
        ? `<img src="${animal.picture}" alt="Animal Picture" class="animal-picture" />`
        : `<img src="animalPics/animal pfp.png" alt="Animal Pfp" class="animal-pfp" />`;

    return /*HTML*/`
    <div>  
        <div class="flex-container">
            <div id="animalProfileView">
                <h1>Dyreprofil</h1>
                ${animalFieldsHtml}
                Eier: <button onclick="changePage('userView')">Vis profil</button>
            </div>
            <div class="animal-picture-container">
                ${picture}
            </div>
        </div>
    </div>
    `;
}

function changePage(newPage) {
    model.app.currentPage = newPage;
    updateView();
}

function showAnimalProfileView(animalId) {
    model.inputs.animalProfile.id = animalId;
    model.app.currentPage = 'animalProfile';
    updateView();
}