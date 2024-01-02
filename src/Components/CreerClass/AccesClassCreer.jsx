import React, { useState, useEffect } from "react";
import axios from "axios";
import { authStore } from "../AuthStore/AuthStore";
import Sidebar from "./Sidebar";

const AccesClassCreer = () => {
  const [id, setId] = authStore((state) => [state.id, state.setId]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/allclasses/toutes-les-classes    ?user=${id}`)
      .then((response) => {
        console.log(response, "here");
        setData(response.data);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération de la classe:", error)
      );
  }, []);

  return (
    <div>
      <ul>{data && data.length >= 0 && <Sidebar data={data} />}</ul>
      <button
        onClick={async () => {
          axios
            .get("/api/checkauth")
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        }}
      >click to check auth</button>
    </div>
  );
};

export default AccesClassCreer;
