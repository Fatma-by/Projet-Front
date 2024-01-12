import React, { useState } from 'react'
import "../../Arabe/CoursArabe/ArabeMatiere.css";
import { useLocation,useNavigate } from 'react-router-dom';
import AcessDevoir from '../../../AjoutDevoir/AcessDevoir';

 function List (){
  return <><>premier trimestre ressource sshould be displayed here </></>
 }



function DeuxiemeAnneeCours() {
  const [showOne, setShowOne]=useState(false)
  const [params,setParams] = useState({})
  const location = useLocation();
  const navigate = useNavigate()

  function setQuery (){
    console.log(window.location.href)
    if(window.location.href =="http://localhost:5173/Science/Devoir/DeuxiemeAnnee?trimestre=1")
    {
      setParams({
        Niveau:"Deuxieme Année",
        Matiere: "Science",
        Trimestre: "Première Trimèstre"

      })
    }
  }
   

  return (

    <>
    <div className='Science'>
        <div className='classContainers'>
    <button onClick={()=>{

const queryParams = new URLSearchParams(location.search);

// Add a new query parameter
queryParams.set('trimestre', 1);

navigate({
  pathname: location.pathname,
  search: queryParams.toString(),
});

setQuery({


})

      setShowOne(true)
    }} className="classButs">
          <p >الثلاثي الاول</p>
        </button>
        <button className="classButs">
          <p>  الثلاثي الثاني</p>
        </button>
        <button className="classButs">
          <p>الثلاثي الثالث</p>
        </button>
        </div>
        {showOne && <AcessDevoir params={params}/> }
    </div>
    </>
  )
}

export default DeuxiemeAnneeCours