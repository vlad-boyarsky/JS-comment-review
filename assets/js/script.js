const reviewStarsList = document.querySelectorAll('.review__star');
const reviewStars = Array().slice.call(reviewStarsList);

reviewStars.forEach(star =>
    star.addEventListener('click', () =>
        star.parentNode.dataset.currentStars = star.dataset.starValue
    )
);