import React, { useState, useEffect } from "react";
import { getNotes } from "../firebase/firebase";


export const ListNotes = () => {

    const [datos, setDatos] = useState([])

    useEffect(() => {
        console.log(useEffect);
        getNotes().then((newData) => {
            console.log(newData)
            setDatos(newData)});
    }, []);

    return (
        <div> 
            <ul>{
            datos.map(item => 
                <li key = {item.id}>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </li>
                )
            }</ul>
        </div>
    )
}


