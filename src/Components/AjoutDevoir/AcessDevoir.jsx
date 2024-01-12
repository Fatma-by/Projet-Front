import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./AcessDevoir.css";

function AcessDevoir() {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .post(
        "/api/Ressources/getRessources" 
      )
      .then((response) => {
        setData(response.data); // Mettez à jour l'état avec les données récupérées
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
    
      {data.map((DevoirItem) => (
        <div className="card-container">
        <div key={DevoirItem._id} className="card">
          <div className="card-body">
            <h5 className="card-title">Devoir</h5>
            <p className="card-text">
              <strong>Enseignant:</strong> {DevoirItem.Enseignant}
            </p>
            <p className="card-text">
              <strong>Matière:</strong> {DevoirItem.Matiere}
            </p>
            <p className="card-text">
              <strong>Niveau:</strong> {DevoirItem.Niveau}
            </p>
            <p className="card-text">
              <strong>Trimestre:</strong> {DevoirItem.Trimestre}
            </p>
            <a href={DevoirItem.Document.url} className="btn btn-primary">
              Voir le devoir
            </a>
          </div>
        </div>
        </div>
      ))}
    </>
  );
}

export default AcessDevoir;
