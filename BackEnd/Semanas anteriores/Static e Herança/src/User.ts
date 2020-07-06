export class User {
    private id: string
    private email: string
    private name: string
    private password: string

    constructor (id: string, email: string, name: string, password: string){
        console.log("Construtor da classe USER")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    getId(): string {
        return this.id
    }

    getEmail(): string {
        return this.email
    }

    getName(): string {
        return this.name
    }

    introduceYourself(): string {
        return `Olá, sou @ ${this.name}. Bom dia!`
    }
}