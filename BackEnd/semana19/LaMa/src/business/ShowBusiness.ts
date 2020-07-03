import { BandDatabase } from "../data/BandDatabase";
import { ShowDatabase } from "../data/ShowDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";

export class ShowBusiness {
  constructor(
    private bandDatabase: BandDatabase,
    private showDatabase: ShowDatabase,
    private authenticator: Authenticator,
    private idGenerator: IdGenerator
  ) {}

  public async markEvent(
    bandId: string,
    day: string,
    start_time: number,
    end_time: number,
    token: string
  ) {
    const exist = await this.bandDatabase.getBandById(bandId);
    const marked = await this.showDatabase.searchEvent(
      day,
      start_time,
      end_time
    );
    const id = this.idGenerator.generate();

    const auth = this.authenticator.getData(token);
    if (auth.role !== "admin") {
      throw new Error("Insufficient permission");
    }

    if (!exist) {
      throw new Error("Band not found");
    }

    if (marked) {
      throw new Error("A show is already scheduled for this time, try again");
    }

    if (start_time < 8 || start_time > 23) {
      throw new Error("Invalid start hour");
    }

    if (end_time < start_time || end_time > 23) {
      throw new Error("Invalid end hour");
    }

    if (
      day.toLowerCase() === "sexta" ||
      day.toLowerCase() === "sábado" ||
      day.toLowerCase() === "domingo"
    ) {
      await this.showDatabase.markEvent(id, day, start_time, end_time, bandId);
    } else {
      throw new Error("Invalid day");
    }
  }

  public async getEventsOn(day: string) {
    if (
      day.toLowerCase() === "sexta" ||
      day.toLowerCase() === "sábado" ||
      day.toLowerCase() === "domingo"
    ) {
      const events = await this.showDatabase.getEventsOn(day);
      return { events };
    } else {
      throw new Error("Invalid day");
    }
  }
}
