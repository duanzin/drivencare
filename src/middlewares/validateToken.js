import tokenRepository from "../repositories/tokenRepository.js";

export async function medicToken(req, res, next) {
  try {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!token) return res.sendStatus(401);

    const session = await tokenRepository.medic(token);
    if (session.rows.length == 0) return res.sendStatus(401);

    res.locals = session.rows[0].medicId;

    next();
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function patientToken(req, res, next) {
  try {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!token) return res.sendStatus(401);
    tokenRepository
    const session = await tokenRepository.patient(token);
    if (session.rows.length == 0) return res.sendStatus(401);

    res.locals = session.rows[0].patientId;

    next();
  } catch (error) {
    res.status(500).send(error);
  }
}
