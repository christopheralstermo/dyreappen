function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <div class="navBarContainer">${navBarView()}</div>
        <div class="mainContainer">${contentManager()}</div>
        <div class="footer"></div>
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
    }
    return html;
}

function navBarView() {
    return 'heiii'
}

function frontPageView() {
    return 'testing'
}