import React from "react";
import "../../Arabe/CoursArabe/ArabeMatiere.css";
import {  useNavigate,Navigate } from "react-router-dom";
import AjoutDevoir from "../../../AjoutDevoir/AjoutDevoir"

function DevoirScience() {
  const push = useNavigate();

  return (
    <>
    <AjoutDevoir/>
    <div className="classe">
      <div className="classContainer">
        <button className="classBut">
          <p>السنة الاولى</p>
        </button>
        <button className="classBut" onClick={()=>{
                            push('/Science/Devoir/DeuxiemeAnnee')       }}>
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
