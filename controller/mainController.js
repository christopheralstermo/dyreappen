    function navigate(thePage) {
        console.log('Navigerer til siden:', thePage) //Logging for sidenavigeringsfunksjon
        model.app.currentPage = thePage;
        updateView();
    }
  