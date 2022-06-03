import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, notesData } from "../firebase/firebase";

export const Notes = ({datos, setDatos }) => {
    //Se crea arreglo para actualizar el estado de los inputs, en los inputs se almacena la información de las notas 
   const [inputs, setInputs] = useState ({
       title: '',
       description: ''
    })

    //Se crea evento para pintar los datos de las notas
    const handleInputChange = (event) => {
       console.log('funciona')
        setInputs({
            //Se realiza copia de los datos que se irán modificando
            ...inputs,
            [event.target.name] : event.target.value
        })
    }

    //Se crea el evento del botón para guardar la nota
    const guardarDatos = async (event) => {
        event.preventDefault();
        console.log(inputs.title + ' ' + inputs.description)
        let dataToSend = {
            title: inputs.title,
            description: inputs.description
        }
        //Se crea variable para enviar los datos a la colección 
        let docRef = await addDoc(collection(db, "noteCollection"), dataToSend)
        notesData(setDatos)
        //Limpia los datos de la nota
        event.target.reset();
        setInputs({
            title:'',
            description: ''
        })
    };
    
    return (
        <div id="note">
            <form onSubmit={guardarDatos}>
                <div>
                    <input 
                        type="text" 
                        id="note-title" 
                        name="title"
                        placeholder="Title Note" 
                        onChange={handleInputChange} value={inputs.title}>
                    </input>
                </div>

                <div>
                    <textarea 
                        type="text" 
                        id="note-description" 
                        name="description"
                        placeholder="Description Note" 
                        onChange={handleInputChange} value={inputs.description}>
                    </textarea>
                </div>
                <div>
                    <button id="button-note" type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}