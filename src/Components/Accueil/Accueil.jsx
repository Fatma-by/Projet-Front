import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image"; 

import "bootstrap/dist/css/bootstrap.css";
import "./Accueil.css";
import Carousel from "react-bootstrap/Carousel";

const Accueil = () => {
  return (
    <>
    <div className="text-center mt-5">
        <p className="fw-bold display-4 mb-4">
          Bienvenue dans notre site "Ma Classe"
        </p>

        <p className=" fw-normal lead ">
          Gérez votre classe et vos élèves en toute facilité. Téléchargez
          gratuitement vos cours, devoirs et exercices.
        </p>
      </div>
      <div className="container">
        <div
          className="row justify-content-center align-items-center"
          style={{ minHeight: "90vh" }}
        >
          <div className="col-12">
            <Carousel data-bs-theme="dark" className="w-100">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="image/329870-original.webp"
                  alt="First slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="image/le-groupe-de-l-école.webp"
                  alt="Second slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="image/enseignants-et-des-enfants.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      

      <div className=" mt-5" style={{ position: 'relative', left: '50px', top: '100px'}}>
      
        <p className="fw-bold display-4 mb-4">
          Créez la meilleure salle de classe possible
        </p>

        <p className=" fw-normal lead ">
        La boite à outils pour enseignants vous fera gagner du
          temps et de l’énergie <br></br>pour ce qui compte vraiment : aider les
          enfants à grandir 🌱.
        </p>
      </div>
      <div className="Image" style={{ position: 'relative', left: '750px', bottom:'150px' }}>
      <Image 
      className="img-fluid"
        src= "/image/1.png"
        rounded 
        style={{ width: '700px', height: 'auto' }}
      /> 
</div>
      
      
    </>
  );
};

export default Accueil;
