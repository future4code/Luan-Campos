import { User } from "./User";
import moment from "moment";

export class Teacher implements User {
  constructor(
    public name: string,
    public email: string,
    public id: number,
    public birthDate: moment.Moment,
    public specialities: TEACHER_SPECIALITY[]
  ) {}
}

export enum TEACHER_SPECIALITY {
  REACT = "REACT",
  REDUX = "REDUX",
  CSS = "CSS",
  TESTES = "TESTES",
  TYPESCRIPT = "TYPESCRIPT",
  OOP = "OOP",
  BACKEND = "BACKEND",
}
