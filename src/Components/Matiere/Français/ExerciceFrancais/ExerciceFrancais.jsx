import React from "react"; 
import "../../Arabe/ExerciceArabe/ExerciceArab.css";
import {  useNavigate } from "react-router-dom";



function CoursFrancais() {
  const push = useNavigate();

  return (
    <>
    <div className="classes">
      <div className="classContainer">
        <button className="classBut" onClick={()=>{
                      push("/PremiereAnneeExercice")
                    }}>
          <p>Première Année</p>
        </button>
        <button className="classBut" onClick={()=>{
                      push("/DeuxiemeAnneeExercice")
                    }}>
          <p> Deuxième Année</p>
        </button>
        <button className="classBut" onClick={()=>{
                      push("/TroisiemeAnneeExercice")
                    }}>
          <p> Troisième Année</p>
        </button>
        <button className="classBut" onClick={()=>{
                      push("/QuatriemeAnneeExercice")
                    }}>
          <p> Quatrième Année</p>
        </button>
        <button className="classBut" onClick={()=>{
                      push("/CinquiemeAnneeExercice")
                    }}>
          <p> Cinquième Année</p>
        </button>
        <button className="classBut" onClick={()=>{
                      push("/SixiemeAnneeExercice")
                    }}>
          <p>Sixième Année</p>
        </button>
      </div>
      </div>

      


      
      
    </>
  );
}

export default  CoursFrancais;
