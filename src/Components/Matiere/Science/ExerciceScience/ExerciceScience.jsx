import React from "react";
import "../../Arabe/CoursArabe/ArabeMatiere.css";
import {  useNavigate } from "react-router-dom";


function ExerciceScience() {
  const push = useNavigate();

  return (
    <>
    <div className="classes">
      <div className="classContainer">
        <button className="classBut" onClick={()=>{
                      push("/PremiereAnnee")
                    }}>
          <p>السنة الاولى</p>
        </button>
        <button className="classBut">
          <p> السنة الثانية</p>
        </button>
        <button className="classBut">
          <p>السنة الثالثة</p>
        </button>
        <button className="classBut">
          <p>السنة الرابعة</p>
        </button>
        <button className="classBut">
          <p>السنة الخامسة</p>
        </button>
        <button className="classBut">
          <p>السنة السادسة</p>
        </button>
      </div>
      </div>

      


      
      
    </>
  );
}

export default ExerciceScience;
