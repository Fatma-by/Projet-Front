import React, { useState } from 'react';
import AjoutDevoir from '../../../AjoutDevoir/AjoutDevoir';

function PremiereAnneeDevoirFrancais() {
  const [selectedTrim, setSelectedTrim] = useState(''); // État local pour suivre la section sélectionnée

  return (
    <>

    <AjoutDevoir/>
      <div className='Francais'>
        <div className='classContainers'>
          <button
            className="classBut"
            onClick={() => setSelectedTrim('Premiere')}
          >
            <p>Première Trimèstre</p>
          </button>
          <button
            className="classBut"
            onClick={() => setSelectedTrim('Deuxieme')}
          >
            <p>Deuxième Trimèstre</p>
          </button>
          <button
            className="classBut"
            onClick={() => setSelectedTrim('Troisieme')}
          >
            <p>Troisième Trimèstre</p>
          </button>
        </div>

        <div className='contentContainer'>
          {selectedTrim === 'Premiere' && (
            <div>
             
              <p>Première Trimèstre</p>
            </div>
          )}
          {selectedTrim === 'Deuxieme' && (
            <div>
              <p>Contenu pour la deuxième trimestre</p>
            </div>
          )}
          {selectedTrim === 'Troisieme' && (
            <div>
              <p>Contenu pour la troisième trimestre</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PremiereAnneeDevoirFrancais;
