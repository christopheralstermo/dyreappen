function updateView() {
    console.log('Oppdaterer visningen...')
    document.getElementById('app').innerHTML = /*HTML*/`
        <div class="navBarContainer">${navBarView()}</div>
        <div class="mainContainer">${contentManager()}</div>
    `;
    }

function contentManager() {
    let html = '';
    switch(model.app.currentPage) {
        case 'frontPage':
            html = frontPageView();
            break;
        case 'logInView':
            html = logInView();
            break;
        case 'registerView':
            html = registerView();
            break;
        case 'createAnimalProfile':
            html = createAnimalProfileView();
            break;
        case 'animalProfile':
            html = animalProfileView();
            break;    
    }
    return html;
}

