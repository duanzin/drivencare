import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import medicRepository from "../repositories/medicRepository.js";
import {
  DuplicatedEmailError,
  InvalidCredentialsError,
} from "../errors/index.js";

async function create(info) {
  const { rowCount } = await medicRepository.getMedic(info.email);
  if (rowCount) throw DuplicatedEmailError(info.email);

  const passhash = await bcrypt.hashSync(info.password, 10);
  await medicRepository.create(info, passhash);
}

async function signin(email, password) {
  const medic = await medicRepository.getMedic(email);
  if (medic.rows.length == 0) throw InvalidCredentialsError();

  const passmatch = await bcrypt.compare(password, medic.rows[0].password);
  if (!passmatch) throw InvalidCredentialsError();

  const token = uuidV4();
  await medicRepository.deleteSession(medic.rows[0].id);
  await medicRepository.createSession(token, medic.rows[0].id);

  return token;
}

export default {
  create,
  signin,
};
