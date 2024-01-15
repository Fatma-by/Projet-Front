import { useRef, useState, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./AjoutStudent.css";
import useSignUpStore from "../AuthStore/SignUpStore";
import { useParams } from "react-router-dom";

function AjoutStudent() {
  const {
    email,
    emailError,

    verifyAndSetEmail,
  } = useSignUpStore();
  console.log(window.location.pathname);

  const [show, setShow] = useState(false);
  const [mail, setMail] = useState();
  const [Prenom, setPrenom] = useState();
  const [Name, setName] = useState();
  const ref = useRef();
  const refe = useRef();
  const refes = useRef();
  const { id } = useParams();

  const push = useNavigate();

  const handleClicke = useCallback(() => {
    push(`/classState/${id}/AccessStudent`);
  }, [id, push]);

  const handleSave = async () => {
    console.log({ Name, Prenom, email });

    axios
      .post(`/api/student/nouvelle-student`, {
        NomStudent: Name,
        PrenomStudent: Prenom,
        AdressMail: email,
        class: id,
      })
      .then(async (response) => {
        if (response.data) toast.success("Eleve ajouté avec succés");
        setTimeout(handleClicke(response.data), 5000);
      })

      .catch(function (error) {
        if (error.response) {
          toast.error("Elève déjà existant");
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  };
  0;
  return (
    <>
      <div>
        <button className="btn1" onClick={() => setShow(true)}>
          <p className="btn1-p">Ajouter un élève</p>
        </button>
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
                  console.log(e.currentTarget.value);
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
                  verifyAndSetEmail(e.target.value);
                }}
                autoFocus
              />
              {emailError && <p>entrer une adresse mail valide</p>}
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
