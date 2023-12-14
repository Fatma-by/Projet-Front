import "./Premiere.css";
import Button from "react-bootstrap/Button";

function Premiere() {
  return (
    <div className="P-Container">
      <div className="Pr-Container">
        <div className="titre">
          <p className="fw-bold display-4 mb-4">Cours</p>
        </div>
        <div className="Paragraphe">
          <p className=" fw-bold ">
            Étudiez bien et trouvez votre chemin vers le succès! Explorez les
            matériaux et n'hésitez pas à télécharger ce qui vous intéresse.
          </p>
        </div>
      </div>
        <div className="ButtonContainer">
          <Button variant="outline-secondary" size="lg">
            Première Trimèstre
          </Button>{" "}
          <Button variant="outline-secondary" size="lg">
            Deuxième Trimèstre
          </Button>{" "}
          <Button variant="outline-secondary" size="lg">
            Troisième Trimèstre
          </Button>{" "}
        </div>
    </div>
  );
}

export default Premiere;
