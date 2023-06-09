import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import VideoPlayer from "../components/Play/videoplay";
import HomePlayer from "../components/Play/homePlay";
import ForoPlayer from "../components/Play/foroPlay";

import PerfilPlayer from "../components/Play/perfilPlay";
import InicSesionPlayer from "../components/Play/inicSesionPlay";
import CloseSesionPlayer from "../components/Play/closeSesionPlay";
import { useEffect, useState } from "react";
import "./navbar.css";
import { destroySessions, getItemUser } from "../Hooks/HookUserStorage";

const Navv = () => {
    const [isLogged, setIsLogged] = useState(null);
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        const user = getItemUser();
        if (user !== null) {
            setIsLogged(user);
        }
    }, []);

    const handleLogOut = () => {
        setIsLogged(null);
        destroySessions();
        //navigate("/");
    };

    const renderLogIn = () => {
        return (
            <Nav.Link as={Link} to="/login">
                {showComponent ? <InicSesionPlayer /> : <h5>Iniciar Sesion</h5>}
            </Nav.Link>
        );
    };

    const renderLogOut = () => {
        return (
            <Nav.Link
                className="videosNav"
                onClick={handleLogOut}
                as={Link}
                to={"/home"}
            >
                {showComponent ? <CloseSesionPlayer /> : <h5>Cerrar Sesion</h5>}
            </Nav.Link>
        );
    };

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 1500) {
                setShowComponent(true);
            } else {
                setShowComponent(false);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <Navbar
                className="dimNav"
                style={showComponent ? { height: "20vh" } : null}
                bg="black"
                expand="xl"
                variant="dark"
            >
                <Navbar.Brand className="brand" as={Link} to="/">
                    {showComponent ? <VideoPlayer /> : <h5>Hustlin Hitmans</h5>}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="">
                    <Nav className="mx-auto ">
                        <Nav.Link className="videosNav" as={Link} to="/">
                            {showComponent ? <HomePlayer /> : <h5>Home</h5>}
                        </Nav.Link>
                        <Nav.Link className="videosNav" as={Link} to="/foro">
                            {showComponent ? <ForoPlayer /> : <h5>Foro</h5>}
                        </Nav.Link>

                        <Nav.Link
                            className="videosNav"
                            as={Link}
                            to={
                                isLogged
                                    ? "/perfil/" + isLogged.username
                                    : "/login"
                            }
                        >
                            {showComponent ? <PerfilPlayer /> : <h5>Perfil</h5>}
                        </Nav.Link>
                    </Nav>
                    {isLogged ? renderLogOut() : renderLogIn()}
                </Navbar.Collapse>
            </Navbar>
            <Navbar expand="xl" variant="dark" className="dimSubNav">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className="navLinkSubNav">
                            Noticias
                        </Nav.Link>
                        <Nav.Link href="#action2" className="navLinkSubNav">
                            Videos
                        </Nav.Link>
                        <Nav.Link href="#action2" className="navLinkSubNav">
                            Guias
                        </Nav.Link>
                        <Nav.Link href="#action2" className="navLinkSubNav">
                            Juegos
                        </Nav.Link>
                        <Nav.Link href="#action2" className="navLinkSubNav">
                            Avances
                        </Nav.Link>
                        <Nav.Link href="#action2" className="navLinkSubNav">
                            Trucos
                        </Nav.Link>
                        <Nav.Link href="#action2" className="navLinkSubNav">
                            Random
                        </Nav.Link>
                        <Nav.Link href="#action2" className="navLinkSubNav">
                            Hardware
                        </Nav.Link>
                        <Nav.Link href="#action2" className="navLinkSubNav">
                            Comunidad
                        </Nav.Link>
                        <NavDropdown
                            title="Clan"
                            color="black"
                            className="navDropdown"
                        >
                            <div className="contentDropdown">
                                <NavDropdown.Item href="#action3" className="">
                                    Miembros
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className="">
                                    Perfil Jugador
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5" className="">
                                    Pelotón
                                </NavDropdown.Item>
                            </div>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <section>
                <Outlet></Outlet>
            </section>
        </>
    );
};

export default Navv;
