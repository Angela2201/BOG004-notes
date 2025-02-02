import React, { useState, useEffect, useLayoutEffect } from "react";
import { db, notesData, updateEditedNote } from "../firebase/firebase"
import { doc, deleteDoc } from "firebase/firestore"
import styles from './ListNotes.module.css';

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
    const handleUpdate = async (event, noteId) => {
        await updateEditedNote(noteId, title, description);
        event.target.parentElement.children[0].disabled = true
        event.target.parentElement.children[1].disabled = true
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
        <div className={styles.divNotes}>
            <ul>{
                datos.map((item, id) =>
                    <p key={id} className={styles.listNotes}>
                        <textarea
                            className={styles.listTitle}
                            disabled
                            readOnly={item.id !== noteId} 
                            value={item.title} 
                            onChange={(event) => changeTitle(event, id)}/>
                        <textarea
                            className={styles.listDescription}
                            disabled
                            readOnly={item.id !== noteId} 
                            value={item.description} 
                            onChange={(event) => changeDescription(event, id)}/>
                        <button className={styles.btn} onClick={(event) => handleEdit(event, item.id)}>
                            <img className={styles.btnEdit} src="https://i.imgur.com/xJPsn7E.png"></img>
                        </button>
                        <button className={styles.btn} onClick={(event) => handleUpdate(event, noteId)}>
                            <img className={styles.btnSave} src="https://i.imgur.com/kKGYZLC.png"></img>
                        </button>
                        <button className={styles.btn} onClick={() => handleDelete(item.id)}>
                            <img className={styles.btnDelete} src="https://i.imgur.com/EpR2Yrx.png"></img>
                        </button>
                    </p>
                )
            }</ul>
        </div>
    )
}
