import { notFoundError } from "../errors/index.js";
import searchRepository from "../repositories/searchRepository.js";

async function search(request) {
  const medics = await searchRepository.searchMedic(request);
  if (medics.rows.length == 0) {
    throw notFoundError();
  }
  return medics;
}

export default {
  search,
};
