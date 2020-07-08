import * as fs from "fs";
import moment from "moment";
moment.locale("pt-br");

const fileName: string = "events.json";
const events = require("../events.json");
const option: string = process.argv[2];
const today = moment();

type event = {
  name: string;
  description: string;
  date: string;
  start: string;
  end: string;
};

function getEvents(): any {
  console.log(events);
}

function createEvent(
  name: string,
  description: string,
  date: moment.Moment,
  start: string,
  end: string
): void {
  const formatedData = date.format("L");
  const newEvent: event = {
    name,
    description,
    date: formatedData,
    start,
    end,
  };

  const todayInSeconds = today.unix();
  const dateInSeconds = date.unix();
  const result = dateInSeconds - todayInSeconds;

  if (name && description && date && start && end) {
    if (result < 0) {
      console.log("Data anterior ao dia de hoje, tente novamente");
    } else {
      try {
        const isNotValid = events.find((event: any) => {
          return event.date === formatedData;
        });

        if (isNotValid) {
          console.log("Já possui um evento nessa data :(");
        } else {
          events.push(newEvent);
          fs.writeFileSync(fileName, JSON.stringify(events));
          console.log("Evento marcado com sucesso!");
        }
      } catch (e) {
        console.log(e);
      }
    }
  } else {
    console.log("Faltam informações :( verifique e tente novamente.");
  }
}

switch (option) {
  case "create": {
    createEvent(
      process.argv[3],
      process.argv[4],
      moment(process.argv[5], "DD/MM/YYYY"),
      process.argv[6],
      process.argv[7]
    );
    break;
  }

  case "events": {
    getEvents();
    break;
  }

  default:
    console.log("Escolha uma opção válida: create / events");
    break;
}
