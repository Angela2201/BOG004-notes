import React from "react";
import { signInWithGoogle } from "../firebase/firebase";

const Home = () => {
    return (
        <div id="home">
            <h1>DEVELOPER LAB NOTES</h1>
            <p>KEEP YOUR NOTES ALWAYS IN VIEW</p>
            <button onClick={signInWithGoogle}>
            <img className="logoGoogle" src="https://i.imgur.com/bD3SqPX.png" alt="logoGoogle"></img>
            </button>
            <h1>{localStorage.getItem("name")}</h1>
            <h1>{localStorage.getItem("email")}</h1>
        </div>
    )
}

export default Home