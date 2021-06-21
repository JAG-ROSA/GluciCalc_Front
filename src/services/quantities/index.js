import API from "services/api";

export default class QuantitiesManager {
  static async updateProductQuantityInMeal(id, quantity) {
    try {
      const response = await API.put(`/quantities/${id}`, { quantity });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }

  static async deleteProductQuantityInMeal(id) {
    try {
      await API.delete(`/quantities/${id}`);
    } catch (error) {
      console.log(error);
    }
  }
}
