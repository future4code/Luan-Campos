import { Place } from "./Place";

export class Commerce extends Place {
  constructor(protected floorsQuantity: number, cep: string) {
    super(cep);
  }

  getFloors(): void {
    return console.log(`Floors: ${this.floorsQuantity}`);
  }
}
