import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import moment from 'moment-timezone'
//moment(res.data.createdAt).tz("America/Argentina/Buenos_Aires").format();
//import { IsLogged } from "../../controllers/isLogged";

import { GetAllArticles } from "../../Hooks/HooksArticle";
import Options from "../OptionsTool";
import { Col, ListGroup, ListGroupItem } from "react-bootstrap";
import "../../Styles/ShowArticle.css";

const CompShowArticle = () => {
    const [articles, setArticle] = useState([]);

    useEffect(() => {
        GetAllArticles().then((articulos) => {
            setArticle(articulos);
        });
    }, []);

    /*
    const getArticles = async () => {
        const token = IsLogged();
        if (token === null) {
            toastWarning("Need to Login");
        } else {
            
        }
    };*/
    const renderMap = () => {
        articles.map((article) => (
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
                    <Options
                        id={article.id}
                        list={articles}
                        setList={setArticle}
                    />
                </div>
            </ListGroupItem>
        ));
    };

    return (
        <div className="container">
            <Link to={"/newarticle"} className="btn btn-primary mt-2 mb-2">
                Crear
            </Link>

            <ListGroup variant="flush">
                {articles ? (
                    renderMap()
                ) : (
                    <h1 style={{ color: "white" }}>No data</h1>
                )}
            </ListGroup>
        </div>
    );
};

export default CompShowArticle;
