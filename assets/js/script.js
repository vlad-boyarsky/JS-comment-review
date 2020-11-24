const reviewStarsList = document.querySelectorAll('.review__star');
const reviewStars = Array().slice.call(reviewStarsList);

reviewStars.forEach(star =>
    star.addEventListener('click', () => {
        const {starValue} = star.dataset;
        star.parentNode.dataset.currentStars = starValue;

        let countStars = [];

        for (let i = 0; i < starValue; i++) {
            countStars.push('★');
        }

        let countStarsInfo = `Success stars count: ${starValue} (${countStars}) `;

        alert(countStarsInfo);
    })
);