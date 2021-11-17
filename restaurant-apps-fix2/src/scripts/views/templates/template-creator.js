/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
    <style>
    @media screen and (min-width: 650px) {
    .post-item_thumbnail{
        height: 300px;
        object-fit: cover;
    }
    .post-item_content {
        padding: 16px 32px 32px 32px;
    }

    .post-item_title {
        font-size: 2.5em;
        font-weight: bolder;
        color: #fc5404;
    }

    .post-item_description {
        font-size: 14px;
        font-weight: lighter;
    }
    }
    </style>
        <img class="post-item_thumbnail"
            src="${CONFIG.BASE_IMAGE_URL_S + resto.pictureId}"
            alt="Gambar suasana restoran yang berada di ${resto.city}" 
        />
        <div class="post-item_content">
            <div class="grid">
                <div class="city">
                    <span>${resto.city}</span>
                    </div>
                    <p class="post-item_date">
                    Rating ${resto.rating}
                    </p>
                </div>
                <h1 class="post-item_title"><a href="#/detail/${resto.id}">${resto.name}</a></h1>
                <p class="post-item_description">${resto.description}</p>
            </div>
`;

const createRestoDetailTemplate = (resto) => `
  <div class="detail" id="restoDetail">
    <div class="detail-header">
      <img class="detail-image" src="${CONFIG.BASE_IMAGE_URL_M + resto.pictureId}" alt="Restaurant">
      </img>
    </div>
    <div class="detail-body">
      <div class="detail-title">
        ${resto.name}
      </div>
      <div class="grid">
        <div class="city">
          ${resto.city}
          <div class="detail-address">
          ${resto.address}
          </div>
        </div>
        <div class="detail-rating" id="ratingContainer">rating: ${resto.rating}</div>
      </div>
      <p class="detail-description">${resto.description}</p>
      <div class="detail-category" id="categoryContainer"></div>
    </div>
  </div>
`;

const createRestoMenuTemplate = () => `
  <div class="menu">
    <div class="menu-header">
      <div class="menu-title">
        <h4>Menu</h4>
      </div>
    </div>
    <div class="menu-body" id="menuContainer">
    </div>
  </div>
`;

const createRestoReviewTemplate = () => `
  <div class="review" id="reviewContainer">
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createRestoMenuTemplate,
  createRestoReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
