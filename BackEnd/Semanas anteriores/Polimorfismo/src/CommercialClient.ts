import { Commerce } from "./Commerce";
import { Client } from "./Client";

export class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    floorsQuantity: number,
    cep: string,
    private CNPJ: string
  ) {
    super(floorsQuantity, cep);
  }

  public getCNPJ(): void {
    return console.log(`CPF: ${this.CNPJ}`)
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }
}
