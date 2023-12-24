import {create} from "zustand";
import {
  validateEmail,
  validatePasword,
  validateFirstname,
  validateLastname,
  validateadresse,
} from "../../../helper/validator";

const useSignUpStore = create((set) => ({
  first: "",
  last: "",
  address: "",
  addressError: false,
  email: "",
  password: "",
  confirmPassword: "",
  FirstnameError: false,
  LastnameError: false,
  passwordError: false,
  confirmError: false,
  emailError: false,
  isDisabled: true,
  selectedRole: null,
  isChecked: false,

  // Références
  ref: null,
  refe: null,
  refadress: null,
  refmail: null,
  refpassword: null,
  refconpassword: null,

  // Méthode pour vérifier et définir le prénom
  verifyAndSetFirstname: (value) => {
    if (!validateFirstname(value)) {
      set((state) => ({ FirstnameError: true }));
    } else {
      set((state) => ({ FirstnameError: false, first: value }));
    }
  },

  // Méthode pour vérifier et définir le nom de famille
  verifyAndSetLastname: (value) => {
    if (!validateLastname(value)) {
      set((state) => ({ LastnameError: true }));
    } else {
      set((state) => ({ LastnameError: false, last: value }));
    }
  },

  // Méthode pour vérifier et définir l'adresse
  verifyAndSetAdress: (value) => {
    if (!validateadresse(value)) {
      set((state) => ({ addressError: true }));
    } else {
      set((state) => ({ addressError: false, address: value }));
    }
  },

  // Méthode pour vérifier et définir l'e-mail
  verifyAndSetEmail: (value) => {
    if (!validateEmail(value)) {
      set((state) => ({ emailError: true }));
    } else {
      set((state) => ({ emailError: false, email: value }));
    }
  },

  // Méthode pour vérifier et définir le mot de passe
  verifyAndSetPassword: (value) => {
    if (!validatePasword(value)) {
      set((state) => ({ passwordError: true }));
    } else {
      set((state) => ({ passwordError: false, password: value }));
    }
  },

  // Méthode pour vérifier et définir la confirmation du mot de passe
  verifyAndSetConfirmPassword: (value) => {
    set((state) => ({
      confirmError: state.password !== value,
      confirmPassword: value,
    }));
  },

  // Méthode pour gérer le changement d'option dans le dropdown
  handleDropdownChange: (event) => {
    set((state) => ({ selectedRole: event.target.textContent }));
  },

  // Méthode pour gérer le changement de la case à cocher
  handleCheckboxChange: () => {
    set((state) => ({ isChecked: !state.isChecked }));
  },

  // Effet pour mettre à jour isDisabled
  updateIsDisabled: () => {
    set((state) => ({
      isDisabled:
        state.FirstnameError ||
        state.emailError ||
        state.passwordError ||
        state.addressError ||
        state.LastnameError ||
        state.confirmError ||
        !state.isChecked,
    }));
  },
}));

export default useSignUpStore;
