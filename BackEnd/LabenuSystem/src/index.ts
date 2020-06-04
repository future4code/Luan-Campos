import { FileManager } from "./FileManager";
import { Student } from "./Student";
import { FullTimeMission } from "./FullTimeMission";
import { NightMission } from "./NightMission";
import { Teacher, TEACHER_SPECIALITY } from "./Teacher";
import moment from "moment";

const student1 = new Student(
  "Luan",
  "luan@gmail",
  6,
  moment("04/08/1999", "DD/MM/YYYY"),
  ["Agradecer pela vida linda que tenho!"]
);

const newTeacher = new Teacher(
  "João",
  "joão@gmail.com",
  2,
  moment("01/01/1995", "DD/MM/YYYY"),
  [TEACHER_SPECIALITY.BACKEND]
);

const hamilton = new FullTimeMission(
  4,
  moment("01/02/2020", "DD/MM/YYYY"),
  moment("29/08/2020", "DD/MM/YYYY"),
  [newTeacher],
  [student1],
  3
);
hamilton.setName("Hamilton");

const einstein = new NightMission(
  7,
  moment("01/02/2020", "DD/MM/YYYY"),
  moment("29/08/2020", "DD/MM/YYYY"),
  [newTeacher],
  [student1],
  2
);
einstein.setName("Einstein-na-night");

const student2 = new Student(
  "Lucas",
  "sdsd@gmail",
  54,
  moment("04/08/1967", "DD/MM/YYYY"),
  ["Tomar sorvete"]
);

hamilton.addStudent(student2)

console.log(hamilton.getStudents());
console.log(hamilton.getTeachers());

hamilton.getAgeById(54)