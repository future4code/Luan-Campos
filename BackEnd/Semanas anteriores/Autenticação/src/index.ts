import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { UserDB } from "./data/UserDatabase";
import { IdGenerator } from "./services/IdGenerator";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { BaseDataBase } from "./data/BaseDataBase";

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
const hashManager = new HashManager();

app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userInfo = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };

    if (!userInfo.email || userInfo.email.indexOf("@") === -1) {
      throw new Error("Invalid Email");
    }

    if (!userInfo.password || userInfo.password < 6) {
      throw new Error("Invalid Password");
    }

    const encryptedPassword = await hashManager.hash(userInfo.password);

    const id = idGenerator.generate();
    await UserDb.create(id, userInfo.email, encryptedPassword, userInfo.role);
    const token = await auth.generateToken({ id, role: userInfo.role });

    res.status(200).send({
      token: token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
  await BaseDataBase.destroyConnection();
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

    const decryptedPassword = await hashManager.compare(
      userInfo.password,
      user.password
    );

    if (!decryptedPassword) {
      throw new Error("Invalid Password");
    }

    const token = await auth.generateToken({ id: user.id, role: user.role });

    res.status(200).send({
      token: token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }

  await BaseDataBase.destroyConnection();
});

app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const authData = auth.getData(req.headers.authorization as string);

    if (authData.role !== "normal") {
      throw new Error("Permission Denied");
    }

    const user = await UserDb.getUser(req.body.email);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }

  await BaseDataBase.destroyConnection();
});

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    auth.getData(req.headers.authorization as string);

    const user = await UserDb.getUserById(req.params.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }

  await BaseDataBase.destroyConnection();
});

app.delete("/user/:id", async (req: Request, res: Response) => {
  try {
    const authData = auth.getData(req.headers.authorization as string);

    if (authData.role !== "admin") {
      throw new Error("Permission Denied");
    }

    await UserDb.deleteUser(req.params.id);
    res.status(200).send({
      message: "User deleted",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }

  await BaseDataBase.destroyConnection();
});
