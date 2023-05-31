import React from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "../../Styles/CategoryCards.css";
import { URI_CATEGORY } from "../../config";

const ShowCatAdmin = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        getCartegorias();
    }, []);

    const getCartegorias = async () => {
        const res = await axios.get(URI_CATEGORY);
        setCategorias(res.data);
    };

    const deleteCartegorias = async (id) => {
        await axios.delete(URI_CATEGORY + id);
        getCartegorias();
    };
    return (
        <Container>
            <div id="divCards" className="mt-5">
                {categorias.map((c) => (
                    <Card
                        style={{
                            width: "18rem",
                            backgroundImage: "url(" + c.img + ")",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        key={c.id}
                        className="justify-content-md-center cardCat"
                    >
                        <Card.Body>
                            <Card.Title>{c.category}</Card.Title>

                            <button
                                className="btn btn-danger btnCard"
                                onClick={() => deleteCartegorias(c.id)}
                            >
                                Delete
                            </button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
};

export default ShowCatAdmin;
