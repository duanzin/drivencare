import joi from "joi";

export const signup = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export const signin = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
