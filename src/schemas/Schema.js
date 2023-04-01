import joi from "joi";

export const patientSignup = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export const medicSignup = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  specialty: joi.string().required(),
  location: joi.string().required(),
});

export const signin = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
