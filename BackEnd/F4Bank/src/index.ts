import * as fs from "fs";
import moment from "moment";
moment.locale("pt-br");

const fileName: string = "accounts.json";
const accounts = require("../accounts.json");
const option: string = process.argv[2];

type account = {
  name: string;
  cpf: string;
  birthDate: string;
  balance: number;
  extract: extract[];
  transactions: extract[];
};

type extract = {
  description: string;
  date: string;
  value: number;
};

function createAccount(
  name: string,
  cpf: string,
  birthDate: moment.Moment
): void {
  const formatedDate = birthDate.format("L");
  const newAccount: account = {
    name,
    cpf,
    birthDate: formatedDate,
    balance: 0,
    extract: [],
    transactions: [],
  };

  const age: number = moment().diff(moment(birthDate), "years", true);

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

function addBalance(
  name: string,
  cpf: string,
  value: number,
  date: moment.Moment
): void {
  const formatedDate = date.format("L");
  const extract: extract = {
    description: "Depósito bancário",
    value: value,
    date: formatedDate,
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

function payBill(
  name: string,
  description: string,
  value: number,
  date: moment.Moment
): void {
  const today = moment();
  const todayInSeconds = today.unix();
  let formatedDate
  let dateInSeconds
  
  if (!moment(date).isValid()){
    formatedDate = today.format("L");
    dateInSeconds = todayInSeconds
  } else {
    formatedDate = date.format("L");
    dateInSeconds = date.unix();
  }

  const transactions: extract = {
    description,
    value: -value,
    date: formatedDate,
  };

  const result: number = dateInSeconds - todayInSeconds;

  if (result >= 0) {
    accounts.find((account: any) => {
      if (account.name === name && account.balance >= value) {
        account.transactions.push(transactions);
        fs.writeFileSync(fileName, JSON.stringify(accounts));
        console.log("Operação realizada com sucesso");
      } else {
        console.log("Nome inválido ou saldo inferior ao pagamento desejado");
      }
    });
  } else {
    console.log("Data anterior ao dia de hoje, tente novamente");
  }
}

function updateBalance(name: string, cpf: string): void {
  const today = moment();

  accounts.find((account: any) => {
    if (account.name === name && account.cpf === cpf) {
      account.transactions.map((transaction: any) => {
        let dateTransaction = moment(transaction.date, "DD/MM/YYYY")
        let result = dateTransaction.unix() - today.unix()

        console.log(transaction.description, dateTransaction.unix())
        console.log(today.unix())
        console.log(result)

        if (result < 0) {
          account.balance += transaction.value;
          account.extract.push(transaction);
          account.transactions.splice(transaction)
        }
      });
      fs.writeFileSync(fileName, JSON.stringify(accounts));
      console.log("Atualizado com sucesso!");
    } else {
      console.log("Nome e/ou CPF inválidos");
    }
  });
}

function transferTo(
  name: string,
  cpf: string,
  name2: string,
  cpf2: string,
  value: number
): void {}

switch (option) {
  case "create": {
    createAccount(
      process.argv[3],
      process.argv[4],
      moment(process.argv[5], "DD/MM/YYYY")
    );
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
      moment(process.argv[6], "DD/MM/YYYY")
    );
    break;
  }

  case "pay": {
    payBill(
      process.argv[3],
      process.argv[4],
      Number(process.argv[5]),
      moment(process.argv[6], "DD/MM/YYYY")
    );
    break;
  }

  case "update": {
    updateBalance(process.argv[3], process.argv[4]);
    break;
  }
  default:
    console.log(
      "Escolha uma opção válida: create / accounts / balance ou deposit"
    );
}
