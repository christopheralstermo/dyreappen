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
        case 'logInView':
            html = logInView();
    }
    return html;
}

function frontPageView() {
    return 'test';
}

function logInView() {
    return '123';
}