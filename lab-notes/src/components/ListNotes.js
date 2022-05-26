import React, { useState, useEffect } from "react";
import { db, getNotes } from "../firebase/firebase"
import { doc, deleteDoc, updateDoc, getDoc } from "firebase/firestore"
import { async } from "@firebase/util"

//En este componente se pintan las notas en el muro
export const ListNotes = ({datos, setDatos}) => {

    const [inputs, setInputs] = useState([{
        title: '',
        description: ''
    }])

    const handleEdit = async (e, id) => {
        e.preventDefault()
        const note = doc(db, 'noteCollection', id)
        const data = {title: inputs.title, description: inputs.description}
        //Se pasa función de Firestore para actualizar datos
        await updateDoc(note, data)        
    }

    //Se crea la función para obtener un único Id
    const getNoteById = async (id) => {
        const note = await getDoc(doc(db, 'noteCollection', id)) 
        if(note.exists()) {
            console.log(note.data()) 
            setInputs(note.data().title)
            setInputs(note.data().description)
        } else {
            console.log('Note does not exist')
        }
    }

    useEffect(() => {
        getNoteById(id)
    }, []);

    //Se crea la función de eliminar las notas
    const handleDelete = async (id) => {
        console.log("nota borrada")
        if (window.confirm("Are you sure you want to delete this note?")) {
            const docRef = doc(db, 'noteCollection', id);
            await deleteDoc(docRef);
        }
        getNotes().then((newDatos) => {
            //Se utiliza setDatos para que se actualicen los datos
            setDatos(newDatos)
        })
    }
    
    return (
        <div> 
            <ul>{
            datos.map((item, id) => 
                <li key = {id}>
                    <textarea disabled value={item.title}/>
                    <textarea disabled value={item.description}/>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </li>
                )
            }</ul>
        </div>
    )
}
