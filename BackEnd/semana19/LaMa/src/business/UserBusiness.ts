import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { User } from "../model/User";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private hashManager: HashManager,
    private authenticator: Authenticator,
    private idGenerator: IdGenerator
  ) {}

  public async signup(
    name: string,
    email: string,
    password: string,
    role: string
  ) {
    if (!name || !email || !password || !role) {
      throw new Error("Missing input");
    }

    if (email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    if (password.length < 6) {
      throw new Error("Password must have at least 6 characters");
    }

    const id = this.idGenerator.generate();
    const cryptedPassword = await this.hashManager.hash(password);
    const roleToEnum = User.mapStringToRole(role);
    await this.userDatabase.signup(
      id,
      name,
      email,
      cryptedPassword,
      roleToEnum
    );

    const accessToken = this.authenticator.generateToken({
      id,
      role: roleToEnum,
    });

    return { accessToken };
  }
}
