import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";
import { create } from "domain";

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

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `);
  return console.log(result[0][0]);
};

const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE name LIKE '%${name}%'
    `);
  return result[0][0];
};

const quantity = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(gender) 
    AS ${gender} 
    FROM Actor 
    WHERE gender = '${gender}';
  `);

  return result[0][0];
};

const updateSalary = async (salary: number, id: string): Promise<any> => {
  await connection("Actor")
    .update({
      salary,
    })
    .where("id", id);
};

const createActor = async (
  id: string,
  name: string,
  salary: number,
  birthday: Date,
  gender: string
): Promise<void> => {
  await connection("Actor").insert({
    id,
    name,
    salary,
    birth_date: birthday,
    gender,
  });
};

const createMovie = async (
  id: string,
  title: string,
  synopsis: string,
  release_Date: Date,
  rating: number
): Promise<void> => {
  await connection("Movie").insert({
    id,
    title,
    synopsis,
    release_Date,
    rating,
  });
};

const getAllMovies = async (): Promise<any> => {
  const allMovies = await connection.raw(`
  SELECT * FROM Movie LIMIT 15;
  `);

  return allMovies[0]
};

const getMovieByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movie WHERE title LIKE '%${name}%' OR synopsis LIKE '%${name}%'
  `)

  return result[0]
}

const deleteActor = async (id: string): Promise<any> => {
  await connection("Actor").delete().where("id", id);
};

const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg(`salary AS average(${gender})`)
    .where("gender", gender);

  console.log(result);
};

app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await quantity(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.put("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.birth_date),
      req.body.gender
    );
    res.status(200).send();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.post("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.salary, req.body.id);
    res.status(200).send();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
    res.status(200).send();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.post("/movie", async (req: Request, res: Response) => {
  try {
    await createMovie(
      req.body.id,
      req.body.title,
      req.body.synopsis,
      new Date(req.body.release_Date),
      req.body.rating
    );
    res.status(200).send();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.get("/movie/all", async (req: Request, res: Response) => {
  try {
    const movie = await getAllMovies()
    res.status(200).send(movie)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const movie = await getMovieByName(req.query.title as string)
    res.status(200).send(movie)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
