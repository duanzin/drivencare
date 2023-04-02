import searchService from "../services/searchService.js";

async function search(req, res, next) {
  try {
    const medics = await searchService.search(req.params);
    res.status(200).send(medics);
  } catch (err) {
    next(err);
  }
}

export default {
  search,
};
