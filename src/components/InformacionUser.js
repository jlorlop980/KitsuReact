import React,{useState} from "react";

function InformacionUser() {

    const [errors, setErrors] = useState({});
    const [nombre, setNombre] = useState(localStorage.getItem("nombre"));
    const [apellido, setApellido] = useState(localStorage.getItem("apellido"));
    const [aniFav, setAniFav] = useState(localStorage.getItem("aniFav"));
    const [bDate, setBDate] = useState(localStorage.getItem("bDate)"));
    const [preference, setPreference] = useState(localStorage.getItem("preference"));


    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!nombre||nombre.length<3) {
          setErrors({ Nombre:"nombre invalido"});
          return;
        }
         if (!apellido||apellido.length<4) {
          setErrors({ apellidos:"apellido invalido"});
          return;
        }

       if (!aniFav||aniFav.length<3) {
          setErrors({ fecha:"bDate invalido"});
          return;
        }

        if (!bDate||bDate.getFullYear<3) {
          setErrors({ fecha:"bDate invalido"});
          return;
        }

        console.log(bDate)
        

        
        alert("guardado con exito");
        localStorage.setItem("nombre",nombre)    
        localStorage.setItem("apellido",apellido)    
        localStorage.setItem("bDate",bDate)    
        localStorage.setItem("preference",preference)    
        localStorage.setItem("aniFav",aniFav)    
        // Redirect to the user information page
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
                        value={localStorage.getItem("bDate")?localStorage.getItem("bDate"):"2023-01-01"}
                        onChange={(e)=>setBDate(e.target.value)}

                    />
                </label>
                <label className="main-principal-section-textarea-label">
                    Preferencia
                    <select onChange={(e)=>setPreference(e.target.value)} className="main-principal-section-form-input" value={preference}>
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
                <button >Actualizar</button>
            </form>
        </section>
    </main>
    );
}

export default InformacionUser;
