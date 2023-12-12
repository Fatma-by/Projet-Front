import React from "react";
import "./Sinscrire.css";
import axios from "axios";
import toast from "react-hot-toast";
import useSignUpStore from "../AuthStore/SignUpStore";


import { useEffect } from "react";

function SignUpSection() {
  const {
    first,
    last,
    address,
    addressError,
    email,
    password,
    confirmPassword,
    FirstnameError,
    LastnameError,
    passwordError,
    confirmError,
    emailError,
    isDisabled,
    selectedRole,
    isChecked,
    ref,
    refe,
    refadress,
    refmail,
    refpassword,
    refconpassword,
    verifyAndSetFirstname,
    verifyAndSetLastname,
    verifyAndSetAdress,
    verifyAndSetEmail,
    verifyAndSetPassword,
    verifyAndSetConfirmPassword,
    handleDropdownChange,
    handleCheckboxChange,
    updateIsDisabled,
  } = useSignUpStore();

  useEffect(() => {
    updateIsDisabled();
  }, [
    FirstnameError,
    emailError,
    passwordError,
    addressError,
    LastnameError,
    confirmError,
    isChecked,
    updateIsDisabled,
  ]);


  // function pour récuéprer les inputs avec axios

  const handleSubmit = async () => {
    console.log({ first, last, email, password, address, selectedRole });
    axios
      .post(`/api/user/register`, {
        Nom: first,
        Prenom: last,
        Adressepostale: address,
        Role: selectedRole,
        email: email,
        password: password,
      })
      .then(async (response) => {
        if (response.data) toast.success("Compte crée avec succés");
      })
      .catch(function (error) {
        //axios handel error
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          toast.error("utilisateur déjà existant");
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
    <div style={{ display: "flex", alignContent: "center" }}>
      <div className="card-body p-md-5">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
              S'inscrire
            </p>

            <form className="mx-1 mx-md-4">
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    ref={ref}
                    onChange={(e) => {
                      verifyAndSetFirstname(e.target.value);
                      console.log(e.target.value);
                    }}
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    placeholder="Nom"
                  />
                </div>
              </div>
              {FirstnameError && <p>entrer un nom valide</p>}
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    ref={refe}
                    onChange={(e) => {
                      verifyAndSetLastname(e.target.value);
                      console.log(e.target.value);
                    }}
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    placeholder="Prenom"
                  />
                </div>
              </div>
              {LastnameError && <p>entrer un prenom valide</p>}

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fa-solid fa-map-location fa-lg me-3 fa-fw">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="12"
                    viewBox="0 0 384 512"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                </i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    ref={refadress}
                    onChange={(e) => {
                      verifyAndSetAdress(e.target.value);
                      console.log(e.target.value);
                    }}
                    type="text"
                    id="form3Example3c"
                    className="form-control"
                    placeholder="Adresse Postale"
                  />
                </div>
              </div>
              {addressError && <p>entrer une adresse valide</p>}

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
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
                      {selectedRole == null ? "Role" : selectedRole}
                    </button>
                    <ul style={{ width: "100%" }} className="dropdown-menu">
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleDropdownChange}
                        >
                          Enseignant
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleDropdownChange}
                        >
                          {" "}
                          Eleve{" "}
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    ref={refmail}
                    onChange={(e) => {
                      verifyAndSetEmail(e.target.value);
                      console.log(e.target.value);
                    }}
                    type="text"
                    id="form3Example3c"
                    className="form-control"
                    placeholder="Adresse Email"
                  />
                </div>
              </div>
              {emailError && <p>entrer une adresse mail valide</p>}

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    ref={refpassword}
                    onChange={(e) => {
                      verifyAndSetPassword(e.target.value);
                      console.log(e.target.value);
                    }}
                    type="password"
                    id="form3Example4c"
                    className="form-control"
                    placeholder="Mot de Passe"
                  />
                </div>
              </div>
              {passwordError && <p>entrer un mot de passe valide</p>}

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    ref={refconpassword}
                    onChange={(e) =>
                      verifyAndSetConfirmPassword(e.target.value)
                    }
                    type="password"
                    id="form3Example4cd"
                    className="form-control"
                    placeholder="Repeter votre mot de passe"
                  />
                </div>
              </div>
              {confirmError && <p>mot de passe ne correspond pas</p>}

              <div className="form-check d-flex justify-content-center mb-5">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3c"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="form2Example3">
                  I agree all statements in <a href="#!">Terms of service</a>
                </label>
              </div>

              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={handleSubmit}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpSection;
