import { Client } from "./Client";
import { Place } from "./Place";
import { Residence } from "./Residence";
import { Commerce } from "./Commerce";
import { Industry } from "./Industry";
import { ResidentialClient } from "./ResidentialClient";
import { CommercialClient } from "./CommercialClient";
import { IndustrialClient } from "./IndustrialClient";
import { ClientManager } from "./ClientManager";

// 1. A - Imprimiu todas.

// const place = new Place("1213")

// 2. A - "Não é possível criar uma instância de uma classe abstrata"
// B - Teríamos que criar uma classe filha de "Place" e instanciar ela

// 3. B - Porque ela porque precisa ter acesso a um dos seus atributos
// 3. C - Porque não será criado uma instância dessa classe.

// 4. A - Todos os que ele criou + os da classe pai.

// 5. A - Quase tudo.
// B - O CPNJ e a calculateBill, que é multiplicada por .53

// 6. A - Da classe "Industry". Pois ela deve ter a propriedade "machinesQuantity";
// B - A interface "Client". Pois ela precisa das propriedades e métodos dela.

const manager = new ClientManager();
const client1 = new ResidentialClient(
  "Luan",
  1,
  1230,
  4,
  "123123-32",
  "309430942409"
);
const client2 = new CommercialClient("João", 2, 400, 3, "123", "323.33.33.3");
const client3 = new IndustrialClient(
  "LUANZINHO LTDA",
  4,
  900,
  666,
  24,
  "11111"
);

manager.registerClient(client1);
manager.registerClient(client2);
manager.registerClient(client3);
manager.registerClient(client1);
console.log("\n");
manager.printClients();
console.log("\n");
manager.deleteClient(2);
console.log("\n");
manager.printClients();
