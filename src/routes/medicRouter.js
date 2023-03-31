import { Router } from "express";
import medicController from "../controllers/medicController";
import { validateSchema } from "../middlewares/validateSchema";

const medicRouter = Router();

medicRouter.post("/signup", validateSchema(), medicController.signup)
medicRouter.post("/signin", validateSchema(), medicController.signin)

export default medicRouter;