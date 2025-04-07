function ratingView(){
   return /*HTML*/`
    <div class="card">
        <h2> Legg igjen Tilbakemelding</h2>
        <div class="stars">
         ${[1, 2, 3, 4, 5].map(star => 
            `<span class="star ${model.inputs.ratingForm.rating >= star ? 'active' : ''}" 
                onclick="setRating(${star})">★</span>`).join('')}
        </div>
        <textarea id="commentInput" placeholder="skriv en kommentar..."></textarea>
        <button class="submitButton" onclick="submitFeedback()"> Send Tilbacke Melding</button>
    </div>

    <div class="card">
    <img src="${model.data.users[0].picture}" alt= "Profilbilde">
    <h3> ${model.data.users[0].username}</h3>
    <button class="blockButton" onclick="blockUser()"> Block Bruker</button>
    </div>
    `;
}



