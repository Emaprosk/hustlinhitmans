import React, { useState, useEffect } from "react";
import axios from "axios";
//import BoxComent from "./ToolComentBox";
import { Container } from "react-bootstrap";
import TextArea from "./Toolbar";

const URI = "http://localhost:3050/comments/";

const Comentarios = () => {
    const [comentario, setComentario] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
        getComentarios();
    });

    const getComentarios = async () => {
        const res = await axios.get(URI);
        setComentario(res.data);
        console.log(comentario);
    };

    return (
        <Container>
            <div>{TextArea(text, setText)}</div>
        </Container>
    );
};

export default Comentarios;
