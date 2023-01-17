import React, {useState} from "react";
import "../css/Contacto.css";

//En este componente controlo la pagina de contacto
function Contacto(){
   //aqui declaro todos los estados  que uso para controlar los imputs 
    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [mensaje, setMensaje] = useState("");
    //con este estado controlo los errores
    const [errors, setErrors] = useState({});
    //por ultimo e me sirve para controlar el estado de focus en el campo textarea
    const [focused, setIsFocused] = useState(false);


    //con esta función controlamos el evento de blur de el campo email, es decir al perder el focus
    //en caso de estar incorrecto no añadiria al estado de errores un atributo email con el error para posteriormente mostrarlo
    const handleEmailBlur = () => {
        const newErrors = { ...errors };

        if (!email) {
          newErrors.email = "Email requerido";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          newErrors.email = "Email no valido";
        } else {
          delete newErrors.email;
        }

        setErrors(newErrors);
     };

        //exactamente lo mismo solo que para el nombre en este caso compuebo que al menos tenga 3 letras
      const handleNombreBlur = () => {
        const newErrors = { ...errors };

        if (!nombre) {
          newErrors.nombre = "El nombre es obligatorio";
        } else if (nombre.length < 3) {
          newErrors.nombre = "El nombre debe tener al menos 3 letras";
        } else {
          delete newErrors.nombre;
        }

        setErrors(newErrors);
      };


    //lo mismo de nuevo pero para los apellidos y pruebo al menos 5 letras
    const handleApellidoBlur = () => {
        const newErrors = { ...errors };

        if (!apellido) {
          newErrors.apellido = "Los apellidos son obligatorios";
        } else if (apellido.length < 5) {
          newErrors.apellido = "Los apellidos deben tener al menos 5 letras";
        } else {
          delete newErrors.apellido;
        }

        setErrors(newErrors);
      };
    //para controlar el blur del propio mensaje en el que controlamos que al menos contenga 10 caracteres con un máximo de 255
    const handleMensajeBlur = () => {
        const newErrors = { ...errors };
        setIsFocused(false)
        if (!mensaje) {
          newErrors.mensaje = "El mensaje es obligatorio";
        } else if (mensaje.length < 5||mensaje.length>255) {
          newErrors.mensaje = "El mensaje deben tener entre 10 y 255 letras";
        } else {
          delete newErrors.mensaje;
        }

        setErrors(newErrors);
      };

        //aqui un cotrolador muy importante ya que aqui controlamos el propio submit del formulario
        //en el cual por su acaso se vuelve a comprobar los parametros
        
      const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!email) {
          newErrors.email = "Email obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          newErrors.email = "Email no valido";
        }

        if (!nombre) {
          newErrors.nombre = "El nombre es obligatorio";
        } else if (nombre.length < 3) {
          newErrors.nombre = "El usuario debe tener al menos 3 letras";
        }

        if (!apellido) {
          newErrors.apellido = "Los apellidos son obligatorios";
        } else if (apellido.length < 5) {
          newErrors.apellido = "Los apelidos tienen que tener minimo 8 letras";
        }

        if (!mensaje) {
          newErrors.mensaje = "Mensaje necesario";
        } else if (mensaje.length < 5||mensaje.length>255) {
          newErrors.password2 = "El mensaje tiene que contener entre 5 y 255 caracteres";
        }

        if (Object.keys(newErrors).length === 0) {
          // save the user data in local storage
          // redirect to the login page
            alert("mensaje enviado con exito");
          window.location.href = "/";
        } else {
          setErrors(newErrors);
        }
      };

    //lo unico importante a comentar aqui es que utilizamos tanto onchange como onblur para controlar los formularios
    return( 
        <>
            <main className="Cmain-principal">
                <section className="Cmain-principal-section">
                    <form id="contacto" action="./assets/js/index.js" className="Cmain-principal-section-form">  
                        <label htmlFor="nomb" className="Cmain-principal-section-form-label">Nombre</label>
                        <input
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            onBlur={handleNombreBlur}
                            type="text" 
                            id="nomb" 
                            className="Cmain-principal-section-form-input"/>
                            <div style={{color:"red"}}>{errors.nombre}</div>
                        <label htmlFor="appe" className="Cmain-principal-section-form-label">Apellido</label>
                        <input
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            onBlur={handleApellidoBlur}
                            type="text" 
                            id="appe" 
                            className="Cmain-principal-section-form-input" 
                        />
                        <div style={{color:"red"}}>{errors.apellido}</div>
                        <label htmlFor="mail" className="Cmain-principal-section-form-label">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={handleEmailBlur}
                            type="email" 
                            id="mail" 
                            className="Cmain-principal-section-form-input" 
                        />
                        <div style={{color:"red"}}>{errors.email}</div>
                    </form>
                    <div className="Cmain-principal-section-textarea">
                        <label htmlFor="mensa" className="Cmain-principal-section-textarea-label">Mensaje</label>
                        <textarea
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={handleMensajeBlur}
                            form="contacto" 
                            id="mensa" 
                            className={`Cmain-principal-section-form-input Cmain-pricipal-section-form-mensaje ${focused?"focusOn":"focusOff"}`}>
                        </textarea>
                        <div style={{color:"red"}}>{errors.mensaje}</div>
                    </div>        
                </section>
                <a href="/listado" onClick={handleSubmit} className="Cmain-principal-section-a">Enviar</a>

            </main>
        </> 
    ); 

}

export default Contacto
