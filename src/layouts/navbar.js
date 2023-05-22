import { Navbar, Nav } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import VideoPlayer from "../components/Play/videoplay";
import HomePlayer from "../components/Play/homePlay";
import ForoPlayer from "../components/Play/foroPlay";
import RedesPlayer from "../components/Play/redesPlay";
import PerfilPlayer from "../components/Play/perfilPlay";
import InicSesionPlayer from "../components/Play/inicSesionPlay";
import CloseSesionPlayer from "../components/Play/closeSesionPlay";
import { useEffect, useState } from "react";
import "./navbar.css";
import { destroySessions, getItemUser } from "../Hooks/HookUserStorage";

const Navv = () => {
    const [isLogged, setIsLogged] = useState(null);
    const [showComponent, setShowComponent] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = getItemUser();
        if (user !== null) {
            setIsLogged(user);
        }
    }, []);

    const handleLogOut = () => {
        setIsLogged(null);
        destroySessions();
        navigate("/");
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

    const renderPerfil = () => {
        return (
            <Nav.Link
                className="videosNav"
                as={Link}
                to={"/perfil/" + isLogged.username}
            >
                {showComponent ? <PerfilPlayer /> : <h5>Perfil</h5>}
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
                        <Nav.Link className="videosNav" as={Link} to="/redes">
                            {showComponent ? (
                                <RedesPlayer />
                            ) : (
                                <h5>Dashboard</h5>
                            )}
                        </Nav.Link>
                        {isLogged ? renderPerfil() : null}
                    </Nav>

                    {isLogged ? renderLogOut() : renderLogIn()}
                </Navbar.Collapse>
            </Navbar>
            <section>
                <Outlet></Outlet>
            </section>
        </>
    );
};

export default Navv;
