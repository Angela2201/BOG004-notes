import React, { useState } from "react";
import { db } from "../firebase/firebase.js"

export const Notes = () => {

   const [datos, setDatos] = useState({
       title: '',
       description: ''
   })

    //Se crea evento para pintar los datos de las notas
   const handleInputChange = (event) => {
       console.log('funciona')
        setDatos({
            //Se realiza copia de los datos que se irán modificando
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    //Se crea el evento del botón para guardar la nota
    const guardarDatos = (event) => {
        event.preventDefault();
        db.collection("noteCollection").add({
            title: '',
            description: '',
        })
        setDatos("");
        /* console.log(datos.title + ' ' + datos.description) */
    }
    
    return (
        <div>
            <form onSubmit={guardarDatos}>
                <div>
                    <input 
                        type="text" 
                        id="note-title" 
                        name="title" 
                        onChange={handleInputChange}>
                    </input>
                </div>
                {/* {
                    listaDeNotas.map(nota => {
                        return (
                            <div>
                                <div>
                                    <h1>{nota.titulo}</h1>
                                </div>
                                <div>
                                    <h2>{nota.desvcripcion}</h2>
                                </div>
                            </div> 
                            <Nota titulo = {nota.titulo} description = {nota.desvcripcion}/>
                        )
                    }) 
                } */}

                <div>
                    <textarea 
                        type="text" 
                        id="note-description" 
                        name="description" 
                        onChange={handleInputChange}>
                    </textarea>
                </div>
                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
            <h3>{datos.title} - {datos.description}</h3>
        </div>
    )
}