import * as fs from "fs";

const data: string = process.argv[3];
const fileName: string = process.argv[2];

// try {
//     fs.writeFileSync(fileName, data)
//     console.log("Arquivo criado")
// } catch(e) {
//     console.error(e)
// }
if (data && fileName) {
  try {
    fs.appendFileSync(fileName, `\n${data}`, "utf8");
    console.log("\x1b[32m", "Dado inserido com sucesso");
  } catch (err) {
    console.error(err);
  }
} else {
    console.log("\x1b[31m", "Preencha corretamente os dados")
}
