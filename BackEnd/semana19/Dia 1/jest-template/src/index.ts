export interface User {
    name: string,
    balance: number
}

const luan: User = {
    name: "Luan",
    balance: 200
}

export function performPurchase(user: User, price: number): User | undefined {
    if(user.balance >= price) {
        return {
            ...user, 
            balance: user.balance - price
        }
    }
    return undefined
}

