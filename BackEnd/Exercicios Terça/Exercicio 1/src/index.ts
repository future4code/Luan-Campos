const option: string = process.argv[2];
const number1: number = Number(process.argv[3]);
const number2: number = Number(process.argv[4]);
let total: number;

if (number1 && number2) {
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
      console.log("\x1b[31m", "Opção inválida");
  }
} else {
  console.log(
    "Insira dois números válidos.",
    "\x1b[32m",
    "\n ESPERAVA: \n number1: 5 (NUMBER) \n number2: 10 (NUMBER)",
    "\x1b[31m",
    "\n\n RECEBI: ",
    "\x1b[31m",
    "\n number1: ",
    number1,
    "\x1b[31m",
    " \n number2: ",
    number2
  );
}
