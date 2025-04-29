function changePassword(){
    let loggedInUser = model.data.users.find((user) => user.isLoggedIn == true);
    
    return /*HTML*/`

    <head>
        <link rel="stylesheet" href="css/changePasswordStyle.css">
    </head>

<div class="change-password-container">
    <div class="change-password-box">
        <h1>Bytt passord</h1>
        <td>Gammelt passord: <input type="password" id="oldPassword" name="password" value="${loggedInUser.password}">
        <br> <br>
        <td>Nytt passord: <input type="password" id="newPassword" placeholder="Nytt passord" value="">
        <br> <br>
        <td>Gjenta nytt passord: <input type="password" id="repeatNewPassword" placeholder="Gjenta nytt passord" value="">
        <br> <br>
        <button onclick = "savePassword()">Lagre passord</button>
    </div>
</div>
    `;
    
 }

 function changePage(newPage){
    model.app.currentPage = newPage;
    updateView();
}

function savePassword(){
    let i = 0; i < model.data.users.length; i++   
     model.data.users[i].password = document.getElementById("newPassword").value
    navigate('userView');
}