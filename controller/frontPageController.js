function updateRating(cardIndex) {
    const cards = document.querySelectorAll('.profile-card');
    //console.log(cards)

    const specificCard = cards[cardIndex];
    const starGroup = specificCard.querySelector('.stars'); 
    const stars = starGroup.querySelectorAll('span');
    //console.log(stars)
    
    let currentRating = parseInt(starGroup.getAttribute('data-rating')); 
    //console.log(currentRating)

    updateStars(stars, currentRating);

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            currentRating = index + 1; 
            starGroup.setAttribute('data-rating', currentRating);
            updateStars(stars, currentRating); 

            model.data.animals[cardIndex].rating = currentRating;
            console.log(`Oppdatert rating for dyr ${cardIndex}: ${currentRating}`);
        });
    });
}

function updateStars(stars, rating) {
    stars.forEach((star, starIndex) => {
        if (starIndex < rating) {
            star.classList.add('filled'); 
        } else {
            star.classList.remove('filled');
        }
    });
}


