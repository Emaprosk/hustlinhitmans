import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

//import { IsLogged } from "../../controllers/isLogged";
import { GetAllArticles } from "../../Hooks/HooksArticle";
import { Col, ListGroup, ListGroupItem } from "react-bootstrap";

const ShowArtsCat = () => {
    const [articles, setArticles] = useState([]);

    const { category } = useParams();

    useEffect(() => {
        GetAllArticles().then((articulos) => {
            setArticles(articulos.filter((arti) => arti.category === category));
        });
    }, [category]);
    /*
    const getArticles = async () => {
        
        const token = IsLogged();
        if (token === null) {
            console.log("Need authorization");
        } else {
        }
        GetAllArticles().then((articulos) => {
            setArticles(articulos.filter((arti) => arti.category === category));
        });
    };*/
    const renderList = () => {
        return (
            <ListGroup variant="flush">
                {articles.map((article) => (
                    <ListGroupItem key={article.id} className="list-group">
                        <div className="contentListGroup">
                            <Link
                                to={"/article/" + article.id}
                                className="linkArticle contentListGroup"
                            >
                                <Col>
                                    <h5>{article.tittle}</h5>
                                </Col>
                                <Col>
                                    <p>{article.category}</p>
                                </Col>
                                <Col>
                                    <p>{article.createdBy}</p>
                                </Col>
                                <Col>
                                    <p>{article.createdAt}</p>
                                </Col>
                                <Col>
                                    <p>{article.updatedAt}</p>
                                </Col>
                            </Link>
                        </div>
                    </ListGroupItem>
                ))}
            </ListGroup>
        );
    };

    const renderNodata = () => {
        return <h4>No se encontraron datos</h4>;
    };

    return (
        <div className="container">
            <Link to={"/newarticle"} className="btn btn-primary mt-2 mb-2">
                Crear
            </Link>
            {articles.length === 0 ? renderNodata() : renderList()}
        </div>
    );
};

export default ShowArtsCat;
