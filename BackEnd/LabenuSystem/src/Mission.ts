import { Teacher } from "./Teacher";
import { Student } from "./Student";
import moment from "moment";

export abstract class Mission {
  private name: string = "";
  private teachers: Teacher[] = [];
  private students: Student[] = [];
  // não colocamos no construtor,
  // porque o noem da turma de noite tem restrição
  // então é melhor controlar isso com um set

  constructor(
    private id: number,
    private startDate: moment.Moment,
    private endDate: moment.Moment,
    private currentModule: number | undefined = undefined
  ) {}

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getStudents(): Student[] {
    return this.students;
  }

  public getTeachers(): Teacher[] {
    return this.teachers;
  }

  public getAgeById(id: number): any {
    this.students.find((student: any) => {
      if (id === student.id) {
        return console.log(moment().diff(student.birthDate, "years"));
      }
    });
  }

  public addTeacher(teacher: Teacher) {
    this.teachers.push(teacher);
  }

  public addStudent(student: Student) {
    this.students.push(student);
  }

  public setName(name: string) {
    this.name = name;
  }
}
