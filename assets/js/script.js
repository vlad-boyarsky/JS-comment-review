const reviewStarsList = document.querySelectorAll('.review__star');
const reviewStars = Array().slice.call(reviewStarsList);

reviewStars.forEach(star =>
    star.addEventListener('click', () => {
            const {starValue} = star.dataset;
            star.parentNode.dataset.currentStars = starValue;
            alert(starValue);
        })
);