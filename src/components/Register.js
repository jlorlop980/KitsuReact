import React, {useState} from "react";
import "../css/Register.css";

//Otra vez mas el mismo sistema de validación de formulario salvo que aqui cuando nos registramos nos guardamos en el localStorage las credenciales(no es la forma más segúra)
function Register(){
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});

  const handleEmailBlur = () => {
    const newErrors = { ...errors };

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is not valid";
    } else {
      delete newErrors.email;
    }

    setErrors(newErrors);
  };

  const handleUsernameBlur = () => {
    const newErrors = { ...errors };

    if (!username) {
      newErrors.username = "Username is required";
    } else if (username.length < 8) {
      newErrors.username = "Username must be at least 8 characters";}

      else {
      delete newErrors.username;
    }

    setErrors(newErrors);
  };

  const handlePasswordBlur = () => {
    const newErrors = { ...errors };

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else {
      delete newErrors.password;
    }

    setErrors(newErrors);
  };

  const handlePassword2Blur = () => {
    const newErrors = { ...errors };

    if (!password2) {
      newErrors.password2 = "Please confirm your password";
    } else if (password !== password2) {
      newErrors.password2 = "Passwords do not match";
    } else {
     delete newErrors.password2;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate all the fields again to make sure that the user didn't leave any invalid input
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is not valid";
    }

    if (!username) {
      newErrors.username = "Username is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!password2) {
      newErrors.password2 = "Please confirm your password";
    } else if (password !== password2) {
      newErrors.password2 = "Passwords do not match";
    }

    if (Object.keys(newErrors).length === 0) {
      // save the user data in local storage
      localStorage.setItem("email", email);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      // redirect to the login page
      window.location.href = "/login";
    } else {
      setErrors(newErrors);
    }
  };

    return(
        <main className="Rmain-principal">
            <section className="Rmain-principal-section">
                <form action="./assets/js/index.js" className="Rmain-principal-section-form">  
                    <label htmlFor="email" className="Rmain-principal-section-form-label">Email</label>
                    <input
                        type="text"
                        id="email"
                        className="Rmain-principal-section-form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={handleEmailBlur}
                        />
                        
                        <div className="Rmain-principal-section-form-error" style={{color:"#eb584d"}}>
                          {errors.email}
                        </div>
                      
                     <label htmlFor="user" className="Rmain-principal-section-form-label">Usuario</label>
                    <input 
                        type="text"
                        id="user"
                        className="Rmain-principal-section-form-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onBlur={handleUsernameBlur}
                    />
                    <div className="Rmain-principal-section-form-error" style={{color:"#eb584d"}}>
                        {errors.username}
                    </div>
                    <label htmlFor="pass" className="Rmain-principal-section-form-label">Contraseña</label>
                    <input 
                        type="password"
                        id="pass"
                        className="Rmain-principal-section-form-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={handlePasswordBlur}
                    />
                    <div className="Rmain-principal-section-form-error" style={{color:"#eb584d"}}>
                        {errors.password}
                    </div>
                    <label htmlFor="rpass" className="Rmain-principal-section-form-label">Repetir contraseña</label>
                    <input 
                        type="password"
                        id="rpass"
                        className="Rmain-principal-section-form-input"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        onBlur={handlePassword2Blur}
                     />
                    <div className="Rmain-principal-section-form-error" style={{color:"#eb584d"}}>
                        {errors.password2}
                    </div>
                </form>
            </section>
        
            <a href="./login" className="Rmain-principal-section-a" onClick={handleSubmit}>Enviar</a>
            <a href="./login" >ya tengo una cuenta</a>
        </main>
    );

}

export default Register;
