import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../Styles/Articulo.css";
import TextArea from "./Toolbar";
import { GetArticleByID, UpdatedArticle } from "../../Hooks/HooksArticle";
import { toastSuccess, toastWarning } from "../Alerts/Tostadas";

const CompEditArticle = () => {
    const [title, setTitle] = useState("");
    const [contenido, setContenido] = useState("");
    const [createdBy, setCreadtedBy] = useState("");

    const { id } = useParams();

    useEffect(() => {
        GetArticleByID(id).then((res) => {
            setTitle(res.tittle);
            setContenido(res.contenido);
            setCreadtedBy(res.createdBy);
        });
    }, [id]);

    const update = async (e) => {
        e.preventDefault();
        if (UpdatedArticle(id, title, contenido, createdBy)) {
            toastSuccess("Cambios guardados");
        } else {
            toastWarning("Error al guardar");
        }
    };

    return (
        <>
            <h1>Editar Articulo</h1>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label"></label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                        required
                    ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        {TextArea(contenido, setContenido)}
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label"></label>
                    <input
                        value={createdBy}
                        onChange={(e) => setCreadtedBy(e.target.value)}
                        type="text"
                        className="form-control"
                        required
                    ></input>
                </div>

                <button type="submit" className="btn btn-primary">
                    Guardar
                </button>
            </form>
        </>
    );
};

export default CompEditArticle;
