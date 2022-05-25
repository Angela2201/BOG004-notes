import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 

const Home = () => {

    let Navigate = useNavigate()
    //Se crea la función de logueo con Google
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
                <img className="logo" src="https://i.imgur.com/ncVcTA8.png"></img>
                <button onClick={signInWithGoogle} id="btn-google">
                    <img className="logoGoogle" src="https://i.imgur.com/bD3SqPX.png" alt="logoGoogle"></img>
                    Continue With Google
                </button>
            </div>
        </div>
    )
}

export default Home