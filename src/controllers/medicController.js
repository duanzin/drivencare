import medicService from "../services/medicService.js";

async function signup(req, res, next) {
  try {
    await medicService.create(req.body);
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function signin(req, res, next) {
  const { email, password } = req.body;
  try {
    const token = await medicService.signin(email, password);

    res.status(200).send({ token });
  } catch (err) {
    next(err);
  }
}

export default {
  signup,
  signin,
};
