const option: string = process.argv[2];
const number1: number = Number(process.argv[3]);
const number2: number = Number(process.argv[4]);
let total: number;

switch (option) {
  case "add":
    total = number1 + number2;
    console.log("Resposta: ", total);
    break;
  case "sub":
    total = number1 - number2;
    console.log("Resposta: ", total);
    break;
  case "mult":
    total = number1 * number2;
    console.log("Resposta: ", total);
    break;
  case "div":
    total = number1 / number2;
    console.log("Resposta: ", total);
    break;
  default:
    console.log("Opção inválida");
}
