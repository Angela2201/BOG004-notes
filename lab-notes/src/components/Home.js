import React from "react";
import { signInWithGoogle } from "../firebase/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Navigate, Route, useNavigate } from "react-router-dom"; 

//Función de logueo con Google
const Home = () => {

    let Navigate = useNavigate()
    const signInWithGoogle = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
            const name = result.user.displayName;
            const email = result.user.email;

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);

            Navigate("/Wall")
        })

        .catch((error) => {
            console.log(error)
        });
    };

    //Retorna el componente que pinta la vista de Home
    return (
        <div id="view-home">
            <div id="home">
                {/* <img className="image" src="https://i.imgur.com/3RmGDYf.jpg"></img> */}
                <img className="logo" src="https://i.imgur.com/ncVcTA8.png"></img>
                <button onClick={signInWithGoogle} id="btn-google">
                    <img className="logoGoogle" src="https://i.imgur.com/bD3SqPX.png" alt="logoGoogle"></img>
                </button>
            </div>
        </div>
    )
}

export default Home