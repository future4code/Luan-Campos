import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { userRouter } from "./routes/UserRouter";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/user/", userRouter);

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
