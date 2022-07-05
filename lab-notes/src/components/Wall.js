import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListNotes } from "./ListNotes.js";
import { Notes } from "./Notes.js"
import styles from './Wall.module.css';;

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
        <div id="wall" className={styles.wall}>
            <div id="header" className={styles.header}>
                <form className={styles.idUser}>
                    <h1>{localStorage.getItem("name")}</h1>
                    <h1>{localStorage.getItem("email")}</h1>
                </form>
                <form onSubmit={LogoutButton}>
                    <button id="button-logOut" type="submit" className={styles.btnLogOut}>
                        <img className={styles.logOut} src="https://i.imgur.com/b3yYdUP.png"></img>
                    </button>
                </form>
            </div>
            <Notes datos={datos} setDatos={setDatos}/>
            <ListNotes datos={datos} setDatos={setDatos}/>
        </div>         
    )
}

export default Wall