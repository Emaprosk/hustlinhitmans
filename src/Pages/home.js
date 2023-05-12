import React from "react";
import { Container } from "react-bootstrap";
import "../Styles/home.css";
import MostrarCategorias from "../components/Categoria/ShowCategories";

const Home = () => {
    return (
        <>
            <Container className={"containerHome"}>
                <h1>Categorias</h1>
                <div>
                    <MostrarCategorias />
                </div>
            </Container>
        </>
    );
};

export default Home;
