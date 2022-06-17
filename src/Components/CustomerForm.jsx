import React, { useState, useContext } from "react";
import { CustomerContext } from "../Contexts/Customer";

import "../Styles/CustomerForm.css"

const CustomerForm = () => {
    const { submit } = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("dados CustomerForm: ", { name, email });

        submit({ name, email })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="label">Name: </label>
                <input
                    className="input"
                    type="text"
                    id="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email" className="label">Email: </label>
                <input
                    className="input"
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <button type="submit" className="buttonSubmit">Enviar</button>
        </form>
    );
}

export default CustomerForm;
