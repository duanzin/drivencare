export function DuplicatedEmailError(email) {
  return {
    name: "DuplicatedEmailError",
    message: "There is already an user with given email",
    email,
  };
}

export function InvalidCredentialsError() {
  return {
    name: "InvalidCredentialsError",
    message: "Email or password are incorrect",
  };
}

export function unauthorizedError() {
  return {
    name: "UnauthorizedError",
    message: "You must be signed in to continue",
  };
}

export function conflictError(message) {
  return {
    name: "ConflictError",
    message,
  };
}

export function notFoundError() {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  };
}
