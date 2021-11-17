/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  hero: document.querySelector('#hero'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => app.renderPage());

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
