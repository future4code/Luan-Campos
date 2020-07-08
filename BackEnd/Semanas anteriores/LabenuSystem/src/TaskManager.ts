import { Student } from "./Student";
import { FileManager } from "./FileManager";
import { Teacher } from "./Teacher";
import { Mission } from "./Mission";
import moment from "moment";

const fmStudents = new FileManager("students.json");
const fmTeachers = new FileManager("teachers.json");
const fmMissions = new FileManager("missions.json");

export class TaskManager {
  private allStudents: Student[] = require("../students.json");
  private allTeachers: Teacher[] = require("../teachers.json");
  private allMissions: Mission[] = require("../missions.json");

  setStudent(newStudent: Student): void {
    const exist = this.allStudents.find((student: any) => {
      return student.id === newStudent.id;
    });

    if (exist) {
      console.log("Aluno já existente");
    } else {
      this.allStudents.push(newStudent);
      fmStudents.writeFile(this.allStudents);
    }
  }

  setTeacher(newTeacher: Teacher): void {
    const exist = this.allTeachers.find((teacher: any) => {
      return teacher.id === newTeacher.id;
    });

    if (exist) {
      console.log("Professor já existente");
    } else {
      this.allTeachers.push(newTeacher);
      fmTeachers.writeFile(this.allTeachers);
    }
  }

  setMission(newMission: Mission): void {
    const exist = this.allMissions.find((mission: any) => {
      return mission.id === newMission.getId();
    });

    if (exist) {
      console.log("Missão já existente");
    } else {
      this.allMissions.push(newMission);
      fmMissions.writeFile(this.allMissions);
    }
  }

  setStudentOnMission(id: number, missionId: number): void {
    this.allStudents.find((student: any) => {
      if (student.id === id) {
        this.allMissions.map((mission: any) => {
          const isIn = mission.students.find((students: any) => {
            return student.id === students.id;
          });
          if (isIn) {
            console.log("Aluno já cadastrado em uma turma");
          } else if (mission.id === missionId) {
            mission.students.push(student);
            fmMissions.writeFile(this.allMissions);
            console.log(`Estudante cadastrado na turma ${mission.name} :D`);
          } else {
            console.log("Missão não encontrada")
          }
        });
      }
    });
  }

  setTeacherOnMission(id: number, missionId: number): void {
    this.allTeachers.find((teacher: any) => {
      if (teacher.id === id) {
        this.allMissions.map((mission: any) => {
          if (missionId === mission.id) {
            const isIn = mission.teachers.find((teachers: any) => {
              return teacher.id === teachers.id;
            });
            if (isIn) {
              console.log("Professor já cadastrado nessa turma");
            } else {
              mission.teachers.push(teacher)
              fmMissions.writeFile(this.allMissions)
              console.log(`Professor cadastrado na turma ${mission.name} :D`);
            }
          }
        });
      }
    });
  }

  getStudents(): any {
    return this.allStudents;
  }

  getTeachers(): any {
    return this.allTeachers;
  }

  getMissions(): any {
    return this.allMissions;
  }

  printStudents(): any {
    this.allStudents.map((student: any) => {
      const age = moment().diff(student.birthDate, "years");

      return console.log(`Nome: ${student.name}
      Email: ${student.email}
      Turma: X
      Curso: Desenvolvimento Web FullStack
      Idade: ${age}`);
    });
  }
}
