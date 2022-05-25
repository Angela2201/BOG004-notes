import { db } from "../firebase/firebase"
import { doc, deleteDoc } from "firebase/firestore"

//En este componente se pintan las notas en el muro
export const ListNotes = ({datos}) => {

    const handleEdit = () => {
        console.log("Edita")
    }

    //Se crea la función de eliminar las notas
    const handleDelete = async (id) => {
        console.log("nota borrada")
        if (window.confirm("Are you sure you want to delete this note?")) {
            const docRef = doc(db, 'noteCollection', id);
            await deleteDoc(docRef);
        }
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
