import { Router } from "express";
import { patientToken } from "../middlewares/validateToken.js";
import searchController from "../controllers/searchController.js";

const searchRouter = Router();

searchRouter.get("/name/:name", patientToken, searchController.search);
searchRouter.get(
  "/specialty/:specialty",
  patientToken,
  searchController.search
);
searchRouter.get("/location/:location", patientToken, searchController.search);

export default searchRouter;
