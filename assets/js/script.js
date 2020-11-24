const reviewStarArray = [];

const reviewStarsList = document.querySelectorAll('.review__star');
const reviewStars = reviewStarArray.slice.call(reviewStarsList);

reviewStars.forEach(star =>
    star.addEventListener('click', () =>
        star.parentNode.dataset.currentStars = star.dataset.starValue
    )
);