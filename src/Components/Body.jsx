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
import DevoirScience from "../Components/Matiere/Science/DevoirScience";
import CoursScience from "../Components/Matiere/Science/CoursScience";
import CoursFrancais from "../Components/Matiere/Français/CoursFrancais";
import DevoirFrancais from "../Components/Matiere/Français/DevoirFrancais";
import ExerciceFrancais from "../Components/Matiere/Français/ExerciceFrancais";
import { Public } from "./Auth";

import ExerciceScience from "../Components/Matiere/Science/ExerciceScience";

import CardList from "./Card/CardList";

import AccesClassCreer from "../Components/CreerClass/AccesClassCreer";

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
                  <Route path="/devoir" element={<DevoirScience />} />
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
        <Route path="/Cours" element={<CoursArabe />} />
        <Route path="/AccesClassCreer" element={<AccesClassCreer />} />

        <Route path="/" element={<Navigate to="/accueil" />} />
        <Route path="*" element={<Navigate to="/accueil" />} />
      </Routes>
    </>
  );
};

export default Body;
