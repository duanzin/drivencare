import { Router } from "express";
import medicController from "../controllers/medicController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { signin, signup } from "../schemas/Schema.js";

const medicRouter = Router();

medicRouter.post("/signup", validateSchema(signup), medicController.signup)
medicRouter.post("/signin", validateSchema(signin), medicController.signin)

export default medicRouter;