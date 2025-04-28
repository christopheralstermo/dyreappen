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

    for (let counties of model.data.categories.counties.sort()) {
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
    let dyreLista = model.inputs.filters.selectedAnimals;
    let fylkeLista = model.inputs.filters.selectedCounties;
    let brukerSomErLoggetInn = model.app.loggedInId;

    for(bruker of model.data.users){
        if ((dyreLista.length === 0 || dyreLista.includes(bruker.animals[0].animal)) &&
            (fylkeLista.length === 0 || fylkeLista.includes(bruker.animals[0].location)) &&
            (brukerSomErLoggetInn === null)
        ){
            html += /*html*/`
            <div class="profile-card">
                <h3 id="ask">Be om å leke med </h3>
                <div class="profile-image" style="height: 190px;"><img id="profilBildet" src="${bruker.animals[0].picture}"></div>
                <div class="profile-details">
                    <p>Owner: ${bruker.username}</p>
                    <p>${bruker.animals[0].name} - ${bruker.animals[0].animal}</p>
                    <p>${bruker.animals[0].age}</p>
                    <p>${bruker.animals[0].location}</p>
                    <p>vil møte: hund, katt</p>
                </div>
                <button id="profileBtn" onclick="navigate('animalProfile')">vis profil</button>
            </div>
            `;
        } else if(
            (dyreLista.length === 0 || dyreLista.includes(bruker.animals[0].animal)) &&
            (fylkeLista.length === 0 || fylkeLista.includes(bruker.animals[0].location)) &&
            (brukerSomErLoggetInn !== null)
        ) {
            if(bruker.userId === brukerSomErLoggetInn){
                html += '';
            }else{
                html += /*html*/`
            <div class="profile-card">
                <h3 id="ask">Be om å leke med </h3>
                <div class="profile-image" style="height: 190px;"><img id="profilBildet" src="${bruker.animals[0].picture}"></div>
                <div class="profile-details">
                    <p>Owner: ${bruker.username}</p>
                    <p>${bruker.animals[0].name} - ${bruker.animals[0].animal}</p>
                    <p>${bruker.animals[0].age}</p>
                    <p>${bruker.animals[0].location}</p>
                    <p>vil møte: hund, katt</p>
                </div>
                <button id="profileBtn" onclick="navigate('animalProfile')">vis profil</button>
            </div>
            `;
            }
        };
    }

    html += '</div></div><br><br><br>';
    return html;
};


function updateFilter(animal, isChecked) {
    if (isChecked) {
        model.inputs.filters.selectedAnimals.push(animal);
    } else {
        model.inputs.filters.selectedAnimals = 
            model.inputs.filters.selectedAnimals.filter(item => item !== animal);
    }

    updateView();
}