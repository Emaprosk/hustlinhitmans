import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextArea from "./Toolbar";
import "../../Styles/Articulo.css";
import { getItemUser } from "../../Hooks/HookUserStorage";

//import "react-quill/dist/quill.snow.css";

const URI = "http://localhost:3050/articles/";
const URIC = "http://localhost:3050/cat/";

const CompCreateArticle = () => {
    const [title, setTitle] = useState("");
    const [contenido, setContenido] = useState("");
    const [createdBy, setCreadtedBy] = useState("");
    const [category, setCategory] = useState("");

    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        axios.post(URI, {
            tittle: title,
            contenido: contenido,
            category: category,
            createdBy: createdBy,
        });

        navigate("/foro");
    };
    // continuar aca con el select options

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        getCartegorias();
        const user = getItemUser();
        setCreadtedBy(user.username);
    }, []);

    const getCartegorias = async () => {
        const res = await axios.get(URIC);
        setCategorias(res.data);
    };

    return (
        <div>
            <h1>New Post</h1>
            <form onSubmit={store}>
                <label className="form-label labelArticle">
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Titulo"
                        required
                    ></input>
                </label>

                <label id="label-text" className="labelArticle">
                    {TextArea(contenido, setContenido)}
                </label>

                <div className="mb-3">
                    <label className="form-label mt-3 labelArticle">
                        <input
                            value={createdBy}
                            type="text"
                            className="form-control"
                            required
                            disabled
                        ></input>
                    </label>
                </div>
                <div>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Selecciona una opción</option>
                        {categorias.map((c) => (
                            <option key={c.id} value={c.category}>
                                {c.category}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">
                    Post
                </button>
            </form>
            <button
                type="submit"
                className="btn btn-primary"
                onClick={() => console.log(category)}
            >
                Mostrar
            </button>
        </div>
    );
};

export default CompCreateArticle;
