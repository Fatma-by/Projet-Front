import { Card } from "../../Card/Card";
import CardList from "../../Card/CardList";
import '../../Card/Card.css'
import { Routes, Route, Navigate } from "react-router-dom";
import ExerciceScience from "./ExerciceScience";


export default function Science() {
  return (
    <>

<Routes>
        <Route>
          <Route path="/ExerciceScience" element={<ExerciceScience/>} />
          

        </Route>
      </Routes>

      <div>

            <CardList/>

      </div>
    </>
  );
}
