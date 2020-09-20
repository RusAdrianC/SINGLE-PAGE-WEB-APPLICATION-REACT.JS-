import React from "react";
import {FaBook} from "react-icons/fa"


function Disciplina(props){
    return (
        <div className="disciplina">
            <h3>{props.title}</h3>
            {/* <img className="logo-disciplina" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxs_5dwUwJwYPzHLXZ1zDZuHTr4UMgL5rgdA&usqp=CAU" alt="book"/> */}
            <FaBook size="7rem" className="logo-disciplina"  />
        </div>
    );
}

export default Disciplina;