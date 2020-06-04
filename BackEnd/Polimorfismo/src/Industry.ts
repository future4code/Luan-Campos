import { Place } from "./Place";

export class Industry extends Place {
  constructor(protected machinesQuantity: number, cep: string) {
    super(cep);
  }

  getMachines(): void {
    return console.log(`Machines: ${this.machinesQuantity}`);
  }
}
