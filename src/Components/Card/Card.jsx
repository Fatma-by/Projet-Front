import { Link, } from "react-router-dom";
import "./card.css";

export function Card(props) {
  console.log(props);


  return (
    <div>
      <Link to={props.data.name}>
        {" "}
        <div className="cardList" >
          <div key={props.data.id} className="MatiereCard">
            <img
              src={props.data.image}
              alt="Matiere-img"
              className="MatiereImage"
            ></img>
            <div className="MatiereCard__content">
              <h3 className="MatiereName">{props.data.name}</h3>
              <div className="displayStack__1"></div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
