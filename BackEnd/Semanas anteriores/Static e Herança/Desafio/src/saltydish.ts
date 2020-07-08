import { Dish } from "./dish";

export class SaltyDish extends Dish {
  constructor(
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number
  ) {
    super(price, cost, ingredients, timeToCook);
  }

  public cook(): void {
    console.log("Starting Salty Dish")
  }
}

const feijoada = new SaltyDish(100, 20, ["feijão", "farofa", "couve"], 100);
console.log(feijoada.getProfit());
