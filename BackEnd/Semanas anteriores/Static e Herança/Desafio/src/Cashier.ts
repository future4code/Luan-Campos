import {Employee} from "./Employee"

export class Cashier extends Employee {
    static PROFESSION: string = "Caixa"

    constructor(name: string, salary: number) {
        super(name, salary)
    }
    sayJob(): string {
        return `Eu sou ${Cashier.PROFESSION}`
    }
}