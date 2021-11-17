/* eslint-disable linebreak-style */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestoIdb = {
  async getResto(id) {
    let result;
    if (id) {
      result = (await dbPromise).get(OBJECT_STORE_NAME, id);
    }
    return result;
  },

  async getAllRestos() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async putResto(resto) {
    let result;
    if (resto.id) {
      result = (await dbPromise).put(OBJECT_STORE_NAME, resto);
    }
    return result;
  },

  async deleteResto(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestoIdb;
