import { Place } from "./Place";

export class Residence extends Place {
  constructor(protected residentsQuantity: number, cep: string) {
    super(cep);
  }

  getResidents(): void {
    return console.log(`Residents: ${this.residentsQuantity}`);
  }
}
