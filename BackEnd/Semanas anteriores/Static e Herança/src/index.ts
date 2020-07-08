import {User} from "./User"
import {Customer} from "./Customer"
import { Employee } from "./Employee"
import { Seller } from "./Seller"

// 1 - A. Não. o "password" é privado.
// B. Uma vez.

// 2 - A. Uma vez.
// B. Duas vezes. Porque a classe Customer extende a User, chamando o construtor dela.

// 3 - A. Não, não tem como acessar ela pois é privada apenas para o pai dela (User).

// 6 - A. Apenas uma vez.
// B. Todos, menos o password.

// 8 - A. Os mesmos parâmetros que são necessários na classe Employee, já que Seller é filha dela.
// B. Todos, menos o password. Porquê ela é privada para a classe User.

// 9 - A. Não, pois ela é privada. Precisaria criar um 'get' para isso.

// 10 - A. Foi impresso o salário total do Empregado.

const newSeller = new Seller("1", "luan@gmail.com", "Luan", "abacate", new Date(), 1200)

newSeller.setSalesquantity(10)
console.log(newSeller.calculateTotalSalary())

