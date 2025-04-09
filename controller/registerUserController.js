function registerUser(){
    console.log("register user kjører...", model.inputs.registerForm)
    model.data.users.push(model.inputs.registerForm);
    console.log(model.data.users);
    //logg inn med ny bruker
    logInView();

}