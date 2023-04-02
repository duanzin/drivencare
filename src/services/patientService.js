import bcrypt from "bcrypt";
import patientRepository from "../repositories/patientRepository.js";
import { v4 as uuidV4 } from "uuid";
import {
  DuplicatedEmailError,
  InvalidCredentialsError,
} from "../errors/index.js";

async function create(name, email, password) {
  const { rowCount } = await patientRepository.getPatient(email);
  if (rowCount) throw DuplicatedEmailError(email);

  const passhash = await bcrypt.hashSync(password, 10);
  await patientRepository.create(name, email, passhash);
}

async function signin(email, password) {
  const patient = await patientRepository.getPatient(email);
  if (patient.rows.length == 0) throw InvalidCredentialsError();

  const passmatch = await bcrypt.compare(password, patient.rows[0].password);
  if (!passmatch) throw InvalidCredentialsError();

  const token = uuidV4();
  await patientRepository.deleteSession(patient.rows[0].id);
  await patientRepository.createSession(token, patient.rows[0].id);

  return token;
}

export default {
  create,
  signin,
};
