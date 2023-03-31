import { Router } from "express";
import patientRouter from "./patientRouter.js";
import medicRouter from "./medicRouter.js";

const routes = Router();

routes.use("/patients", patientRouter);
routes.use("/medics", medicRouter);

export default routes;