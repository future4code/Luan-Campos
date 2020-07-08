import {Employee} from "./Employee"

export class Seller extends Employee {
    private salesQuantity: number = 0
    static SELLING_COMISSION: number = 5

    getSalesQuantity(): number {
        return this.salesQuantity
    }
    setSalesquantity(quantity: number): void{
        this.salesQuantity = quantity
    }

    calculateTotalSalary(): number {
        return super.calculateTotalSalary() + Seller.SELLING_COMISSION * this.salesQuantity
    }
}