import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Form = LogoutButton() 

const Wall = () => {
         
    return (
        <div id="wall">
            <h1>{localStorage.getItem("name")}</h1>
            <h1>{localStorage.getItem("email")}</h1>
            <form onSubmit={LogoutButton}>
            <button type="submit">
            <img className="logOut" src="https://i.imgur.com/b3yYdUP.png"></img>
            </button>
            </form> 
        </div>
            
    )
}


export default Wall

export function Form() {
    let Navigate = useNavigate() 

    function LogoutButton(e) {
        e.preventDefault();
        console.log("Tu click");
    }
        return (
            <form onSubmit={LogoutButton}>
            <button type="submit">
                <img className="logOut" src="https://i.imgur.com/b3yYdUP.png"></img>
                Navigate("/")
            </button>
            </form>
        );
    
}


