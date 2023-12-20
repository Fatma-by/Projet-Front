import React, { useState, useEffect } from "react";
import axios from "axios";
import { authStore } from "../AuthStore/AuthStore";
import Sidebar from "./Sidebar";

const AccesClassCreer = () => {
  const [id, setId] = authStore((state) => [state.id, state.setId]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/allclasses/toutes-les-classes/?user=${id}`)
      .then((response) => setData(response.data))
      .catch((error) =>
        console.error("Erreur lors de la récupération de la classe:", error)
      );
  }, []);

  return (
    <div>
      <ul>
      <Sidebar data={data} />

      </ul>
    </div>
  );
};

export default AccesClassCreer;
