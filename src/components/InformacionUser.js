import React,{useState} from "react";

/**
 * @description Este componente se encarga de mostrar la información del usuario almacenada en el localStorage
 * @function
 * @name InformacionUser
 * @returns {JSX} JSX con la informacion del usuario.
 */
function InformacionUser() {
 //no creo que haga falta comentar mucho aquí ya que es practicamente lo mismo que en el login, registro y contacto, con la diferencia aqui el valor por defecto es el que le tengamos en el localStorage en caso de tener alguno
    const [errors, setErrors] = useState({});
    const [nombre, setNombre] = useState(localStorage.getItem("nombre"));
    const [apellido, setApellido] = useState(localStorage.getItem("apellido"));
    const [aniFav, setAniFav] = useState(localStorage.getItem("aniFav"));
    const [bDate, setBDate] = useState(localStorage.getItem("bDate)"));
    const [preference, setPreference] = useState(localStorage.getItem("preference"));

    const handleLogout = () => {
        localStorage.setItem("iniciado", "false");

      };
    //controlamos el submit de igual manera
    const handleSubmit = (event) => {
      event.preventDefault();
    
      let updates = {};
      let error = {};
    
      if (nombre && nombre.length >= 3) {
        updates.Nombre = nombre;
      } else if (nombre && nombre.length > 0) {
        error.nombre = "Nombre invalido";
      }
      if (apellido && apellido.length >= 4) {
        updates.apellidos = apellido;
      } else if (apellido && apellido.length > 0) {
        error.apellido = "Apellido invalido";
      }
      if (aniFav && aniFav.length >= 3) {
        updates.aniFav = aniFav;
      }

        updates.bDate = bDate;

      if (Object.keys(error).length > 0) {
        alert(`Error en los cambios introducidos: ${Object.keys(error).join(", ")}`);
        return;
      }
    
      // Update only the fields that were changed
      if (updates.Nombre !== undefined) {
        localStorage.setItem("nombre", updates.Nombre);
      }
      if (updates.apellidos !== undefined) {
        localStorage.setItem("apellido", updates.apellidos);
      }
      if (updates.bDate !== undefined) {
        localStorage.setItem("bDate", updates.bDate);
      }
      if (preference !== null) {
        localStorage.setItem("preference", preference);
      }
      if (updates.aniFav !== undefined) {
        localStorage.setItem("aniFav", updates.aniFav);
      }
    
      if (Object.keys(updates).length > 0) {
        // Mostrar un mensaje de confirmación
        alert("Guardado con éxito");
      } else {
        // Si no se ha cambiado ningún campo, muestra un mensaje de error
        alert("No se han realizado cambios");
      }
    
      
        // Redirige a la página de información del usuario
        window.location.href = "/informacionUser";
  }; 
    return(
        <main className="main-principal">
        <section className="main-principal-section">
            <form className="main-principal-section-form" onSubmit={handleSubmit}>
                <label className="main-principal-section-textarea-label">
                    Nombre
                    <input 
                        type="text" 
                        className="main-principal-section-form-input" 
                         value={nombre?nombre:""}
            onChange={(e) => setNombre(e.target.value)}

                    />
                </label>

                <label className="main-principal-section-textarea-label">
                    Apellidos
                    <input 
                        type="text" 
                        className="main-principal-section-form-input" 
                         value={apellido?apellido:""}
            onChange={(e) => setApellido(e.target.value)}

                    />
                </label>
                <label className="main-principal-section-textarea-label">
                    Fecha nacimiento
                    <input 
                        type="date" 
                        className="main-principal-section-form-input" 
                        value={localStorage.getItem("bDate")?localStorage.getItem("bDate"):"2001-02-03"}
                        onChange={(e)=>setBDate(e.target.value)}

                    />
                </label>
                <label className="main-principal-section-textarea-label">
                    Preferencia
                    <select onChange={(e)=>setPreference(e.target.value)} className="main-principal-section-form-input" value={preference?preference:"manga"}>
                        <option value="manga" >Manga</option>
                        <option value="anime" >Anime</option>
                   </select>
                </label>
                <label className="main-principal-section-textarea-label">
                    Manga/Anime favorito
                    <input 
                        type="text" 
                        className="main-principal-section-form-input" 
                        value={aniFav?aniFav:""}
                        onChange={(e) => setAniFav(e.target.value)}

                    />
                </label>
                <button className="update">Actualizar</button>
            </form>
            <a href="./login" onClick={handleLogout} className="logout">Logout</a>
        </section>
    </main>
    );
}

export default InformacionUser;
