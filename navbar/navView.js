function navBarView() {
    navBarHtml = /*HTML*/`
        <div class="navLeft">
            <div class="logo">Playdate</div>
        </div>
        <div class="navRight">
            <div>${createNotificationWindow()}</div>
            <button class="navBtn" onclick="model.app.currentPage = 'messagesPage'">Meldinger</button>
            <button class="navBtn" onclick="model.app.currentPage = 'logInView'">Logg inn</button>
        </div>
    `;
    return navBarHtml;
}

function createNotificationWindow() { // ikke ferdig
    return /*HTML*/`
    <div class="notificationContainer">Varslinger
    </div>
    `;
}