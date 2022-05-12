import React, { useState } from "react";

export const Notes = () => {

   const [datos, setDatos] = useState({
       title: '',
       description: ''
   })

   const handleInputChange = (event) => {
       console.log('funciona')
   }
    
    return (
        <div>
            <form>
                <div>
                    <input type="text" id="note-title" name="tittle" onChange={handleInputChange}></input>
                </div>
                <div>
                    <textarea type="text" id="note-description" name="description" onChange={handleInputChange}></textarea>
                </div>
                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}