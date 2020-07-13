import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase {
  protected ShowTable: string = "LamaShows";
  public async markEvent(
    id: string,
    week_day: string,
    start_time: number,
    end_time: number,
    band_id: string
  ) {
    await this.getConnection()
      .insert({
        id,
        week_day,
        start_time,
        end_time,
        band_id,
      })
      .into(this.ShowTable);
  }

  public async searchEvent(day: string, start_time: number, end_time: number) {
    const result = await this.getConnection().raw(`
        SELECT * FROM ${this.ShowTable}
        WHERE week_day = '${day}'
        AND
        start_time = ${start_time}
        AND
        end_time = '${end_time}'      
    `);

    return result[0][0];
  }

  public async getEventsOn(day: string) {
    const result = await this.getConnection().raw(`
      SELECT lb.name, lb.music_genre, ls.start_time, ls.end_time from LamaBands as lb
      JOIN LamaShows as ls
      on lb.id = ls.band_id
      where week_day = "${day}";
    `);

    return result[0][0];
  }
}
