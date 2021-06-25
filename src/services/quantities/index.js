import API from "services/api";

export default class QuantitiesManager {
  static async updateProductQuantityInMeal(id, quantity) {
    const response = await API.put(`/quantities/${id}`, { quantity });
    return response.data;
  }

  static async deleteProductQuantityInMeal(id) {
    await API.delete(`/quantities/${id}`);
  }
}
