import { db } from "../config/database.js";

async function getPatient(email) {
  return db.query(`SELECT * FROM patients WHERE email = $1`, [email]);
}

async function create(name, email, passhash) {
  return db.query(
    `INSERT INTO patients (name, email, password) VALUES($1, $2, $3)`,
    [name, email, passhash]
  );
}

async function deleteSession(id) {
  return db.query(`DELETE FROM sessions WHERE "patientId" = $1`, [id]);
}

async function createSession(token, id) {
  return db.query(`INSERT INTO sessions (token,"patientId") VALUES($1, $2)`, [
    token,
    id,
  ]);
}

export default {
  getPatient,
  create,
  deleteSession,
  createSession,
};
