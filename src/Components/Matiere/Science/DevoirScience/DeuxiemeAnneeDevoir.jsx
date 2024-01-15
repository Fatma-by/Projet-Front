import React, { useState } from "react";
import "../../Arabe/CoursArabe/ArabeMatiere.css";
import { useLocation, useNavigate } from "react-router-dom";
import AcessDevoir from "../../../AjoutDevoir/AcessDevoir";
import "../../../AjoutDevoir/AcessDevoir.css";
import { ressourceStore } from "../../../AuthStore/RessourceStore";
import axios from "axios";
import { useEffect } from "react";

function List() {
  return (
    <>
      <>premier trimestre ressource sshould be displayed here </>
    </>
  );
}

function DeuxiemeAnneeCours() {
  const [data,setData] = ressourceStore((state) => [state.data,state.setData]);
  const [showOne, setShowOne] = useState(false);
  const [params, setParams] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

 

  async function getRessource(p) {
    // fetch('/api/Ressources/getRessources',{
    //   method :'POST',
    //   headers:{
    //     "Content-type": "application/json"
    //   },
    //   body : JSON.stringify(params)
    // }).then(async res=>{
    //   const data = await res.json()
    //   setData(data.Ressources)
    //   console.log(data)
    // })
    console.log(params);
    const data = await axios
      .post("/api/Ressources/getRessources",p)
      .then(async (res) => {
        setData(res.data.Ressources);
      }).catch((err) => {console.log(err)});

    return data;
  }

  return (
    <>
      <div className="Science">
        <div className="classContainers">
          <button
            onMouseDown={async () => {
              const queryParams = new URLSearchParams(location.search);

              // Add a new query parameter
              queryParams.set("trimestre", 1);

              navigate({
                pathname: location.pathname,
                search: queryParams.toString(),
              });
              console.log(window.location.href);
            }}
            onMouseUp={async () => {
             await getRessource( {code:"s/2/d/1"});

              setShowOne(true);
            }}
            className="classButs"
          >
            <p>الثلاثي الاول</p>
          </button>
          <button className="classButs">
            <p> الثلاثي الثاني</p>
          </button>
          <button className="classButs">
            <p>الثلاثي الثالث</p>
          </button>
        </div>
        {showOne && (
          <div className="card-Container">
            <p
              className="fw-bold display-4 mb-4"
              style={{ position: "relative", left: "500px", top: "500px" }}
            >
              الثلاثــــي الأول
            </p>
            <AcessDevoir params={params} />{" "}
          </div>
        )}
      </div>
    </>
  );
}

export default DeuxiemeAnneeCours;
