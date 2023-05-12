import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container } from "react-bootstrap";
import ReactQuill from "react-quill";
import "../Styles/Articulo.css";
import { GetArticleByID } from "../Hooks/HooksArticle";

const Article = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [createdBy, setCreadtedBy] = useState("");
    const { id } = useParams();

    useEffect(() => {
        GetArticleByID(id).then((res) => {
            setTitle(res.tittle);
            setContent(res.contenido);
            setCreadtedBy(res.createdBy);
        });
    }, [id]);

    return (
        <Container>
            <div className="divArticle">
                <input type={"text"} disabled value={title}></input>
                <ReactQuill
                    theme="bubble"
                    id="text-area"
                    className="form-control"
                    value={content}
                    readOnly
                ></ReactQuill>
                <input type={"text"} disabled value={createdBy}></input>
            </div>
        </Container>
    );
};

export default Article;
