import express from "express";
import { BandController } from "../controller/BandController";
export const bandRouter = express.Router();

bandRouter.post("/register", new BandController().register);
bandRouter.get("/search", new BandController().getBand);
