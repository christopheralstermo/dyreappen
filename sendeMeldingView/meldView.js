function updateView(){
    let app= document.getElementById("app");
    app.innerHTML=`
    <div class= "container">
        <h2> Forum </h2>
        <input type="text" placeholder= "Sender" value="${model.inputs.messages.sender}"oninput="updateInput"('sender', this.value)">
        <br>
        <input type="text" placeholder= "Mottaker" value="${model.inputs.messages.receiver}"oninput="updateInput"('receiver', this.value)">
        <br>
        <textarea placeholder= "Skrive Melding ..." oninput="updateInput"('massge', this.value)"> ${model.inputs.messages.message}</textarea>
        <br>
        <input type="date" value="${model.inputs.messages.date}" oninput="updateInput('date', this.value)">
        <br>
        <button onclick="sendMessage()"> Send Melding </button> 
    <div>
    <div class= "container">
    <h3> Sendte Melding </h3>
    ${sendQuickMessages()}
    </div>
    `;
}

function sendQuickMessages(){
 return model.data.messages.map(msg=>`
   <p> strong> Til: ${msg.receiver}</strong> - <em>${msg.date}<</em>:${msg.messge}</p>`
   ).join("<br>"); //slår sammen uten mellomrom
   // <em> signaliserer også semantisk at ordet eller setningen er viktig,
 }
 
 
 function sendQuickMessages(){
    const users= ["Roger", "Bella", "Arne", "Ruffen", "Oliver"];
    return users.map(user => `
        <button onclick=sendQuickMessage('${user}')"> Send Melding til ${user}</button>
        `).join("<br>");//slår sammen med linjeskift
}

