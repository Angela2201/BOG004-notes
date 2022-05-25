import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ListNotes } from "./ListNotes.js";
import { Notes } from "./Notes.js"
import { getNotes } from "../firebase/firebase";

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

    //"useEffect" ejecuta nuestra función "getNotes", cada vez que haya un cambio en el estado al recibir un "props" nuevo (datos, setDatos)
    useEffect(() => {
        console.log(useEffect)
        getNotes().then((newDatos) => {
            console.log(newDatos)
            setDatos(newDatos)});
    }, []);

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
            <Notes setDatos={setDatos}/>
            <ListNotes datos={datos}/>
        </div>         
    )
}

export default Wall




