import * as fs from "fs";
import moment from "moment";

const fileName: string = "accounts.json";
const accounts = require("../accounts.json");
const option: string = process.argv[2];

type account = {
  name: string;
  cpf: string;
  birthDate: moment.Moment;
  balance: number;
  extract: extract[];
};

type extract = {
  description: string;
  date: string;
  value: number;
};

function createAccount(): any {
  const newAccount: account = {
    name: process.argv[3],
    cpf: process.argv[4],
    birthDate: moment(process.argv[5], "DD/MM/YYYY"),
    balance: 0,
    extract: [],
  };

  const age = moment().diff(moment(newAccount.birthDate), "years", true);
  
  if (age >= 18) {
    const isNotValid = accounts.find((account: any) => {
      return account.cpf === newAccount.cpf;
    });
    if (isNotValid) {
      console.log("CPF já cadastrado");
    } else {
      try {
        accounts.push(newAccount);
        fs.writeFileSync(fileName, JSON.stringify(accounts));
        console.log("Conta criada com sucesso! :D");
      } catch (e) {
        console.error(e);
      }
    }
  } else {
    console.log("Para criar uma conta você deve ter no mínimo 18 anos.");
  }
}

function getAllAccounts(): any {
  console.log(accounts);
}

function getBalance(name: string, cpf: string) {
  accounts.find((account: any) => {
    if (account.name === name && account.cpf === cpf) {
      return console.log("Balance: R$", account.balance);
    } else {
      console.log("Nome e/ou CPF não encontrados");
    }
  });
}

function addBalance(name: string, cpf: string, value: number, date: string) {
  const extract: extract = {
    description: "Depósito bancário",
    value: value,
    date: date,
  };

  accounts.find((account: any) => {
    if (account.name === name && account.cpf === cpf) {
      account.balance += value;
      account.extract.push(extract);
      fs.writeFileSync(fileName, JSON.stringify(accounts));
      console.log("Depositado com sucesso");
    } else {
      console.log("Erro na operação, tente novamente.");
    }
  });
}

function payBill(description: string, value: number, date: string) {}

switch (option) {
  case "create": {
    createAccount();
    break;
  }
  case "accounts": {
    getAllAccounts();
    break;
  }
  case "balance": {
    getBalance(process.argv[3], process.argv[4]);
    break;
  }
  case "deposit": {
    addBalance(
      process.argv[3],
      process.argv[4],
      Number(process.argv[5]),
      process.argv[6]
    );
    break;
  }
  default:
    console.log(
      "Escolha uma opção válida: create / accounts / balance ou deposit"
    );
}
