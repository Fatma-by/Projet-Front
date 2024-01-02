import React from "react";
import "../../Arabe/DevoirArabe/DevoirArab.css";
import {  useNavigate } from "react-router-dom";


function CoursFrancais() {
  const push = useNavigate();

  return (
    <>
    <div className="classe">
      <div className="classContainer">
        <button className="classBut" onClick={()=>{
                      push("/PremiereAnneeFrancais")
                    }}>
          <p>Première Année</p>
        </button>
        <button className="classBut" onClick={()=>{
                      push("/DeuxiemeAnneeFrancais")
                    }}>
          <p> Deuxième Année</p>
        </button>
        <button className="classBut" onClick={()=>{
                      push("/TroisiemeAnneeFrancais")
                    }}>
          <p> Troisième Année</p>
        </button>
        <button className="classBut" onClick={()=>{
                      push("/QuatriemeAnneeFrancais")
                    }}>
          <p> Quatrième Année</p>
        </button>
        <button className="classBut" onClick={()=>{
                      push("/CinquiemeAnneeFrancais")
                    }}>
          <p> Cinquième Année</p>
        </button>
        <button className="classBut" onClick={()=>{
                      push("/SixiemeAnneeFrancais")
                    }}>
          <p>Sixième Année</p>
        </button>
      </div>
      </div>

      


      
      
    </>
  );
}

export default  CoursFrancais;
