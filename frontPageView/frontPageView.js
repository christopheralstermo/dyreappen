function frontPageView() {
    return `
    <div id="frontPage">
        <div class="filter">
            ${animalHtml()}
            <img id="gpsBildet" src="frontPageView/theMap.png">
            ${areaHtml()}
        </div>
        ${animalProfileHtml()}
    </div>
    `;
}

function animalHtml() {
    let html = /*html*/`<h3>Dyr</h3>`;
    for (let animal of model.data.categories.animals) {
        html += /*html*/`
        <label>
            <input 
                type="checkbox"
                onchange="updateFilter('${animal}', this.checked)"
                ${model.inputs.filters.selectedAnimals.includes(animal) ? 'checked' : ''}
            >${animal}</label>
        `;
    }
    return html;
}

function areaHtml() {
    let html = /*html*/`
        <h3>Område</h3>
    `;
    for(counties of model.data.categories.counties){
       html += `<label><input type="checkbox">${counties}</label>`
    }
    return html
}

function animalProfileHtml() {
    let html = /*html*/`<div class="profiles">`;
    let index = 0;

    let filteredAnimals = model.data.animals.filter(animal => {
        return model.inputs.filters.selectedAnimals.length === 0 || 
               model.inputs.filters.selectedAnimals.includes(animal.animal);
    });

    for (let theAnimal of filteredAnimals) {
        let dyrenavn = theAnimal.name;
        let art = theAnimal.animal;
        let bildet = theAnimal.picture;
        html += /*html*/`
        <div class="profile-card">
            <h3 id="ask">Be om å leke med ${dyrenavn}</h3>
            <div class="profile-image" style="height: 190px;"><img id="profilBildet" src="${bildet}"></div>
            <div class="profile-details">
                <p>${dyrenavn} - ${art}</p>
                <p>${theAnimal.age}</p>
                <p>${theAnimal.location}</p>
                <p>vil møte: hund, katt</p>
            </div>
            <button id="profileBtn">vis profil</button>
            <div class="stars" data-rating="5" onclick="updateRating(${index})">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
        </div>
        `;
        index++;
    }
    html += '</div>';
    return html;
}

function updateFilter(animal, isChecked) {
    if (isChecked) {
        model.inputs.filters.selectedAnimals.push(animal);
    } else {
        model.inputs.filters.selectedAnimals = 
            model.inputs.filters.selectedAnimals.filter(item => item !== animal);
    }
    updateView();
}

