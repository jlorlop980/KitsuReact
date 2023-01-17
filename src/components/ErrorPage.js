import "../css/ErrorPage.css";
import character from "./../images/punpun.png";
import React, { useState, useEffect } from 'react';

/**
 * @function
 * @name ErrorPage
 * @returns {JSX} 
 * @description  JSX con la página de error 404 y la imagen del personaje que se muestra después de 5 segundos
 */

//en este componente mostramos la pagina 404, aprovecho esta página para usar el setTimeout en el que controlo que a los 5 segundos 
//se muestre la imagen de un personaje, esto se encuentra tambien dentro del metodo useEffect que se llama al renderizar el componente
//
function ErrorPage() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
        setShowImage(true);
    }, 5000);
  }, []);

  return (
    <main className="Ermain-principal">
      <section className="Ermain-principal-section">
        <div className="Ermain-principal-section-div">4</div>
        <div className="Ermain-principal-section-div">0</div>
        <div className="Ermain-principal-section-div">4</div>
      </section>
      {showImage && <img src={character} alt="" className="character-image" />}
      <p className="Ermain-principal-p">
        Lo sentimos pero la página que buscabas no esta disponible de momento pero puedes
        aprovechar para ponerte el dia con los mangas que tienes pendientes
      </p>
    </main>
  );
}

export default ErrorPage;

