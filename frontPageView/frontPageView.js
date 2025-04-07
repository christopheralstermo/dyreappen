function frontPageView() {
    return /*HTML*/`
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

    for (let counties of model.data.categories.counties) {
        html += /*HTML*/`
        <label>
            <input 
                type="checkbox"
                onchange="updateCountyFilter('${counties}', this.checked)"
                ${model.inputs.filters.selectedCounties.includes(counties) ? 'checked' : ''}
            >${counties}
        </label>
        `;
    }

    return html;
}


function updateCountyFilter(counties, isChecked){
    if (isChecked) {
        model.inputs.filters.selectedCounties.push(counties);
    }   else {
        model.inputs.filters.selectedCounties = 
            model.inputs.filters.selectedCounties.filter(item => item !== counties);
    }

    updateView();
}


function animalProfileHtml() {
    let html = /*html*/`<div class="profiles">`;
    let index = 0;

    let allAnimals = [];
    for (let user of model.data.users) {
        if (user.animals && Array.isArray(user.animals)) { 
            allAnimals = allAnimals.concat(user.animals);
        }
    }

    let filteredAnimals = allAnimals.filter(animal => {
        const matchesAnimal = model.inputs.filters.selectedAnimals.length === 0 || 
            model.inputs.filters.selectedAnimals.includes(animal.animal);

        const matchesCounty = model.inputs.filters.selectedCounties.length === 0 || 
            model.inputs.filters.selectedCounties.includes(animal.location);
        return matchesAnimal && matchesCounty;
    });

    for (let theAnimal of filteredAnimals) {

        let dyrenavn = theAnimal.name;
        let alder = theAnimal.age;
        let art = theAnimal.animal;
        let bildet = theAnimal.picture;
        let lokasjon = theAnimal.location;

        html += /*html*/`
        <div class="profile-card">
            <h3 id="ask">Be om å leke med ${dyrenavn}</h3>
            <div class="profile-image" style="height: 190px;"><img id="profilBildet" src="${bildet}"></div>
            <div class="profile-details">
                <p>${dyrenavn} - ${art}</p>
                <p>${alder}</p>
                <p>${lokasjon}</p>
                <p>vil møte: hund, katt</p>
            </div>
            <button id="profileBtn" onclick="navigate('animalProfile')">vis profil</button>
            <div class="stars" data-rating="5" onclick="console.log('link')">
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