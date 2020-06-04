import { User } from "./User";
import moment from "moment";

export class Student implements User {
  constructor(
    public name: string,
    public email: string,
    public id: number,
    public birthDate: moment.Moment,
    public hobbies: string[]
  ) {}

  getAge(id: number): any{
    return moment().diff(this.birthDate, "years")
  }
}
