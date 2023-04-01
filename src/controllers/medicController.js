import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import {
  createMedic,
  createSession,
  deleteSession,
  getMedic,
} from "../repositories/medicRepository.js";

async function signup(req, res) {
  const { name, email, password } = req.body;
  const passhash = bcrypt.hashSync(password, 10);
  try {
    const medicExists = await getMedic(email);
    if (medicExists.rows.length !== 0) {
      return res.sendStatus(409);
    }

    await createMedic(name, email, passhash);

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function signin(req, res) {
  try {
    const medic = await getMedic(req.body.email);
    if (medic.rows.length == 0) {
      return res.sendStatus(401);
    }

    const passmatch = await bcrypt.compareSync(
      req.body.password,
      medic.rows[0].password
    );
    if (!passmatch) {
      return res.sendStatus(401);
    }

    const token = uuid();

    await deleteSession(medic.rows[0].id);
    await createSession(token, medic.rows[0].id);

    res.status(200).send({ token });
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export default {
  signup,
  signin,
};
