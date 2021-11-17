/* eslint-disable linebreak-style */
import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
      <div class="resto-card__header" tabindex="0">
        <h1 class="explore_label">Favorite Restaurant</h1>
      </div>
      <div class="resto-card__body" id="restoCardBody">
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestos();
    const restoContainer = document.querySelector('#restoCardBody');
    restaurants.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Favorites;
