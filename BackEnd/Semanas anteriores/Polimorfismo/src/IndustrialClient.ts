import { Industry } from "./Industry";
import { Client } from "./Client";

export class IndustrialClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private industryNumber: number,
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }

  getRegisterNumber(): void {
    return console.log(this.industryNumber)
  }

  calculateBill(): number {
    return this.consumedEnergy * 0.45 + 100 * this.machinesQuantity
  }
}
