import { db } from "../config/database.js";

export async function getMedic(email) {
  return db.query(`SELECT * FROM medics WHERE email = $1`, [email]);
}

export async function createMedic(name, email, passhash) {
  return db.query(
    `INSERT INTO medics (name, email, password) VALUES($1, $2, $3)`,
    [name, email, passhash]
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
