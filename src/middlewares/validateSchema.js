import { conflictError } from "../errors/index.js";

export function validateSchema(schema) {
  return (req, res, next) => {
    const validation = schema.validate(req.body, { abortEarly: false });

    if (validation.error) {
      throw conflictError(
        validation.error.details.map((detail) => detail.message)
      );
    }

    next();
  };
}
