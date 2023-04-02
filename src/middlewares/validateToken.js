import tokenRepository from "../repositories/tokenRepository.js";
import { unauthorizedError } from "../errors/index.js";

export async function medicToken(req, res, next) {
  try {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!token) throw unauthorizedError();

    const session = await tokenRepository.medic(token);
    if (session.rows.length == 0) throw unauthorizedError();

    res.locals = session.rows[0].medicId;

    next();
  } catch (error) {
    next(error);
  }
}

export async function patientToken(req, res, next) {
  try {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!token) throw unauthorizedError();
    const session = await tokenRepository.patient(token);
    if (session.rows.length == 0) throw unauthorizedError();

    res.locals = session.rows[0].patientId;

    next();
  } catch (error) {
    next(error);
  }
}
