import Science from "./Matiere/Science/Science";
import Accueil from "./Accueil/Accueil";
import Login from "./Login/Login";
import Arabe from "./Matiere/Arabe/Arabe";
import Français from "./Matiere/Français/Français";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sinscrire from "./Sinscrire/Sinscrire";
import CreerClass from "./CreerClass/CreerClass";
import AccessClass from "./AccessClass/AccessClass";
import DevoirArabe from "../Components/Matiere/Arabe/DevoirArabe/DevoirArabe";
import ExerciceArabe from "../Components/Matiere/Arabe/ExerciceArabe/ExerciceArabe";
import CoursArabe from "../Components/Matiere/Arabe/CoursArabe/CoursArabe";
import DevoirScience from "./Matiere/Science/DevoirScience/DevoirScience";
import CoursScience from "../Components/Matiere/Science/CoursScience";
import CoursFrancais from "../Components/Matiere/Français/CoursFrancais";
import DevoirFrancais from "./Matiere/Français/DevoirFrancais/DevoirFrancais";
import ExerciceFrancais from "./Matiere/Français/ExerciceFrancais/ExerciceFrancais";
import { Public } from "./Auth";
import AjoutStudent from "../Components/AjoutStudent/AjoutStudent";
import DeuxiemeAnneeDevoir from "./Matiere/Science/DevoirScience/DeuxiemeAnneeDevoir";
import TroisièmeAnneeDevoir from "./Matiere/Science/DevoirScience/TroisièmeAnneeDevoir";
import QuatriemeAnneeDevoir from "./Matiere/Science/DevoirScience/QuatriemeAnneeDevoir";
import CinquiemeAnneeDevoir from "./Matiere/Science/DevoirScience/CinquiemeAnneeDevoir";

import SixiemeAnneeDevoir from "./Matiere/Science/DevoirScience/SixiemeAnneeDevoir";

import ExerciceScience from "./Matiere/Science/ExerciceScience/ExerciceScience";
import PremiereAnneeExercice from "./Matiere/Science/ExerciceScience/PremiereAnneeExercice";
import DeuxiemeAnneeExercice from "./Matiere/Science/ExerciceScience/DeuxiemeAnneeExercice";
import PremiereAnneeDevoirFrancais from "./Matiere/Français/DevoirFrancais/PremiereAnneeDevoirFrancais";
import DeuxiemeAnneeDevoirFrancais from "./Matiere/Français/DevoirFrancais/DeuxiemeAnneeFranais";
import TroisiemeAnneeDevoirFrancais from "./Matiere/Français/DevoirFrancais/TroisiemeAnneeFrancais";
import QuatriemeAnneeDevoirFrancais from "./Matiere/Français/DevoirFrancais/QuatriemeAnneeFrancais";
import CinquiemeAnneeDevoirFrancais from "./Matiere/Français/DevoirFrancais/CinquiemeAnneeFrancais";
import SixiemeAnneeDevoirFrancais from "./Matiere/Français/DevoirFrancais/SixiemeAnneeFrancais";
import PremiereAnneeExerciceFrancais from "./Matiere/Français/ExerciceFrancais/PremiereAnneeExerciceFrancais.jsx"
import DeuxiemeAnneeExerciceFrancais from "./Matiere/Français/ExerciceFrancais/DeuxiemeAnneeExerciceFrancais.jsx";
import TroisiemeAnneeExerciceFrancais from "./Matiere/Français/ExerciceFrancais/TroisiemeAnneeExerciceFrancais.jsx";
import QuatriemeAnneeExerciceFrancais from "./Matiere/Français/ExerciceFrancais/QuatriemeAnneeExerciceFrancais.jsx";
import CinquiemeAnneeExerciceFrancais from "./Matiere/Français/ExerciceFrancais/CinquiemeAnneeExerciceFrancais.jsx";
import SixiemeAnneeExerciceFrancais from "./Matiere/Français/ExerciceFrancais/SixiemeAnneeExerciceFrancais.jsx";


import TroisiemeAnneeExercice from "./Matiere/Science/ExerciceScience/TroisiemeAnneeExercice";

import QuatriemeAnneeExercice from "./Matiere/Science/ExerciceScience/QuatriemeAnneExercice";

import CinquiemeAnneeExercice from "./Matiere/Science/ExerciceScience/CinquiemeAnneeExercice";
import SixiemeAnneeExercice from "./Matiere/Science/ExerciceScience/SixiemeAnneeExercice";

import CardList from "./Card/CardList";
import AccessStudent from "../Components/AjoutStudent/AcessStudent";

import AccesClassCreer from "../Components/CreerClass/AccesClassCreer";
import AccessDevoir from "../Components/AjoutDevoir/AcessDevoir.jsx"

const Body = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <Routes>
        <Route
          path="/Login"
          element={
            <Public>
              <Login />
            </Public>
          }
        />
        <Route
          path="/s'inscrire"
          element={
            <Public>
              <Sinscrire />{" "}
            </Public>
          }
        />

        <Route path="/science" element={<Science />} />
        <Route path="/" element={<Accueil />} />
        <Route
          path="/arabe/*"
          element={
            <>
              {pathname == "/Arabe" && <CardList />}

              <Routes>
                <Route>
                  <Route path="/devoir" element={<DevoirArabe />} />
                  <Route path="/Exercices" element={<ExerciceArabe />} />
                  <Route path="/Cours" element={<CoursArabe />} />
                </Route>
              </Routes>
            </>
          }
        />
        <Route
          path="/science/*"
          element={
            <>
              {pathname == "/Science" && <CardList />}

              <Routes>
                <Route>
                  <Route path="/Devoir" element={<DevoirScience />} />
                  <Route path="/Exercices" element={<ExerciceScience />} />
                  <Route path="/Cours" element={<CoursScience />} />
                </Route>
              </Routes>
            </>
          }
        />
        <Route
          path="/francais/*"
          element={
            <>
              {pathname == "/Francais" && <CardList />}

              <Routes>
                <Route>
                  <Route path="/devoir" element={<DevoirFrancais />} />
                  <Route path="/Exercices" element={<ExerciceFrancais />} />
                  <Route path="/Cours" element={<CoursFrancais />} />
                </Route>
              </Routes>
            </>
          }
        />
        <Route path="/français" element={<Français />} />
        <Route path="/Enseignant" element={<CreerClass />} />
        <Route path="/Eleve" element={<AccessClass />} />
        <Route path="Science/devoir/DeuxiemeAnnee" element={<DeuxiemeAnneeDevoir />} />
        <Route path="/TroisiemeAnnee" element={<TroisièmeAnneeDevoir />} />
        <Route path="/QuatriemeAnnee" element={<QuatriemeAnneeDevoir />} />
        <Route path="/CinquiemeAnnee" element={<CinquiemeAnneeDevoir />} />
        <Route path="/SixiemeAnnee" element={<SixiemeAnneeDevoir />} />
        <Route path="/PremiereAnnee" element={<PremiereAnneeExercice />} />
        <Route path="/DeuxiemeAnnee" element={<DeuxiemeAnneeExercice />} />
        <Route path="/TroisiemeAnnee" element={<TroisiemeAnneeExercice />} />
        <Route path="/QuatriemeAnnee" element={<QuatriemeAnneeExercice />} />
        <Route path="/CinquiemeAnnee" element={<CinquiemeAnneeExercice />} />
        <Route path="/SixiemeAnnee" element={<SixiemeAnneeExercice />} />
        <Route path="/PremiereAnneeExercice" element={<PremiereAnneeExerciceFrancais />} />
        <Route path="/DeuxiemeAnneeExercice" element={<DeuxiemeAnneeExerciceFrancais />} />
        <Route path="/TroisiemeAnneeExercice" element={<TroisiemeAnneeExerciceFrancais />} />
        <Route path="/QuatriemeAnneeExercice" element={<QuatriemeAnneeExerciceFrancais />} />
        <Route path="/CinquiemeAnneeExercice" element={<CinquiemeAnneeExerciceFrancais />} />
        <Route path="/SixiemeAnneeExercice" element={<SixiemeAnneeExerciceFrancais />} />
        <Route path="/AccessDevoir" element={<AccessDevoir />} />


        

        <Route
          path="/PremiereAnneeFrancais"
          element={<PremiereAnneeDevoirFrancais />}
        />
        <Route
          path="/PremiereAnneeFrancais"
          element={<PremiereAnneeDevoirFrancais />}
        />
        <Route
          path="/DeuxiemeAnneeFrancais"
          element={<DeuxiemeAnneeDevoirFrancais />}
        />
        <Route
          path="/TroisiemeAnneeFrancais"
          element={<TroisiemeAnneeDevoirFrancais />}
        />
        <Route
          path="/QuatriemeAnneeFrancais"
          element={<QuatriemeAnneeDevoirFrancais />}
        />
        <Route
          path="/CinquiemeAnneeFrancais"
          element={<CinquiemeAnneeDevoirFrancais />}
        />
        <Route
          path="/SixiemeAnneeFrancais"
          element={<SixiemeAnneeDevoirFrancais />}
        />

        <Route path="/Cours" element={<CoursArabe />} />
        <Route path="/AccesClassCreer" element={<AccesClassCreer />} />
        <Route path="/user/:id" element={<AccessStudent />} />
        <Route
          path="/classState/:id/AccessStudent"
          element={<AccessStudent />}
        />

        <Route path="/" element={<Navigate to="/accueil" />} />
        <Route path="*" element={<Navigate to="/accueil" />} />

        
      </Routes>
    </>
  );
};

export default Body;
