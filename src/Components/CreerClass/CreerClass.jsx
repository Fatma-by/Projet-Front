import Sidebar from './Sidebar'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { authStore } from "../AuthStore/AuthStore";


function CreerClass() {
  const [id, setId] = authStore((state) => [state.id, state.setId]);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/allclasses/toutes-les-classes/?user=${id}`)
      .then((response) => {
        console.log(response, "here");
        setData(response.data);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération de la classe:", error)
      );
  }, []);
  return (
    <>
    <div className="ClassCreer">

    <ul> <Sidebar data={data} /></ul>    </div>

    </>

  )
}

export default CreerClass