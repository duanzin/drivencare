import { Router } from "express";
import patientRouter from "./patientRouter.js";
import medicRouter from "./medicRouter.js";
import searchRouter from "./searchRouter.js";

const routes = Router();

routes.use("/patients", patientRouter);
routes.use("/medics", medicRouter);
routes.use("/search", searchRouter);

export default routes;
