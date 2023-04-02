import { Router } from "express";
import patientController from "../controllers/patientController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { patientSignup, signin } from "../schemas/Schema.js";

const patientRouter = Router();

patientRouter.post(
  "/signup",
  validateSchema(patientSignup),
  patientController.signup
);
patientRouter.post("/signin", validateSchema(signin), patientController.signin);

export default patientRouter;
