import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { IsLogged } from "../../controllers/isLogged";

const URI = "http://localhost:3050/articles/";

const ShowArtsCat = () => {
    const [articles, setArticles] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getArticlesById();
    }, []);

    const getArticlesById = async () => {
        const token = IsLogged();
        if (token === null) {
            console.log("Need authorization");
        } else {
            const res = await axios.get(URI + id);
            setArticles(res.data);
            console.log(res.data);
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

export default ShowArtsCat;
