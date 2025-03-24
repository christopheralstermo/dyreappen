function updateView() {
    let currentView = '';

    switch(model.app.currentPage) {
        case 'frontPage':
            currentView = testView();
            break;
        case 'logInView':
            currentView = logInView();
            break;
    }
}

function testView(){
    navBarView()
    document.getElementById('app').innerHTML =  `hello`;
}


function navBarView() {
    navBarHtml = /*HTML*/`
    <div></div>
    `;

}