function registerUser(){
    console.log("register user kjører...", model.inputs.registerForm)
    model.inputs.registerForm.userId = model.data.users.length + 1; //Lager id til ny bruker
    model.app.loggedInId = model.inputs.registerForm.userId; //Lagre id til innlogget bruker
    model.data.users.push(model.inputs.registerForm);
    console.log(model.data.users);
    
    //logg inn med ny bruker

}