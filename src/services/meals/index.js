import Meal from "models/meal";
import API from "services/api";

export default class MealsManager {
  static getMealsForDay(date) {
    return API.get(`/days/${date}`).then((response) => response.data.map((meal) => new Meal(meal)));
  }

  static async destroyMeal(id) {
    try {
      await API.delete(`/meals/${id}`);
    } catch (error) {
      console.log(error);
    }
  }
}
