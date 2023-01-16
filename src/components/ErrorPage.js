import "../css/ErrorPage.css";
import character from "./../images/punpun.png";
import React, { useState, useEffect } from 'react';

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

