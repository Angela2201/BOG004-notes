import React from "react";

const Wall = () => {
    return (
        <div id="wall">
            <h1>{localStorage.getItem("name")}</h1>
            <h1>{localStorage.getItem("email")}</h1>
        </div>
    )
}

export default Wall