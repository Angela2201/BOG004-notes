import React, { useState, useEffect } from "react";
import { db, notesData } from "../firebase/firebase"
import { doc, deleteDoc, updateDoc, getDoc } from "firebase/firestore"

//En este componente se pintan las notas en el muro
export const ListNotes = ({ datos, setDatos }) => {

    const [data, setData] = useState([{
        title: '',
        description: ''
    }])

    const handleEdit = (event) => {
        console.log(event.target)
        console.log(event.target.parentElement.children[0])
        event.target.parentElement.children[0].disabled = false
        event.target.parentElement.children[1].disabled = false
        
    }


    const handleChange = (event) => {
        setData({
            //Se realiza copia de los datos que se irán modificando
            ...data,
            [event.target.item] : event.target.value,
            /* [event.target.description] : event.target.value */
        })
    }

    const updateNote = (id, note) => {
        const updateList = data.map((e, item) => {
            if(item === id){
                e = note;
            }
            return e;
        })
        setData(updateList)
    }

    /* await updateDoc(note, data) */


    //Se crea la función de eliminar las notas
    const handleDelete = async (id) => {
        console.log("nota borrada")
        if (window.confirm("Are you sure you want to delete this note?")) {
            const docRef = doc(db, 'noteCollection', id);
            await deleteDoc(docRef);
        }
        notesData(setDatos)
    }

    //"useEffect" ejecuta nuestra función "notesData", cada vez que haya un cambio en el estado al recibir un "props" nuevo (datos, setDatos)
    useEffect(() => {
        notesData(setDatos)
    }, []);


    return (
        <div>
            <ul>{
                datos.map((item, id) =>
                    <li key={id}>
                        <textarea disabled value={item.title} onChange={(event) => handleChange(event, item)}/>
                        <textarea disabled value={item.description} onChange={(event) => handleChange(event, item)}/>
                        <button onClick={(event) => handleEdit(event, item)}>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                )
            }</ul>
        </div>
    )
}
