import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
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
            <h1>{localStorage.getItem("name")}</h1>
            <h1>{localStorage.getItem("email")}</h1>
            <form onSubmit={LogoutButton}>
            <button type="submit">
                <img className="logOut" src="https://i.imgur.com/b3yYdUP.png"></img>
            </button>
            </form>
            <Notes/> 
        </div>

            
    )
}


export default Wall




