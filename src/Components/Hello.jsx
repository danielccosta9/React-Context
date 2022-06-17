import React, { useContext } from "react";
import { CustomerContext } from "../Contexts/Customer";

import "../Styles/Hello.css"

const Hello = () => {
    const { name } = useContext(CustomerContext)
    return (
        <div className="container">
            <h2>Olá,</h2>
            <h2 className="name">{name}</h2>
        </div>
    )
}

export default Hello;