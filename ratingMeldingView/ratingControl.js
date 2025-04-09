   // oppdatere stars for å farge stjerenene 
   function setRating(stars){ 
    model.inputs.ratingForm.rating= stars;
    updateView();
    }
    
    function submitFeedback(){
        let comment= document.getElementById("commentInput").value;
        if(!model.inputs.ratingForm.rating) {
            alert("Velg en rating for du sender!");
            return;
    
        }
        model.inputs.ratingForm.comment= comment;
    
        console.log("Tilbakemelding sendt:", model.inputs.ratingForm);
        alert(`Takk for tilbakemeldingen! ★ Rating:${model.inputs.ratingForm.rating}`)
    }
    function blockUser(){
        alert ("Brukeren er blokker!");
    }
    