import React from "react";
import { useRef, useState, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AjoutDevoir() {
  const ref = useRef();
  const push = useNavigate();

  const [selectedMatiere, SetslectedMatiere] = useState('fdsfsdf');
  const [selectedNiveau, SetslectedNiveau] = useState('dqsfsdf');
  const [selectedTrimestre, SetslectedTrimestre] = useState('fdsfsdf');
  const [selectedDocument, SetslectedDocument] = useState('fdfsdfsd');
  const [Name, setName] = useState('fdsfsdfsdfsdf');
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  function handleFileSelect(e) {
    console.log(e)
    const fileInput = event.target;
    
    if (fileInput.files.length > 0) {
        const selectedFile = fileInput.files[0];
  
        // Create a FileReader
        const reader = new FileReader();
  
        // Define the onload event handler
        reader.onload = function (e) {
            const fileContent = e.target.result;
            console.log('File Content:', fileContent);
            setFile(fileContent)
  
            // You can use the file content here as needed
        };
  
        // Read the file as text or data URL, depending on your needs
        // For example, to read as text:
        // reader.readAsText(selectedFile);
  
        // To read as data URL (Base64 encoded):
        reader.readAsDataURL(selectedFile);
    }
  }
  
  const handleFileChange = (e) => {
    handleFileSelect()
  };
  const handleClicke = useCallback(() => {
    push(`/AccessDevoir`);
  }, []);


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
    try {
      console.log(file)
      const response = await axios.post("/api/api/upload",{file} ,{
        headers : { "name" : Name,
        "selectedNiveau": selectedNiveau,
        "selectedTrimestre": selectedTrimestre,
        "selectedMatiere": selectedMatiere
        
      }
      }).then(async (response) => {
        console.log(response.data)
        if (response.data) toast.success("Eleve ajouté avec succés");
        setTimeout(handleClicke(response.data), 5000);
      })

      

      console.log(response.data);
      toast.success("Fichier ajouté avec succès!");
    } catch (error) {
      console.error("Erreur lors de l'envoi du fichier", error.response);
      toast.error("Erreur lors de l'envoi du fichier");
    }

    setShow(false);
  };


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
                name="Name"
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
                      value="deuxieme"
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
                type="file"
                onChange={handleFileChange}

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
  );
}

export default AjoutDevoir;
