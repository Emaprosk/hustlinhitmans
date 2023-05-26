import React, { useState } from "react";
import "../Styles/Dashboard.css";
import CompCreateArticle from "../components/Articles/CreateArticle";
import { Card, Container } from "react-bootstrap";
import CompShowArticle from "../components/Articles/ShowArticle";
import AddCategory from "../components/Categoria/AddCategory";
import ShowCatAdmin from "../components/Categoria/ShowCatAdmin";
import CardInfo from "../components/CardInfo";

const Dashboard = () => {
    const [content, setContent] = useState("");

    const showRender = (key) => {
        switch (key) {
            case 1:
                return <CompCreateArticle />;

            case 2:
                return (
                    <>
                        <h1>Crear Categoria</h1>
                        <AddCategory />
                        <ShowCatAdmin />
                    </>
                );

            case 3:
                return (
                    <>
                        <h1>Listado de Articulos</h1>
                        <CompShowArticle />
                    </>
                );

            default:
                return (
                    <>
                        <div className="divDefault">
                            <h1>Dashboard</h1>
                        </div>
                    </>
                );
        }
    };
    return (
        <>
            <div className="area">
                <nav className="main-menu">
                    <ul>
                        <li>
                            <button onClick={() => setContent(1)}>
                                <i className="fa fa-plus fa-2x"></i>
                                <span className="nav-text">Crear Articulo</span>
                            </button>
                        </li>
                        <li className="has-subnav">
                            <button onClick={() => setContent(2)}>
                                <i className="fa fa-duotone fa-folder fa-beat fa-2x"></i>
                                <span className="nav-text">
                                    Agregar Categoria
                                </span>
                            </button>
                        </li>
                        <li className="has-subnav">
                            <button onClick={() => setContent(3)}>
                                <i className="fa fa-comments fa-2x"></i>
                                <span className="nav-text">
                                    Group Hub Forums
                                </span>
                            </button>
                        </li>
                    </ul>

                    <ul className="logout">
                        <li>
                            <button>
                                <i className="fa fa-power-off fa-2x"></i>
                                <span className="nav-text">Logout</span>
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className="dashboardPanel">
                    <Card className="justify-content-md-center dashboardCard">
                        <Card.Body>
                            <Card.Title>Ultimos Articulos</Card.Title>
                            <Card.Text>
                                "Lista de los ultimos articulos publicados"
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="justify-content-md-center dashboardCard">
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="justify-content-md-center dashboardCard">
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="justify-content-md-center dashboardCard">
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>

                    <aside className="dashboardAside">
                        <Card className="justify-content-md-center dashboardCardUsuarios">
                            <Card.Body>
                                <Card.Title>Lista de usuarios</Card.Title>
                                <Card.Text>Emaprosky: tanke</Card.Text>
                            </Card.Body>
                        </Card>
                    </aside>
                </div>
            </div>

            <Container>{showRender(content)}</Container>
        </>
    );
};

export default Dashboard;
