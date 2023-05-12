import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import moment from 'moment-timezone'
//moment(res.data.createdAt).tz("America/Argentina/Buenos_Aires").format();
import { IsLogged } from "../../controllers/isLogged";
import Table from "react-bootstrap/Table";
import { DeleteArticle, GetAllArticles } from "../../Hooks/HooksArticle";
import { toastWarning } from "../Alerts/Tostadas";

const CompShowArticle = () => {
    const [articles, setArticle] = useState([]);

    useEffect(() => {
        getArticles();
    }, []);

    const getArticles = async () => {
        const token = IsLogged();
        if (token === null) {
            toastWarning("Need to Login");
        } else {
            GetAllArticles().then((articulos) => {
                setArticle(articulos);
            });
        }
    };

    const deleteArticles = async (id) => {
        if (DeleteArticle(id)) {
            window.location.reload();
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link
                        to={"/newarticle"}
                        className="btn btn-primary mt-2 mb-2"
                    >
                        Crear
                    </Link>

                    <Table
                        bordered={false}
                        hover={true}
                        responsive="xl"
                        className="table"
                        variant="dark"
                        size="xl"
                    >
                        <thead className="table-primary">
                            <tr>
                                <th>Titulo</th>
                                <th>Categoria</th>
                                <th>Creado por</th>
                                <th>Created Date</th>
                                <th>Updated Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="table-primary">
                            {articles.map((article) => (
                                <tr key={article.id}>
                                    <td>{article.tittle}</td>
                                    <td>{article.category}</td>
                                    <td>{article.createdBy}</td>
                                    <td>{article.createdAt}</td>
                                    <td>{article.updatedAt}</td>

                                    <td>
                                        <Link
                                            to={"/editarticle/" + article.id}
                                            className="btn btn-info"
                                        >
                                            Editar
                                        </Link>
                                        <button
                                            onClick={() =>
                                                deleteArticles(article.id)
                                            }
                                            className="btn btn-danger"
                                        >
                                            Delete
                                        </button>
                                        <Link
                                            to={"/article/" + article.id}
                                            className="btn btn-secondary"
                                        >
                                            Open
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default CompShowArticle;
