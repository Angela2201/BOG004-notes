import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, notesData } from "../firebase/firebase";
import styles from './Notes.module.css';

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
        <div id="note" className={styles.note}>
            <form onSubmit={guardarDatos}>
                <div>
                    <input 
                        type="text" 
                        id="note-title" 
                        className={styles.noteTitle}
                        name="title"
                        placeholder="Title Note" 
                        onChange={handleInputChange} value={inputs.title}>
                    </input>
                </div>

                <div>
                    <textarea 
                        type="text" 
                        id="note-description" 
                        className={styles.noteDescription}
                        name="description"
                        placeholder="Description Note" 
                        onChange={handleInputChange} value={inputs.description}>
                    </textarea>
                </div>
                <div>
                    <button id="button-note" className={styles.btnNote} type="submit">
                        <img className={styles.btnImgAdd} src="https://i.imgur.com/mNrOwso.png"></img>
                    </button>
                </div>
            </form>
        </div>
    )
}