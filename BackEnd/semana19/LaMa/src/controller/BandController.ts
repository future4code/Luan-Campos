import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { BandDatabase } from "../data/BandDatabase";
import { BandBusiness } from "../business/BandBusiness";
import { BaseDatabase } from "../data/BaseDatabase";

export class BandController {
  private static BandBusiness = new BandBusiness(
    new BandDatabase(),
    new Authenticator(),
    new IdGenerator()
  );

  async register(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;
      const { name, music_genre, responsible } = req.body;

      await BandController.BandBusiness.register(
        name,
        music_genre,
        responsible,
        token
      );

      res.status(200).send({ message: "Band registered" });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
    await BaseDatabase.destroyConnection();
  }

  async getBand(req: Request, res: Response) {
    try {
      const { id, name } = req.body;

      const result = await BandController.BandBusiness.getBand(id, name);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  }
}
