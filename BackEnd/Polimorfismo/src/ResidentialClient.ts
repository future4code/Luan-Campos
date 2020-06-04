import { Residence } from "./Residence";
import { Client } from "./Client";

export class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    residentsQuantity: number,
    cep: string,
    private cpf: string
  ) {
    super(residentsQuantity, cep);
  }

  public getCpf(): void {
    return console.log(`CPF: ${this.cpf}`)
  }

  public calculateBill(): number {
 
    return this.consumedEnergy * 0.75
  }
}
