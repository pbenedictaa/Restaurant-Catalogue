/* eslint-disable no-underscore-dangle */
const MenuDropdownInitiator = {
  init({ buttons }) {
    buttons.forEach((button) => {
      const idSelector = `#menu-${button.innerText.toLowerCase()}-dropdown`;
      const drawer = document.querySelector(idSelector);
      button.addEventListener('click', (event) => {
        this._toggleDrawer(event, drawer);
      });
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },
};

export default MenuDropdownInitiator;
