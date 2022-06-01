import React, { useState, useEffect } from "react";
import { db, notesData, updateEditedNote } from "../firebase/firebase"
import { doc, deleteDoc } from "firebase/firestore"

//En este componente se pintan las notas en el muro
export const ListNotes = ({ datos, setDatos }) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [noteId, setNoteId] = useState("")

    const handleEdit = (event, id) => {
        console.log(event.target)
        console.log(event.target.parentElement.children[0])
        event.target.parentElement.children[0].disabled = false
        event.target.parentElement.children[1].disabled = false
        setNoteId(id)
        console.log('ID', id, noteId)
        console.log('description', description)
        console.log('title', title)
    }

    /* const handleChange = (event) => {
        setTitle(event.target.value)
        console.log(title)
    } */

    //Se crea la función de eliminar las notas
    const handleDelete = async (id) => {
        console.log("nota borrada")
        if (window.confirm("Are you sure you want to delete this note?")) {
            const docRef = doc(db, 'noteCollection', id);
            await deleteDoc(docRef);
        }
        notesData(setDatos)
    }

    //Se crea la función para que se puedan editar los datos de las notas
    const handleUpdate = async (noteId) => {
        await updateEditedNote(noteId, title, description);
        console.log(title)
        console.log(description)
        console.log(noteId)
    }
    
    //"useEffect" ejecuta nuestra función "notesData", cada vez que haya un cambio en el estado al recibir un "props" nuevo (datos, setDatos)
    useEffect(() => {
        notesData(setDatos)
    }, []);

    const changeTitle = (event, id) => {
        setTitle(event.target.value)
        datos[id].title = event.target.value
        setDatos(datos)
    }

    const changeDescription = (event, id) => {
        setDescription(event.target.value)
        datos[id].description = event.target.value
        setDatos(datos)
    }

    // console.log(datos)
    return (
        <div>
            <ul>{
                datos.map((item, id) =>
                    <li key={id}>
                        <textarea 
                            readOnly={item.id !== noteId} 
                            value={item.title} 
                            onChange={(event) => changeTitle(event, id)}/>
                        <textarea
                            readOnly={item.id !== noteId} 
                            value={item.description} 
                            onChange={(event) => changeDescription(event, id)}/>
                        <button onClick={(event) => handleEdit(event, item.id)}>Edit</button>
                        <button onClick={() => handleUpdate(noteId)}>Save</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                )
            }</ul>
        </div>
    )
}
