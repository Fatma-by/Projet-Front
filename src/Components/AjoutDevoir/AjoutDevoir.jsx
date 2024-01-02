import React from 'react'
import { useRef, useState, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AjoutDevoir() {
    const ref = useRef();
    const [selectedMatiere, SetslectedMatiere] = useState();
    const [selectedNiveau, SetslectedNiveau] = useState();
    const [selectedTrimestre, SetslectedTrimestre] = useState();
    const [selectedDocument, SetslectedDocument] = useState();


    const [show, setShow] = useState(false);





    const handleDropdownModifyNiveau = (event) => {
        SetslectedNiveau(event.target.textContent);
      };
      const handleDropdownModifyDocument = (event) => {
        SetslectedDocument(event.target.textContent);
      };
      const handleDropdownModify = (event) => {
        SetslectedMatiere(event.target.textContent);
      };
      const handleDropdownModifyTrimestre = (event) => {
        SetslectedTrimestre(event.target.textContent);
      };
      const handleSave = async () => {
    
        setShow(!show)}
    


  return (
<>
<div className="student">
        
        <button className="butn" onClick={() => setShow(true)}>
          Ajouter un Devoir
        </button>
      </div>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un fichier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nom de l'enseignant (e)</Form.Label>
              <Form.Control
                type="text"
                placeholder="nom de l'enseigant"
                ref={ref}
                onChange={(e) => {
                  setName(e.currentTarget.value);
                  console.log(e.currentTarget.value);
                }}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Type du document</Form.Label>
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
                  {selectedDocument == null ? "Document" : selectedDocument}
                </button>
                <ul style={{ width: "100%" }} className="dropdown-menu">
                  <li>
                    {" "}
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleDropdownModifyDocument}
                    >
                      Cours
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleDropdownModifyDocument}
                    >
                      {" "}
                      Exercice{" "}
                    </a>{" "}
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleDropdownModifyDocument}
                    >
                      {" "}
                      Devoir{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Matière</Form.Label>
             
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Niveau</Form.Label>
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
              <Form.Label>Trimestre</Form.Label>
             
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
                  {selectedMatiere == null ? "Trimestre" : selectedTrimestre}
                </button>
                <ul style={{ width: "100%" }} className="dropdown-menu">
                  <li>
                    {" "}
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleDropdownModifyTrimestre}
                    >
                      Première Trimèstre
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleDropdownModifyTrimestre}
                    >
                      {" "}
                      Deuxième Trimèstre{" "}
                    </a>{" "}
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleDropdownModifyTrimestre}
                    >
                      {" "}
                      Troisième Trimèstre{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ajouter Fichier</Form.Label>
              <Form.Control
                type="File"
                placeholder="nom de l'enseigant"
                
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


)
}

export default AjoutDevoir