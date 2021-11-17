/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import CONFIG from '../globals/config';
import API_ENDPOINT from '../globals/api-endpoints';

const ReviewInitiator = {
  init({
    container,
    reviews,
    restaurant,
  }) {
    this._generateReview(container, reviews);

    const button = document.querySelector('.review-form input[type="submit"]');
    const name = document.querySelector('.review-form input[name="name"]');
    const review = document.querySelector('.review-form textarea[name="review"]');

    button.addEventListener('click', (event) => {
      const newReview = {
        id: restaurant.id,
        name: name.value,
        review: review.value,
      };

      this._postReview(
        newReview,
        event,
      );

      this._generateReview(container, reviews);
    });
  },

  _generateReview(container, reviews) {
    container.innerHTML = '';
    reviews.forEach((review) => {
      container.innerHTML += `
        <div class="review-item">
          <div class="review-item__name">
            ${review.name}
          </div>
          <div class="review-item__date">
            ${review.date}
            </div>
          <div class="review-item__text">
            ${review.review}
            </div>
        </div>
      `;
    });

    container.innerHTML += `
      <div class="review-form-container">
        <form class="review-form" onsubmit="return false">
          <input class="input" type="text" name="name" value="" placeholder="your name" />
          <textarea name="review" placeholder="leave your review here"></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    `;
  },

  async _postReview(
    newReview,
    event,
  ) {
    event.stopPropagation();

    try {
      await fetch(API_ENDPOINT.REVIEW, {
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': CONFIG.API_KEY,
        },
        method: 'POST',
        body: JSON.stringify(newReview),
      });
    } catch (e) {
      console.log(e);
    }
  },
};

export default ReviewInitiator;
