import React from "react";
import "./../css/PackAnime.css";

function PackAnime(props) {

    return(
        <div className="packed">
            <img height="156" width="110" src={props.sauce} alt="la que sea" />
            <p className="slug">{props.name}</p>
        </div>
    );
    
}

export default PackAnime;
