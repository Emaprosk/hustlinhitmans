import React from "react";
import { Container } from "react-bootstrap";
import "../Styles/home.css";
import MostrarCategorias from "../components/Categoria/ShowCategories";

const Home = () => {
    return (
        <>
            <Container className={"containerHome"}>
                <h1>Novedades</h1>
                <div>
                    <MostrarCategorias />
                </div>
            </Container>
        </>
    );
};

export default Home;
