import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { BandDatabase } from "../data/BandDatabase";
import { ShowBusiness } from "../business/ShowBusiness";
import { ShowDatabase } from "../data/ShowDatabase";

export class ShowController {
  private static ShowBusiness = new ShowBusiness(
    new BandDatabase(),
    new ShowDatabase(),
    new Authenticator(),
    new IdGenerator()
  );

  async markEvent(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;
      const showData = {
        bandId: req.body.id,
        week_day: req.body.day,
        start_time: req.body.start,
        end_time: req.body.end,
      };

      await ShowController.ShowBusiness.markEvent(
        showData.bandId,
        showData.week_day,
        showData.start_time,
        showData.end_time,
        token
      );
      res.status(200).send({
        message: "Success",
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  }

  async getEventsOn(req: Request, res: Response) {
    try {
      const { day } = req.body;
      const result = await ShowController.ShowBusiness.getEventsOn(day);

      res.status(200).send(result);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  }
}
