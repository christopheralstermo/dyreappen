function meldingView(){
    return /*HTML*/`
        <div id="messageSection" class="container">
            <h2>Forum</h2>
                ${theSenderHtml()}
            <br>
            
                ${theRecievers()}
            </select>
            <br>
            <textarea placeholder="Skriv Melding ..." onchange="model.inputs.messages.messageStorage = this.value; this.value = ''"></textarea>
            <button onclick="sendMessage()">Send Melding</button> 
        </div>
    `;
}


function theSenderHtml() {
    let html = '<div style="border: solid lightgray; width: 200px; text-align: center;">';
    let brukere = model.data.users; 
    for(let bruker of brukere){
        if(bruker.isLoggedIn){
            html += `${bruker.username}`;
        };
    };
    html += '</div>';
    return html;
}


function theRecievers() {
    let html = '<div><select><option disabled selected>Brukere</option>';
    for(let bruker of model.data.users){
        if(!bruker.isLoggedIn){
            html += `<option>${bruker.name}</option>`;
        };
    };
    html += '</select></div>';
    return html;
}



//--------------

function sendMessage(user){
    // noe greier
    console.log(model.inputs.messages.messageStorage)
}

// function updateInput(field, value){
//     model.inputs.messages[field] = value;
// }

// function sendMessage(){
//     if (!model.inputs.messages.receiver || !model.inputs.messages.message)
//         { 
//             alert("Vennligst fyll ut alle feltene!");
//             return;
//     }
//     model.data.messages.push({
//         massageId: model.data.messages.length,
//         sender: "varinlinnea",
//         reveiver: model.inputs.messages.receiver,
//         messge: model.inputs.messages.message,
//         date: model.inputs.messages.date,
//     })

// // Nullstill inputfeltene
// model.inputs.messages.sender="";
// model.inputs.messages.receiver="";
// model.inputs.messages.message="";
// model.inputs.messages.date=new Date().toISOString().split('T')[0];
// updateView();
// }

