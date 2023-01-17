import React, { useState } from "react";
import "../css/Login.css";

function Login(props) {
  
    const [errors, setErrors] = useState({});
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
    event.preventDefault();
    const storedUser = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");
    console.log("usuario guardado: "+storedUser)
    console.log("pass guardado: "+storedPass)
    
    if (!username) {
      setErrors({ user: "El usuario es requerido" });
      return;
    }

    if (!password) {
      setErrors({ pass: "La contraseña es requerida" });
      return;
    }

    if (storedUser !== username || storedPass !== password) {
      setErrors({ user: "El usuario o contraseña son incorrectos" });
      return;
    }
    alert("iniciado");
    localStorage.setItem("iniciado","true")    
    // Redirect to the user information page
    window.location.href = "/informacionUser";
  };

  return (
    <main className="main-principal">
      <section className="main-principal-section">
             
  
      <form
          action="./assets/js/index.js"
          className="main-principal-section-form"
          onSubmit={handleSubmit}
        >
        <div className="Rmain-principal-section-form-error" style={{color:"#eb584d"}}>
            {errors.user}
        </div>
          <label htmlFor="user" className="Rmain-principal-section-form-label">Usuario</label>
        <input 
            type="text"
            id="user"
            className="Rmain-principal-section-form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
           <label htmlFor="pass" className="Rmain-principal-section-form-label">Contraseña</label>
        <input 
            type="password"
            id="pass"
            className="Rmain-principal-section-form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
                   </form>
      </section>
            <a href="#" className="main-principal-section-a" onClick={handleSubmit}>
            Enviar
          </a>

      <a href="./register">Crear una cuenta</a>
    </main>
  );
}

export default Login;
