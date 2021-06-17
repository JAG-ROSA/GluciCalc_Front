import Meal from "models/meal";
import API from "services/api";

export default class MealsManager {
  static getMealsForDay(date) {
    return API.get(`/days/${date}`).then((response) => response.data.map((meal) => new Meal(meal)));
  }
}
