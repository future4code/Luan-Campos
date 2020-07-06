import knex from "knex";
import dotenv from "dotenv";
import { BaseDataBase } from "./BaseDataBase";

dotenv.config();

export class UserDB extends BaseDataBase {
  private static TABLE_NAME = "Users";

  public async create(
    id: string,
    email: string,
    password: string,
    role: string
  ): Promise<void> {
    await this.getConnection()
      .insert({
        id,
        email,
        password,
        role,
      })
      .into(UserDB.TABLE_NAME);
  }

  public async getUser(email: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDB.TABLE_NAME)
      .where({ email });
    return result[0];
  }

  public async getUserById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDB.TABLE_NAME)
      .where({ id });
    return result[0];
  }

  public async deleteUser(id: string): Promise<any> {
    await this.getConnection().del().from(UserDB.TABLE_NAME).where({ id });
  }
}
