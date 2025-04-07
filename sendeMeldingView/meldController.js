function updateInput(field, value){
    model.inputs.messages[field] = value;
}
function sendMessage(){
    if (!model.inputs.messages.receiver || !model.inputs.messages.message)
        { 
            alert("Vennligst fyll ut alle feltene!");
            return;
    }
    model.data.messages.push({
        massageId: model.data.messages.length,
        sender: "varinlinnea",
        reveiver: model.inputs.messages.receiver,
        messge: model.inputs.messages.message,
        date: model.inputs.messages.date,
    })

// Nullstill inputfeltene
model.inputs.messages.sender="";
model.inputs.messages.receiver="";
model.inputs.messages.message="";
model.inputs.messages.date=new Date().toISOString().split('T')[0];
updateView();
}
function sendMessage(user){
    model.data.messages.push({
        messageId:model.Date.messages.length,
        SENDER: "Varinlinnea",
        receiver: user,
        message: "hei, dette er en automatisk melding!",
        date: new Date().toISOString().split('T')[0],

    });
    updateView();
}