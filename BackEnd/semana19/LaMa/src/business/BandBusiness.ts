import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";

export class BandBusiness {
  constructor(
    private bandDatabase: BandDatabase,
    private authenticator: Authenticator,
    private idGenerator: IdGenerator
  ) {}

  public async register(
    name: string,
    music_genre: string,
    responsible: string,
    token: string
  ) {
    if (!name || !music_genre || !responsible) {
      throw new Error("Missing input");
    }

    const auth = this.authenticator.getData(token);
    if (auth.role !== "admin") {
      throw new Error("Insufficient permission");
    }

    const id = this.idGenerator.generate();
    await this.bandDatabase.createBand(id, name, music_genre, responsible);
  }

  public async getBand(id?: string, name?: string) {
    if (id) {
      const band = await this.bandDatabase.getBandById(id);
      if (!band) {
        throw new Error("Band not found");
      }
      return band;
    }

    if (name) {
      const band = await this.bandDatabase.getBandByName(name);
      if (!band) {
        throw new Error("Band not found");
      }
      return band;
    }
  }
}
