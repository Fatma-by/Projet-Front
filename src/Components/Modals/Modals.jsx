import { useRef, useState, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { authStore } from "../AuthStore/AuthStore";

function Modals({ show, setShow }) {
  const [id] = authStore((state) => [state.id]);
  const [selectedMatiere, SetslectedMatiere] = useState();
  const [selectedNiveau, SetslectedNiveau] = useState();
  const [className, setClassName] = useState();
  const ref = useRef();
  const push = useNavigate();

 

  const handleDropdownModifyNiveau = (event) => {
    SetslectedNiveau(event.target.textContent);
  };
  const handleDropdownModify = (event) => {
    SetslectedMatiere(event.target.textContent);
  };
  const handleSave = async () => {
    console.log({ className, selectedMatiere, selectedNiveau });
    setShow(!show)

    axios
      .post(`/api/classes/nouvelle-classe`, {
        NomClass: className,
        Matiere: selectedMatiere,
        Niveau: selectedNiveau,
        user: id,
      })
      .then(async (response) => {
        if (response.data) toast.success("Classe crée avec succés");
        
      })

      .catch(function (error) {
        //axios handel error
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          toast.error("Classe déjà existant");
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  };

  return (
    <>
      <Modal show={show} onHide={show}>
        <Modal.Header closeButton>
          <Modal.Title>Nouvelle Classe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nom de la Classe</Form.Label>
              <Form.Control
                type="text"
                placeholder="nom de la classe"
                ref={ref}
                onChange={(e) => {
                  setClassName(e.currentTarget.value);
                }}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Niveau Educatif</Form.Label>
              <div className="dropdown">
                <button
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    border: "#dee2e6 1px solid",
                  }}
                  type="button"
                  className="btn btn-info dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  {" "}
                  {selectedNiveau == null ? "Niveau Educatif" : selectedNiveau}
                </button>
                <ul style={{ width: "100%" }} className="dropdown-menu">
                  <li>
                    {" "}
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleDropdownModifyNiveau}
                    >
                      Première Année
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleDropdownModifyNiveau}
                    >
                      {" "}
                      Deuxième Année{" "}
                    </a>{" "}
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleDropdownModifyNiveau}
                    >
                      {" "}
                      Troisième Année{" "}
                    </a>{" "}
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleDropdownModifyNiveau}
                    >
                      {" "}
                      Quatrième Année{" "}
                    </a>{" "}
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleDropdownModifyNiveau}
                    >
                      {" "}
                      Cinquième Année{" "}
                    </a>{" "}
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleDropdownModifyNiveau}
                    >
                      {" "}
                      Sixième Année{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Matières</Form.Label>
              <div className="dropdown">
                <button
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    border: "#dee2e6 1px solid",
                  }}
                  type="button"
                  className="btn btn-info dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  {" "}
                  {selectedMatiere == null ? "Matiere" : selectedMatiere}
                </button>
                <ul style={{ width: "100%" }} className="dropdown-menu">
                  <li>
                    {" "}
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleDropdownModify}
                    >
                      Arabe
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleDropdownModify}
                    >
                      {" "}
                      Science{" "}
                    </a>{" "}
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleDropdownModify}
                    >
                      {" "}
                      Français{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;
