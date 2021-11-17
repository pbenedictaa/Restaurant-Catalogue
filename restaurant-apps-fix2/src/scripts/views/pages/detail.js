/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import ListRestoSource from '../../data/list-resto-source';
import {
  createRestoDetailTemplate,
  createRestoMenuTemplate,
  createRestoReviewTemplate,
} from '../templates/template-creator';
import CategoryGenerator from '../../utils/category-generator';
import MenuGenerator from '../../utils/menu-generator';
import MenuDropdownInitiator from '../../utils/menu-dropdown-initiator';
import ReviewInitiator from '../../utils/review-initiator';
import LikeButtonInitiator from '../../utils/like-button';
import FavoriteRestoIdb from '../../data/favoriteresto-idb';

const Detail = {
  async render() {
    return `
      <div class="resto-card__header" tabindex="0">
        <h1 class="explore_label">Detail Restaurant</h1>
      </div>
      </div>
      <div class="resto-card__body" id="restoCardBody">
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await ListRestoSource.detailResto(url.id);
    const restoContainer = document.querySelector('#restoCardBody');
    restoContainer.innerHTML += createRestoDetailTemplate(restaurant)
            + createRestoMenuTemplate()
            + createRestoReviewTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestoIdb,
      resto: restaurant,
    });

    CategoryGenerator.init({
      container: document.querySelector('#categoryContainer'),
      categories: restaurant.categories,
    });

    MenuGenerator.init({
      container: document.querySelector('#menuContainer'),
      menus: restaurant.menus,
    });

    ReviewInitiator.init({
      container: document.querySelector('#reviewContainer'),
      reviews: restaurant.customerReviews,
      restaurant,
    });

    MenuDropdownInitiator.init({
      buttons: document.querySelectorAll('.menu-dropdown-btn'),
    });

    const skipContent = document.querySelector('.skip-content');
    skipContent.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById('restoDetail').focus();
    });
  },
};

export default Detail;
