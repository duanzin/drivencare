import { Router } from "express";
import medicController from "../controllers/medicController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { medicSignup, signin } from "../schemas/Schema.js";

const medicRouter = Router();

medicRouter.post("/signup", validateSchema(medicSignup), medicController.signup)
medicRouter.post("/signin", validateSchema(signin), medicController.signin)

export default medicRouter;