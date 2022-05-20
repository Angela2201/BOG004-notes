import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ListNotes } from "./ListNotes.js";
import { Notes } from "./Notes.js"

const Wall = () => {
    let Navigate = useNavigate()
    function LogoutButton(e) {
        e.preventDefault();
        console.log("Tu click");
        Navigate("/")
    }
         
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
            <Notes/>
            <ListNotes/>
        </div>

            
    )
}

export default Wall




