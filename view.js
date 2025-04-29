function updateView() {
    console.log('Oppdaterer visningen...')
    document.getElementById('app').innerHTML = /*HTML*/`
        <div class="navBarContainer">${model.app.loggedInId ? loggedInNavBarView() : navBarView()}</div>
        <div class="mainContainer">${contentManager()}</div>
        <div class="footerContainer">${footerView()}</div>
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
        case 'meldingView':
            html = meldingView();
            break;   
        case 'userView':
            html = userView();
            break;   
        case 'footerView':
            html = footerView();
            break;   
    }
    return html;
}

