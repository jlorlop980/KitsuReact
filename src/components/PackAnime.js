import React from "react";

function PackAnime(props) {

    return(
        <div>
            <img src={props.sauce} alt="la que sea" />
            <p>{props.name}</p>
        </div>
    );
    
}

export default PackAnime;
