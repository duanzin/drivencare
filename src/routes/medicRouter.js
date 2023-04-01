import { Router } from "express";
import medicController from "../controllers/medicController";
import { validateSchema } from "../middlewares/validateSchema";
import { signin, signup } from "../schemas/Schema";

const medicRouter = Router();

medicRouter.post("/signup", validateSchema(signup), medicController.signup)
medicRouter.post("/signin", validateSchema(signin), medicController.signin)

export default medicRouter;