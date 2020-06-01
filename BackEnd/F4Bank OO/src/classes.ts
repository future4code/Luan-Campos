import { JSONFileManager } from "./JSONFileManager";
const json = new JSONFileManager("accounts.json")

export class Bank {
  private accounts: UserAccount[];
  private fileManager: JSONFileManager;

  constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
    this.accounts = accounts;
    this.fileManager = fileManager;
  }

  public createAccount(): void {
  }
}

export class UserAccount {
  constructor(name: string, cpf: string, age: number) {
    this.name = name;
    this.cpf = cpf;
    this.age = age;
    this.balance = 0
    this.transactions = []
  }

  private name: string;
  private age: number;
  private cpf: string;
  private balance: number;
  private transactions: Transactions[];

  public getBalance(): number {
    return this.balance;
  }

  public addBalance(amount: number): void {
    this.balance += amount;
  }
}

type Transactions = {
  description: string;
  cpf: string;
  value: number;
};
