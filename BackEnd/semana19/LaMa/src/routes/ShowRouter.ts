import express from "express";
import { ShowController } from "../controller/ShowController";
export const showRouter = express.Router();

showRouter.post("/mark", new ShowController().markEvent);
showRouter.get("/all", new ShowController().getEventsOn);
