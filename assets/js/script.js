const reviewStarsList = document.querySelectorAll('.review__star');
const reviewStars = Array().slice.call(reviewStarsList);

reviewStars.forEach(star =>
    star.addEventListener('click', () => {
        const {starValue} = star.dataset;
        let countStars = [];
        let countStarsInfo;

        star.parentNode.dataset.currentStars = starValue;

        for (let i = 0; i < starValue; i++) {
            countStars.push('★');
        }

        countStarsInfo = `Success stars count: ${starValue} (${countStars}) `;

        alert(countStarsInfo);
    })
);