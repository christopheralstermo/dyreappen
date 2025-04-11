   function navBarView() { 
   let navBarHtml = /*HTML*/`
        <div class="navLeft">
            <div class="logo" onclick="model.app.currentPage = 'frontPage'; updateView();">Playdate</div>
        </div>
        <div class="navRight">
            <div>${createNotificationWindow()}</div>
            <button class="navBtn" onclick="model.app.currentPage = 'meldingView'; updateView();">Meldinger</button>
            <button class="navBtn" onclick="model.app.currentPage = 'logInView'; updateView();">Logg inn</button>
        </div>
        
    `;
    return navBarHtml;
} 

function loggedInNavBarView() {
    //gå igjennom useres og se hvem som har login = true
   let loggedInUser = model.data.users.find((user) => user.isLoggedIn == true);
//    let loggedInUser = getUser(); 

    let navBarHtml = /*HTML*/`
        <div class="navLeft">
            <div class="logo" onclick="model.app.currentPage = 'frontPage'; updateView();">Playdate</div>
        </div>
        <div class="navRight">
            <div>${createNotificationWindow()}</div>
            <button class="navBtn" onclick="model.app.currentPage = 'meldingView'; updateView();">Meldinger</button>
            <button class="navBtn" onclick="model.app.currentPage = 'userView'; updateView();">Hei, ${loggedInUser.username}</button>
        </div>
    `;
    return navBarHtml;
}

// function getUser() {
// let user = ""   
// for (let i=0; i < model.data.users.length; i++)
// {
//     if (model.data.users[i].isLoggedIn == true){
//         user = model.data.users[i];
//         break;
//     }
// } 
// return user;

// }

function footerView() {
    const footerHtml = /*HTML*/`
        <div class="footerContainer">
            <div class="footerLeft">
                <span>&copy; 2025 Playdate</span>
            </div>
            <div class="footerRight">
                <button class="footerBtn" onclick="model.app.currentPage = 'aboutPage'; updateView();">Om oss</button>
                <button class="footerBtn" onclick="model.app.currentPage = 'contactPage'; updateView();">Kontakt</button>
                <button class="footerBtn" onclick="model.app.currentPage = 'privacyPolicy'; updateView();">Personvern</button>
            </div>
        </div>
    `;
    return footerHtml;
}
function createNotificationWindow() {
    return /*HTML*/`
    <button class="navBtn" onclick="showPopup()">Varslinger
    </button>
    ${popUp()}
    `;
}

function popUp() {
    return /*HTML*/`
    <div class="notificationFrame" id="notificationPopup">
        <div class="exitNotification" onclick="hidePopup()">X</div>
        <div class="messages">
            <div class="message">Ny vennskapsforespørsel fra Anna</div>
            <div class="message">Du har en ny melding fra Erik</div>
            <div class="message">Nytt innlegg i gruppen "Tech Norge"</div>
            <div class="message">Påminnelse: Møte kl. 14:00</div>
        </div>
    </div>
    `;
}

function showPopup() {
    document.getElementById('notificationPopup').style.display = 'block';
}

function hidePopup() {
    document.getElementById('notificationPopup').style.display = 'none';
}

function buttonHTML() {
    return /*HTML*/`
        <button onclick="navigate('logInView')">Logg inn</button>
        <button onclick="navigate('registerView')">Registrer deg her</button>
    `;
}
