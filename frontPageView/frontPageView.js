function frontPageView() {
    return `
    <div id="frontPage">
        <div class="filter">
        ${animalHtml()}
        <img src="frontPageView/theMap.png">
        ${areaHtml()}
        </div>
        ${animalProfileHtml()}
    </div>
    `;
}


function animalProfileHtml() {
    let html = /*html*/`
    <div class="profiles">
    `; 
    let index = 0;

    for (let theAnimal of model.data.animals) {
        let dyrenavn = theAnimal.name;
        let art = theAnimal.animal;
        let bildet = theAnimal.picture;
        html += /*html*/`
        
        <div class="profile-card">
            <h3 id="ask">Be om å leke med ${dyrenavn}</h3>
            <div class="profile-image" style="width: 100px; height: 180px;"><img src="${bildet}"></div>
            <div class="profile-details">
                <p>${dyrenavn} - ${art}</p>
                <p>4</p>
                <p>oslo</p>
                <p>vil møte: hund, katt</p>
            </div>
            <button>vis profil</button>
            <div class="stars" data-rating="5">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
        </div>
            `;
        index++;
    }
    html += '</div>';


    return html;
}


function animalHtml() {
    let html = /*html*/`
        <h3>Dyr</h3>
    `;
    for(animals of model.data.categories.animals){
       html += `<label><input type="checkbox">${animals}</label>`
    }
    return html
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