import React from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "../../Styles/CategoryCards.css";
import { Link } from "react-router-dom";

const URI = "http://localhost:3050/cat/";

const ShowCategories = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        axios.get(URI).then((res) => {
            setCategorias(res.data);
        });
    }, []);

    return (
        <Container>
            <div id="divCards" className="mt-5">
                {categorias.map((c) => (
                    <Link
                        to={"/categoria/" + c.category}
                        key={c.category}
                        className="linkCard"
                    >
                        <Card
                            style={{
                                width: "18rem",
                                backgroundImage: "url(" + c.img + ")",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                cursor: "pointer",
                            }}
                            key={c.id}
                            className="justify-content-md-center cardCat"
                        >
                            <Card.Body>
                                <Card.Title>{c.category}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </div>
        </Container>
    );
};

export default ShowCategories;
