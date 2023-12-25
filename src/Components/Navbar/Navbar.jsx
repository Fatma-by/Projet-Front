import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import { useCallback } from "react";
import "./Navbar.css";
import { authStore } from "../AuthStore/AuthStore";
import Logout from "../Logout/Logout";
import axios from "axios";

const Navbar = () => {
  const [name, mail, role, id, setName, setEmail, setRole, setId] = authStore(
    (state) => [
      state.name,
      state.email,
      state.role,
      state.id,
      state.setName,
      state.setEmail,
      state.setRole,
      state.setId,
    ]
  );

  const [isLogin, setISLogin] = useState(null);

  const push = useNavigate();
  const handleLoginClick = useCallback(() => {
    push("/Login");
  }, []);

  const handelSignUpClick = useCallback(() => {
    push("/s'inscrire");
  }, []);

  useEffect(() => {
    console.log(mail);
  }, [mail]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container py-2">
          <Link className="navbar-brand" to="/">
            Ma Classe
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* means */}
          <div className="collapse navbar-collapse align-middle" id="navbarNav">
            <ul className="navbar-nav ms-auto nav_ul align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Bibliothèque">
                  Bibliothèque
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ressourses
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/Science">
                      Science
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Arabe">
                      Arabe
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Francais">
                      Français
                    </a>
                  </li>
                </ul>
              </li>
              <div className="mx-3">
                {mail.length !== 0 && (
                  <>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <a className="dropdown-item" href="/Enseignant">
                            Profil
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={async function () {
                              axios
                                .post(`/api/user/logout`)
                                .then((res) => {
                                  localStorage.removeItem("user");
                                  window.location.href = "http://localhost:5173/"
                                })
                                .catch((err) => console.log(err));
                            }}
                            className="dropdown-item"
                          >
                            Se déconnecter
                          </a>
                        </li>
                      </ul>
                    </li>
                  </>
                )}
                {mail.length === 0 && (
                  <>
                    <button
                      type="button"
                      onClick={handleLoginClick}
                      className="btn1 mx-2"
                    >
                      Se connecter
                    </button>
                    <button
                      type="button"
                      onClick={handelSignUpClick}
                      className="btn2 mx-2"
                    >
                      S'inscrire
                    </button>
                  </>
                )}
              </div>
            </ul>
          </div>
          {/* end */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
