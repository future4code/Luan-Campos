import * as fs from "fs";

const data: string = "\n" + process.argv[3];
const fileName: string = process.argv[2];

// try {
//     fs.writeFileSync(fileName, data)
//     console.log("Arquivo criado")
// } catch(e) {
//     console.error(e)
// }

try {
    fs.appendFileSync(fileName, data, 'utf8')
    console.log("Dado inserido com sucesso")
} catch (err) {
    console.error(err)
}