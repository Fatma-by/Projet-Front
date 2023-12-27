import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AccessStudent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/Allstudents/Allstudent')
      .then(response => {
        console.log(response.data);
        setData(response.data); // Mettez à jour l'état avec les données récupérées
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <ul>
        {data.map((studentItem) => (
          <li key={studentItem._id}>
            {studentItem.NomStudent}
          </li>
        ))}
      </ul>
    </>
  );
}

export default AccessStudent;
