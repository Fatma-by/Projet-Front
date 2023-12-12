import create from 'zustand';
import { validateEmail, validatePasword } from "../../../helper/validator";


// Créez un store zustand pour gérer l'état
const useAuthStore = create((set) => ({
  email: '',
  password: '',
  emailError: false,
  passwordError: false,
  isDisabled: true,
  refmail: null,
  refpassword: null,

  // Méthode pour vérifier et définir l'e-mail
  verifyAndSetEmail: (value) => {
    if (!validateEmail(value)) {
      set((state) => ({ emailError: true, email: value }));
    } else {
      set((state) => ({ emailError: false, email: value }));
    }
  },

  // Méthode pour vérifier et définir le mot de passe
  verifyAndSetPassword: (value) => {
    if (!validatePasword(value)) {
      set((state) => ({ passwordError: true, password: value }));
    } else {
      set((state) => ({ passwordError: false, password: value }));
    }
  },

  // Effet pour mettre à jour isDisabled
  updateIsDisabled: () => {
    set((state) => ({ isDisabled: state.emailError || state.passwordError }));
  },
}));
export default useAuthStore;

