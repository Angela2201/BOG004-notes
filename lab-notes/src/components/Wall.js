import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListNotes } from "./ListNotes.js";
import { Notes } from "./Notes.js"

const Wall = () => {
    //Se utiliza "navigate" para redireccionar a un componente en especifico
    let Navigate = useNavigate()
    //Se crea función para el botón de Cerrar Sesión
    function LogoutButton(e) {
        e.preventDefault();
        console.log("Tu click");
        Navigate("/")
    }

    const [datos, setDatos] = useState ([{
        title: '',
        description: ''
    }])

    return (
        <div id="wall">
            <div id="header">
                <form className="id-user">
                    <h1>{localStorage.getItem("name")}</h1>
                    <h1>{localStorage.getItem("email")}</h1>
                </form>
                <form onSubmit={LogoutButton}>
                    <button id="button-logOut" type="submit">
                        <img className="logOut" src="https://i.imgur.com/b3yYdUP.png"></img>
                    </button>
                </form>
            </div>
            <Notes datos={datos} setDatos={setDatos}/>
            <ListNotes datos={datos} setDatos={setDatos}/>
        </div>         
    )
}

export default Wall