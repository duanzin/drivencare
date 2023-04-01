import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import {
  createPatient,
  createSession,
  deleteSession,
  getPatient,
} from "../repositories/patientRepository.js";

async function signup(req, res) {
  const { name, email, password } = req.body;
  const passhash = bcrypt.hashSync(password, 10);
  try {
    const medicExists = await getPatient(email);
    if (medicExists.rows.length !== 0) {
      return res.sendStatus(409);
    }

    await createPatient(name, email, passhash);

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function signin(req, res) {
  try {
    const patient = await getPatient(req.body.email);
    if (patient.rows.length == 0) {
      return res.sendStatus(401);
    }

    const passmatch = await bcrypt.compareSync(
      req.body.password,
      patient.rows[0].password
    );
    if (!passmatch) {
      return res.sendStatus(401);
    }

    const token = uuid();

    await deleteSession(patient.rows[0].id);
    await createSession(token, patient.rows[0].id);

    res.status(200).send({ token });
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export default {
  signup,
  signin,
};
