import { BaseDatabase } from "./BaseDatabase";

export class BandDatabase extends BaseDatabase {
  protected BandTable: string = "LamaBands";

  public async createBand(
    id: string,
    name: string,
    music_genre: string,
    responsible: string
  ) {
    await this.getConnection()
      .insert({
        id,
        name,
        music_genre,
        responsible,
      })
      .into(this.BandTable);
  }

  public async getBandById(id: string) {
    const band = await this.getConnection()
      .select("*")
      .from(this.BandTable)
      .where({ id });
    
    return band[0]
  }

  public async getBandByName(name: string) {
    const band = await this.getConnection()
    .select("*")
    .from(this.BandTable)
    .where({ name });
  
  return band[0]
  }
}
