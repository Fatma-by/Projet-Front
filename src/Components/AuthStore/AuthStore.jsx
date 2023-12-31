import { create } from "zustand";
import { validateEmail, validatePasword } from "../../../helper/validator";
import { persist } from "zustand/middleware";

// Créez un store zustand pour gérer l'état
const useAuthStore = create((set) => ({
  email: "",
  password: "",
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

export const authStore = create(
  persist(
    (set, get) => ({
      name: "",
      email: "",
      role: "",
      id: "",
      setEmail: (value) => set((state) => ({ email: value })),
      setName: (name) => set((state) => ({ name: name })),
      setRole: (role) => set((state) => ({ role: role })),
      setId: (id) => set((state) => ({ id: id })),

    }),
    {
      name: "user", // name of the item in the storage (must be unique)
    }
  )
);
export const classStore = create(
  persist(
    (set, get) => ({
      NomClass: "",

      id: "",
      setNomClass: (NomClass) => set((state) => ({ NomClass: NomClass })),
      setId: (id) => set((state) => ({ id: id })) ,  
      
    } ),
    
    {
      name: "classState", // name of the item in the storage (must be unique)
    }
   
  ),

 
);
export const studentStore = create(
  persist(
    (set, get) => ({
      NomStudent: "",

      Id: "",
      setNomStudent: (NomStudent) => set((state) => ({ NomStudent: NomStudent })),
      setId: (Id) => set((state) => ({ Id: Id })),
    }),
    {
      name: "studentState", // name of the item in the storage (must be unique)
    }
  )
);

export default useAuthStore;
