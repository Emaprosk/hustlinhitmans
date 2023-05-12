import React, { useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { toastError, toastInfo } from "../Alerts/Tostadas";

import "../../Styles/CategoryCards.css";

const URI = "http://localhost:3050/cat/";

const AddCategory = () => {
    const [titulo, setTitulo] = useState("");
    const [imagen, setImagen] = useState("");

    const add = async (e) => {
        e.preventDefault();
        try {
            await axios.post(URI, {
                category: titulo,
                img: imagen,
            });
            toastInfo("New category added");
            setTitulo("");
            setImagen("");
        } catch (error) {
            toastError("Error adding category");
        }
    };

    return (
        <>
            <Container>
                <form onSubmit={add}>
                    <input
                        className="cInput"
                        type={"text"}
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder="Titulo"
                        required
                    ></input>
                    <input
                        className="cInput"
                        type="text"
                        value={imagen}
                        onChange={(e) => setImagen(e.target.value)}
                        placeholder="Src URL image"
                    ></input>
                    <button type="submit" className="btn btn-primary">
                        Add Category
                    </button>
                </form>
            </Container>
        </>
    );
};

export default AddCategory;
