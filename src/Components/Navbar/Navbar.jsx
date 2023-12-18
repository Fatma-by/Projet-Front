import React from 'react'
import { Link,useNavigate } from "react-router-dom";
import Login from '../Login/Login';
import { useCallback } from "react";
import "./Navbar.css"



const Navbar = () => {
    const push = useNavigate();
    const handleLoginClick = useCallback(() => {
       
        push("/Login");
      }, []);


      const handelSignUpClick= useCallback(() => {
       
        push("/s'inscrire");
      }, []);
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container py-2">
                    <Link className="navbar-brand" to="/">Ma Classe <img id="img1" src="image\2.png" 
/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* means */}
                    <div className="collapse navbar-collapse align-middle" id="navbarNav">
                        <ul className="navbar-nav ms-auto nav_ul align-items-center">
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Bibliothèque">Bibliothèque</Link>
                            </li>
                           
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ressourses
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/Science">Science</a></li>
                                    <li><a className="dropdown-item" href="/Arabe">Arabe</a></li>
                                    <li><a className="dropdown-item" href="/Francais">Français</a></li>
                                </ul>
                            </li>
                            <div className="mx-3">
                                <button type="button" onClick={handleLoginClick} className="btn1 mx-2">Se connecter</button>
                                <button type="button" onClick={handelSignUpClick} className="btn2 mx-2">S'inscrire</button>
                            </div>
                            
                        </ul>
                    </div>
                    {/* end */}
                </div>
            </nav>
        </>
    )
}

export default Navbar
