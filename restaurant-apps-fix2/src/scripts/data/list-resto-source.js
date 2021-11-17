/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoints';

class ListRestoSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.LIST_RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default ListRestoSource;
