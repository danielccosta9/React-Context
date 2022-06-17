import React, { useContext } from "react";
import { CustomerContext } from "../Contexts/Customer";


import "../Styles/Email.css"

const Email = () => {
    const { email } = useContext(CustomerContext)
    return (
        <div className="container">
            <h2>Email:</h2>
            <h2 className="email">{email}</h2>
        </div>
    )
}

export default Email;