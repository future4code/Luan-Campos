import { Student } from "./Student";
import { FullTimeMission } from "./FullTimeMission";
import { NightMission } from "./NightMission";
import { Teacher, TEACHER_SPECIALITY } from "./Teacher";
import { TaskManager } from "./TaskManager";
import moment from "moment";

const mtm = new TaskManager();

function createStudent(
  name: string,
  email: string,
  id: number,
  birthDate: moment.Moment,
  hobbies: string[]
) {
  const newStudent = new Student(name, email, id, birthDate, hobbies);
  mtm.setStudent(newStudent);
}

function createTeacher(
  name: string,
  email: string,
  id: number,
  birthDate: moment.Moment,
  specialities: TEACHER_SPECIALITY[]
) {
  const newTeacher = new Teacher(name, email, id, birthDate, specialities);
  mtm.setTeacher(newTeacher);
}

function createMission(
  fullTime: boolean,
  name: string,
  id: number,
  startDate: moment.Moment,
  endDate: moment.Moment,
  currentModule?: number
) {
  let mission = FullTimeMission;
  if (!fullTime) {
    mission = NightMission;
  }

  const newMission = new mission(
    id,
    startDate,
    endDate,
    currentModule
  );
  newMission.setName(name);
  mtm.setMission(newMission);
}

createStudent("Daniel", "danielzinhoobrabo@gmail.com", 133, moment("13/12/1912", "DD/MM/YYYY"), ["Brincar com todos os cachorrinhos possíveis"])

//mtm.setStudentOnMission(ID_DO_ESTUDANTE, ID_DA_MISSÃO)
mtm.setTeacherOnMission(330, 333)
