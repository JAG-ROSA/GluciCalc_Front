import moment from "moment";

class Meal {
  constructor(meal) {
    if (meal) {
      this.date = meal.date;
      this.name = meal.name;
      this.quantities = meal.quantities ?? [];
      this.id = meal.id;
    } else {
      this.date = moment();
      this.name = "";
      this.quantities = [];
      this.id = null;
    }
  }

  get totalCarbs() {
    return this.quantities.reduce(
      (acc, quantity) => acc + (quantity.carbs_per_100g * quantity.quantity) / 100,
      0,
    );
  }
}

export default Meal;
