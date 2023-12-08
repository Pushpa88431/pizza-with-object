const extraToppingPrice = 50;
const numberOfFreeToppings = 4;

class Pizza {
  name;
  toppings = [];
  basePrice = 0; // in cents
  size = "S";

  constructor(name, toppings, basePrice) {
    this.name = name;
    this.toppings = toppings;
    this.basePrice = basePrice;
  }

  getPrice() {
    let extraToppings = this.toppings.length - numberOfFreeToppings;
    if (extraToppings < 0) {
      extraToppings = 0;
    }

    return this.basePrice + extraToppings * extraToppingPrice;
  }
}

/
class PizzaOrder {
  customerName = "";
  deliveryType = "EAT_IN"; // other values TAKE_OUT, DELIVERY
  pizzas = [];

  addPizza(pizza) {
    this.pizzas.push(pizza);
  }

  getPrice() {
    let totalPrice = 0;
   
    return totalPrice;
  }
}
