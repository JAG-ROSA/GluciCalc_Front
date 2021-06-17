import Meal from "models/meal";
import API from "services/api";

export default class MealsManager {
  static getMealsForDay(date) {
    return API.get(`/days/${date}`).then((response) => response.data.map((meal) => new Meal(meal)));
  }

  static async createMeal(mealName) {
    try {
      const response = await API.post("/meals", { name: mealName });
      return response.data;
    } catch (error) {
      return error.message;
    }
  }

  static async getMeals() {
    try {
      const response = await API.get("/meals");
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
}
