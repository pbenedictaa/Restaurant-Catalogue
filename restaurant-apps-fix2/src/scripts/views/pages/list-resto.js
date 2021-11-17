/* eslint-disable linebreak-style */
import ListRestoSource from '../../data/list-resto-source';
import loader from '../templates/loader';
import { createRestoItemTemplate } from '../templates/template-creator';

const ListResto = {
  async render() {
    return `
      <div class="resto-card__header" tabindex="0">
        <h1 class="explore_label">Explore Restaurant</h1>
      </div>
      <div id="loading">
        </div>
      <div class="resto-card__body" id="restoCardBody">
      </div>
    `;
  },

  async afterRender() {
    const ElementLoader = document.getElementById('loading');
    const bodyContent = document.querySelector('#restoCardBody');
    ElementLoader.innerHTML = loader.loaderTemplate();
    bodyContent.innerHTML = '';

    try {
      const restaurants = await ListRestoSource.restaurantList();
      restaurants.forEach((resto) => {
        bodyContent.innerHTML += createRestoItemTemplate(resto);
      });
      ElementLoader.style.display = 'none';
    } catch (err) {
      ElementLoader.innerHTML = loader.OfflineTemplate();
    }
  },
};

export default ListResto;
