import { Router } from "express";
import patientController from "../controllers/patientController";
import { validateSchema } from "../middlewares/validateSchema";
import { signin, signup } from "../schemas/Schema";

const patientRouter = Router();

patientRouter.post('/signup', validateSchema(signup), patientController.signup)
patientRouter.post("/signin", validateSchema(signin), patientController.signin)

export default patientRouter;