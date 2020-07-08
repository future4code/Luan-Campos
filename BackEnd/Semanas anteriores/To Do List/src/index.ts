import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<void> => {
  await connection.raw(`
    INSERT INTO users (name, nickname, email)
    VALUES (
      "${name}",
      "${nickname}",
      "${email}"
    )
  `);
};

const getUserById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM users WHERE id = "${id}"
  `);

  return result[0][0];
};

const getAllUsers = async (): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM users;
  `);

  return result[0];
};

const getTaskById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM tasks WHERE id = "${id}"
  `);

  return result[0][0];
};

const createTask = async (
  title: string,
  description: string,
  limitDate: Date,
  creatorUserId: number
): Promise<void> => {
  await connection("tasks").insert({
    title,
    description,
    limitDate,
    creatorUserId,
  });
};

app.post("/user", async (req: Request, res: Response) => {
  try {
    await createUser(req.body.name, req.body.nickname, req.body.email);
    res.status(200).send({ message: "Usuário criado com sucesso" });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// app.put("/user/edit", async (req: Request, res: Response) => {
//   try {
//     if (req.body.name !== undefined) {
//       await alterTable()
//     }
//     res.status(200).send()
//   } catch (err) {
//     res.status(400).send({
//       message: err.message,
//     });
//   }
// });

app.put("/task", async (req: Request, res: Response) => {
  try {
    await createTask(
      req.body.title,
      req.body.description,
      new Date(req.body.limitDate),
      req.body.creatorUserId
    );
    res.status(200).send({ message: "Task criada com sucesso" });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const user = await getUserById(req.params.id);
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const task = await getTaskById(req.params.id);
    res.status(200).send(task);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.get("/user/all", async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
