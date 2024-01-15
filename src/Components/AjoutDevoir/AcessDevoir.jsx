import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./AcessDevoir.css";
import { ressourceStore } from "../AuthStore/RessourceStore";

function AcessDevoir() {
  const [data, setData] = ressourceStore((state) => [
    state.data,
    state.setData,
  ]);

  return (
    <>
      <div className="flex">
        {data?.map((DevoirItem) => (
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
        ))}
      </div>
    </>
  );
}

export default AcessDevoir;
