import { Client } from "./Client";

export class ClientManager {
  private clients: Client[] = [];

  isCpfValid(cpf: string): any {

  }

  registerClient(newClient: Client): void {
    const hasClient = this.clients.find((client: any) => {
      return client.registrationNumber === newClient.registrationNumber;
    });

    if (hasClient) {
      console.log("Número de registro já existente, tente novamente");
    } else {
      this.clients.push(newClient);
      console.log(`${newClient.name} registrado com sucesso!`);
    }
  }

  getClientsQuantity(): void {
    return console.log(`Quantidade total de clientes: ${this.clients.length}`);
  }

  calculateBillOfClient(regNumber: number): number {
    const foundClient = this.clients.find((client: any) => {
      return client.registrationNumber === regNumber;
    });

    if (foundClient) {
      return foundClient.calculateBill();
    }

    return 0;
  }

  calculateIncome(): number {
    let total: number = 0;
    this.clients.forEach((client: any) => {
      total += client.calculateBill();
    });
    return total;
  }

  deleteClient(regNumber: number): void {
    let index = undefined;

    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].registrationNumber === regNumber) {
        index = i;
      }

      if (index !== undefined) {
        this.clients.splice(index, 1);
        console.log(`Removido com sucesso`);
      }
    }
  }

  printClients(): void {
    this.clients.map((client: any) => {
      console.log(
        `NOME: ${client.name} - Nº DE REGISTRO: ${
          client.registrationNumber
        } - ENERGIA TOTAL: ${
          client.consumedEnergy
        }kWh - TOTAL PAGO: R$${client.calculateBill()}`
      );
    });
  }
}
