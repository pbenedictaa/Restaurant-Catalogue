/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const MenuGenerator = {
  init({ container, menus }) {
    this._generateMenu(container, menus);
  },

  _generateMenuItem(menus) {
    const result = menus.map((menu) => {
      const menuName = menu.name;
      return `<li>${menuName}</li>`;
    });

    return result.join().replace(/,/g, '');
  },

  _generateMenu(container, menus) {
    // eslint-disable-next-line array-callback-return
    Object.entries(menus).forEach((menu) => {
      container.innerHTML += `
        <div class="menu-category">
          <button class="menu-dropdown-btn">${menu[0].toUpperCase()}</button>
          <ul class="menu-dropdown" id="menu-${menu[0]}-dropdown">${this._generateMenuItem(menu[1])}</ul>
        </div>
      `;
    });
  },
};

export default MenuGenerator;
