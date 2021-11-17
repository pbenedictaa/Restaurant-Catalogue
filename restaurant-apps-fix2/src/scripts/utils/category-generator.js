/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const CategoryGenerator = {
  init({ container, categories }) {
    this._generateCategories(container, categories);
  },

  _generateCategories(container, categories) {
    categories.forEach((category) => {
      container.innerHTML += `
      <div class="category-item">
        <em>${category.name}</em>
      </div>`;
    });
  },
};

export default CategoryGenerator;
