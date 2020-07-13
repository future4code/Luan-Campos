import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  protected UserTable: string = "LamaUsers";
  public async signup(
    id: string,
    name: string,
    email: string,
    password: string,
    role: string
  ) {
    await this.getConnection()
      .insert({
        id,
        name,
        email,
        password,
        role,
      })
      .into(this.UserTable);
  }

  public async getUserByEmail(email: string) {
    const result = await this.getConnection().raw(`
      SELECT * FROM ${this.UserTable}
      WHERE email = "${email}"    
    `);

    return result[0][0];
  }
}
