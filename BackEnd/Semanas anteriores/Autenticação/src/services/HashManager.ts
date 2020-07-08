import * as bcrypt from "bcryptjs";

export class HashManager {
  public async hash(t: string): Promise<string> {
    const rounds = 12;
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(t, salt);

    return result;
  }

  public async compare(t: string, h: string): Promise<boolean> {
    return bcrypt.compare(t, h);
  }
}
