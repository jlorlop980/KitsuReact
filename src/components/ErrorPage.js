import "../css/ErrorPage.css";
import character from "./../images/punpun.png";
import characterDrag from "./../images/punpunDrag.png"
import React, { useState, useEffect } from 'react';



//en este componente mostramos la pagina 404, aprovecho esta página para usar el setTimeout en el que controlo que a los 5 segundos 
//se muestre la imagen de un personaje, esto se encuentra tambien dentro del metodo useEffect que se llama al renderizar el componente
/**
 * @function
 * @name ErrorPage
 * @returns {JSX} 
 * @description  JSX con la página de error 404 y la imagen del personaje que se muestra después de 5 segundos
 */
function ErrorPage() {
  const [showImage, setShowImage] = useState(false);
  const [imageSrc, setImageSrc] = useState(character);

  useEffect(() => {
    setTimeout(() => {
        setShowImage(true);
    }, 5000);
  }, []);

  const handleContextMenu = (event) => {
    event.preventDefault(); // Evita que aparezca el menú contextual por defecto del navegador
    alert("Mejor ve al listado"); // Muestra un mensaje de alerta
  }

  const handleDoubleClick = (event) => {
    event.preventDefault(); // Evita que aparezca el menú contextual por defecto del navegador
    alert("Mejor ve al Index"); // Muestra un mensaje de alerta
  }

  const handleDrag = () => {
    setImageSrc(characterDrag);
  }

  return (
    <main className="Ermain-principal">
      <section className="Ermain-principal-section">
        <div className="Ermain-principal-section-div">4</div>
        <div className="Ermain-principal-section-div">0</div>
        <div className="Ermain-principal-section-div">4</div>
      </section>
      {showImage && <img src={imageSrc} alt="" className="character-image" onDrag={handleDrag} onContextMenu={handleContextMenu} onDoubleClick={handleDoubleClick}/>}
      <p className="Ermain-principal-p">
        Lo sentimos pero la página que buscabas no está disponible de momento pero puedes
        aprovechar para ponerte al día con los mangas que tienes pendientes
      </p>
    </main>
  );
}

export default ErrorPage;


