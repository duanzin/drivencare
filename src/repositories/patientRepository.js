import { db } from "../config/database.js";

export async function getPatient(email) {
  return db.query(`SELECT * FROM patients WHERE email = $1`, [email]);
}

export async function createPatient(name, email, passhash) {
  return db.query(
    `INSERT INTO patients (name, email, password) VALUES($1, $2, $3)`,
    [name, email, passhash]
  );
}

export async function deleteSession(id) {
  return db.query(`DELETE FROM sessions WHERE "patientId" = $1`, [id]);
}

export async function createSession(token, id) {
  return db.query(`INSERT INTO sessions (token,"patientId") VALUES($1, $2)`, [
    token,
    id,
  ]);
}