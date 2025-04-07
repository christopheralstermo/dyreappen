function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <div class="navBarContainer">${navBarView()}</div>
        <div class="mainContainer">${contentManager()}</div>
        <div class="footer">${model.app.currentPage === 'frontPage' ? buttonHTML() : ''}</div>
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
        case 'ratingView':
            html = ratingView();
            break;   
        case 'sendeMeldingView':
            html = meldingView();
            break;   
    }
    return html;
}

