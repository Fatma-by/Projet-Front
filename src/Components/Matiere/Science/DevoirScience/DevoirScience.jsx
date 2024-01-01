import React from "react";
import "../../Arabe/CoursArabe/ArabeMatiere.css";
import {  useNavigate } from "react-router-dom";

function DevoirScience() {
  const push = useNavigate();

  return (
    <>
    <div className="classe">
      <div className="classContainer">
        <button className="classBut">
          <p>السنة الاولى</p>
        </button>
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
        <button className="classBut" onClick={()=>{
                      push("/QuatriemeAnnee")
                    }}>
          <p>السنة الرابعة</p>
        </button>
        <button className="classBut" onClick={()=>{
                      push("/CinquiemeAnnee")
                    }}>
          <p>السنة الخامسة</p>
        </button>
        <button className="classBut" onClick={()=>{
                      push("/SixiemeAnnee")
                    }}>
          <p>السنة السادسة</p>
        </button>
      </div>
      </div>

      


      
      
    </>
  );
}

export default DevoirScience;
