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
                <div className="divTitle">
                    <input
                        className="reactQuill"
                        type={"text"}
                        disabled
                        value={title}
                    ></input>
                </div>
                <div className="divContent">
                    <ReactQuill
                        theme="bubble"
                        id="text-area"
                        className="reactQuill"
                        value={content}
                        readOnly
                    ></ReactQuill>
                </div>
                <div className="divCreator">
                    <input
                        className="reactQuill"
                        type={"text"}
                        disabled
                        value={createdBy}
                    ></input>
                </div>
            </div>
        </Container>
    );
};

export default Article;
