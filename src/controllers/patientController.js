import patientService from "../services/patientService.js";

async function signup(req, res, next) {
  const { name, email, password } = req.body;
  try {
    await patientService.create(name, email, password);
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function signin(req, res, next) {
  const { email, password } = req.body;

  try {
    const token = await patientService.signin(email, password);

    res.status(200).send({ token });
  } catch (err) {
    next(err);
  }
}

export default {
  signup,
  signin,
};
