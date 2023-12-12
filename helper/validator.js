const USERNAME_MIN_LENGTH = 4;
const USERNAME_MAX_LENGTH = 24;

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const FIRSTNAMEREGEX = /^[a-zA-Z0-9]{4,24}$/;
const LASTNAMEREGEX = /^[a-zA-Z0-9]{4,24}$/;

const addressRegex = /^[a-zA-Z0-9\s,'-]*$/;

export const validateFirstname = (firstname) => {
  if (
    firstname.length > 24 ||
    firstname.length < 4 ||
    !firstname.match(FIRSTNAMEREGEX)
  ) {
    return false;
  } else return true;
};

export const validateLastname = (lastname) => {
  if (
    lastname.length > 24 ||
    lastname.length < 4 ||
    !lastname.match(LASTNAMEREGEX)
  ) {
    return false;
  } else return true;
};

export const validatePasword = (password) => {
  // TODO add more password validation
  if (password.match(PASSWORD_REGEX)) {
    return true;
  } else return false;
};



export const validateEmail = (email) => {
  if (email.match(EMAIL_REGEX)) {
    return true;
  }
  return false;
};

export const validateadresse = (address) => {
  if (address.match(addressRegex)) {
    return true;
  }
  return false;
};
