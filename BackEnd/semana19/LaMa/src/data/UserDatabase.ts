import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static UserTable: string = "LamaUsers";
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
      .into(UserDatabase.UserTable);
  }
}
