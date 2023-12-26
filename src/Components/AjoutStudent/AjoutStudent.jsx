import { useRef, useState, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { authStore } from "../AuthStore/AuthStore";
import "./AjoutStudent.css";



function AjoutStudent() {
  const [show, setShow] = useState(false);

  const [Mail, setMail] = useState();
  const [Prenom, setPrenom] = useState();
  const [Name, setName] = useState();
  const ref = useRef();
  const refe = useRef();
  const refes = useRef();

  const push = useNavigate();

  const handleClicke = useCallback(() => {
    push("/AccesClassCreer");
  }, []);

  const handleSave = async () => {
    console.log({ Name, Prenom, Mail });

    axios
      .post(`/api/student/nouvelle-student`, {
        NomStudent: Name,
        PrenomStudent: Prenom,
        AdressMail: Mail,
      })
      .then(async (response) => {
        if (response.data) toast.success("Eleve ajouté avec succés");
        setTimeout(handleClicke(response.data), 5000);
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
    <div className="student">
      {show && <AjoutStudent show={show} setShow={setShow} />}
      <button className="butn" onClick={() => setShow(true)}>Ajouter un élève</button>
      </div>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un élève</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nom de l'élève</Form.Label>
              <Form.Control
                type="text"
                placeholder="nom de l'élève"
                ref={ref}
                onChange={(e) => {
                  setName(e.currentTarget.value);
                  console.log(e.currentTarget.value);
                }}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Prénom de l'élève"
                ref={refe}
                onChange={(e) => {
                  setPrenom(e.currentTarget.value);
                }}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Adresse mail</Form.Label>
              <Form.Control
                type="text"
                placeholder="Adresse mail"
                ref={refes}
                onChange={(e) => {
                  setMail(e.currentTarget.value);
                }}
                autoFocus
              />
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

export default AjoutStudent;
