import { db } from "../config/database.js";

async function searchMedic(query) {
  if (query.name) {
    return db.query(
      `SELECT name, specialty, location FROM medics WHERE name = $1`,
      [query.name]
    );
  }
  if (query.specialty) {
    return db.query(
      `SELECT name, specialty, location FROM medics WHERE specialty = $1`,
      [query.specialty]
    );
  }
  if (query.location) {
    return db.query(
      `SELECT name, specialty, location FROM medics WHERE location = $1`,
      [query.location]
    );
  }
}

export default {
  searchMedic,
};
