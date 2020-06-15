import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { UserDB } from "./data/UserDatabase";
import { IdGenerator } from "./services/IdGenerator";
import { Authenticator } from "./services/Authenticator";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

const UserDb = new UserDB();
const idGenerator = new IdGenerator();
const auth = new Authenticator();

app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userInfo = {
      email: req.body.email,
      password: req.body.password,
    };

    if (!userInfo.email || userInfo.email.indexOf("@") === -1) {
      throw new Error("Invalid Email");
    }

    if (!userInfo.password || userInfo.password < 6) {
      throw new Error("Invalid Password");
    }

    const id = idGenerator.generate();
    await UserDb.create(id, userInfo.email, userInfo.password);
    const token = await auth.generateToken({ id });

    res.status(200).send({
      token: token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.post("/login", async (req: Request, res: Response) => {
  try {
    const userInfo = {
      email: req.body.email,
      password: req.body.password,
    };
    if (!userInfo.email || userInfo.email.indexOf("@") === -1) {
      throw new Error("Invalid Email");
    }

    const user = await UserDb.getUser(req.body.email);

    if (userInfo.password !== user.password) {
      throw new Error("Invalid Password");
    }

    const token = await auth.generateToken({ id: user.id });

    res.status(200).send({
      token: token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const authData = await auth.getData(req.headers.authorization as string);

    const user = await UserDb.getUserById(authData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
