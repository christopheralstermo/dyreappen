    function navigateToLogin() {
        model.app.currentPage = 'loginView';
        updateView();
    }
    function navigateToRegister() {
        model.app.currentPage = 'registerView';
        updateView();
    }

    function navigateToCreateAnimalProfile(id) {
    model.app.currentPage = 'createAnimalProfile';
    updateView();
    }