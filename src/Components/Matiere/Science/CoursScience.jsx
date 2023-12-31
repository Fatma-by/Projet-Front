import React from "react";
import "../Arabe/CoursArabe/ArabeMatiere.css";
import {  useNavigate } from "react-router-dom";


function CoursScience() {
  const push = useNavigate();

  return (
    <>
    <div className="class">
      <div className="classContainer">
        
        <button className="classBut" onClick={()=>{
                      push("/DeuxiemeAnnee")
                    }}>
          <p> السنة الثانية</p>
        </button>
        <button className="classBut" onClick={()=>{
                      push("/TroisiemeAnnee")
                    }}>
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

export default CoursScience;
