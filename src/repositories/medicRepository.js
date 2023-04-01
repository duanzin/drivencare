import { db } from "../config/database.js";

export async function getMedic(email) {
  return db.query(`SELECT * FROM medics WHERE email = $1`, [email]);
}

export async function createMedic(medic) {
  const { name, email, passhash, specialty, location } = medic;
  return db.query(
    `INSERT INTO medics (name, email, password, specialty, location) VALUES($1, $2, $3, $4, $5)`,
    [name, email, passhash, specialty, location]
  );
}

export async function deleteSession(id) {
  return db.query(`DELETE FROM sessions WHERE "medicId" = $1`, [id]);
}

export async function createSession(token, id) {
  return db.query(`INSERT INTO sessions (token,"medicId") VALUES($1, $2)`, [
    token,
    id,
  ]);
}
