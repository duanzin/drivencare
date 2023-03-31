import { Router } from "express";
import patientController from "../controllers/patientController";
import { validateSchema } from "../middlewares/validateSchema";

const patientRouter = Router();

patientRouter.post('/signup', validateSchema(), patientController.signup)
patientRouter.post("/signin", validateSchema(), patientController.signin)

export default patientRouter;