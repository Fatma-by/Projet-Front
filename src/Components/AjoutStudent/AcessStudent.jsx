import React, { useState, useEffect } from "react";
import axios from "axios";
import { classStore } from "../AuthStore/AuthStore";
import AjoutStudent from "./AjoutStudent";
import "./AjoutStudent.css";
import Sidebar from "../CreerClass/Sidebar";

function AccessStudent() {
  const [classId] = classStore((state) => [state.id]);
  console.log(classId, "here");
  console.log(window.location.pathname.split("/")[2]);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `/api/Allstudents/Allstudent/?classState=${
          window.location.pathname.split("/")[2]
        }`
      )
      .then((response) => {
        console.log(data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [classId]);

  return (
    <>
      <div className="student">
        <AjoutStudent />

        <ul>
          {data.map((studentItem) => (
            <button className="btn1" key={studentItem._id}>
              <div className="btn1-p">
                {" "}
                {studentItem.NomStudent} {studentItem.PrenomStudent}{" "}
              </div>
            </button>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AccessStudent;
