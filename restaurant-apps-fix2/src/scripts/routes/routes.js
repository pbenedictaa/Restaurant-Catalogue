/* eslint-disable linebreak-style */
import ListResto from '../views/pages/list-resto';
import Detail from '../views/pages/detail';
import Favorites from '../views/pages/favorites';

const routes = {
  '/': ListResto, // Default Pages
  '/list-resto': ListResto,
  '/detail/:id': Detail,
  '/favorites': Favorites,
};

export default routes;
