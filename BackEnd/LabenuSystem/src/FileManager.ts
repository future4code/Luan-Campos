import * as fs from "fs";

export class FileManager {
  constructor(private filePath: string) {}

  public setFilePath(path: string): void {
    this.filePath = path;
  }

  public writeFile(data: any): void {
    fs.writeFileSync(this.filePath, JSON.stringify(data));
  }

  public readFile(): any {
    const data = fs.readFileSync(this.filePath);
    return JSON.parse(data.toString());
  }
}

// const fm = new FileManager("arquivo");

// // imprime as infos do arquivo
// console.log(fm.readFile());

// fm.setFilePath("outro-arquivo");

// // escreve no arquivo
// fm.writeFile({
//   id: "1",
//   name: "Goli",
// });
