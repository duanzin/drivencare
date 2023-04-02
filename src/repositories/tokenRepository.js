import { db } from "../config/database.js";

async function patient(token) {
  return db.query(`SELECT "patientId" FROM sessions WHERE token=$1`, [token]);
}

async function medic(token) {
  return db.query(`SELECT "medicId" FROM sessions WHERE token=$1`, [token]);
}

export default {
  patient,
  medic,
};
