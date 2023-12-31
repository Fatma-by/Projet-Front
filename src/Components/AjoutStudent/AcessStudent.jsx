import React, { useState, useEffect } from "react";
import axios from "axios";
import { classStore } from "../AuthStore/AuthStore";

function AccessStudent() {
  // Utilisez classStore pour obtenir l'ID de la classe
  const [classId] = classStore((state) => [state.id]);
  console.log(classId);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`/api/Allstudents/Allstudent/?classState=${classId}`)
      .then((response) => {
        console.log(data);
        setData(response.data); // Mettez à jour l'état avec les données récupérées
      })
      .catch((error) => {
        console.error(error);
      });
  }, [classId]); // Utilisez classId dans le tableau de dépendances

  return (
    <>
      <ul>
        {data.map((studentItem) => (
          <li key={studentItem._id}>{studentItem.NomStudent}</li>
        ))}
      </ul>
    </>
  );
}

export default AccessStudent;
