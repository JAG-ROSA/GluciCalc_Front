import Meal from "models/meal";
import API from "services/api";

export default class MealsManager {
  static getMealsForDay(date) {
    return API.get(`/days/${date}`).then((response) => response.data.map((meal) => new Meal(meal)));
  }

  static async showMeals() {
    const response = await API.get("/meals");
    return response.data.map((meal) => new Meal(meal));
  }

  static async createMeal(mealName) {
    const response = await API.post("/meals", { name: mealName });
    return new Meal(response.data);
  }

  static async addProductToMeal(amount, carbs, mealId, productId) {
    const response = await API.post("/quantities", {
      quantity:
        {
          quantity: amount, carbs_per_100g: carbs, meal_id: mealId, product_id: productId,
        },
    });
    return response.data;
  }

  static async getProductId(id, name) {
    const response = await API.get(`/food/${id}/${name}`);
    return response.data;
  }

  static async destroyMeal(id) {
    await API.delete(`/meals/${id}`);
  }
}
