function navBarView() {
    navBarHtml = /*HTML*/`
        <div class="navLeft">
            <div class="logo" onclick="model.app.currentPage = 'frontPage'; updateView();">Playdate</div>
        </div>
        <div class="navRight">
            <div>${createNotificationWindow()}</div>
            <button class="navBtn" onclick="model.app.currentPage = 'messagesPage'">Meldinger</button>
            <button class="navBtn" onclick="navigate('logInView')">Logg inn</button>
        </div>
    `;
    return navBarHtml;
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
