import { useState, useEffect } from "react";
import "../Styles/Perfil.css";
import { toastSuccess, toastError } from "../components/Alerts/Tostadas";
import "react-toastify/dist/ReactToastify.css";
import {
    Button,
    Col,
    Container,
    Form,
    FormControl,
    FormGroup,
    FormLabel,
    FormText,
    Row,
} from "react-bootstrap";
import CardInfo from "../components/CardInfo";
import { getItemUser } from "../Hooks/HookUserStorage";
import {
    ChangePasswordApi,
    GetUserApi,
    UpdateUserApi,
} from "../Hooks/HookUserApi";
import { toastInfo } from "../components/Alerts/Tostadas";

const Perfil = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [charactername, setCharacterName] = useState("");
    const [id, setId] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [repPassword, setRepPassword] = useState("");

    useEffect(() => {
        const user = getItemUser();
        if (user) {
            GetUserApi(user.password).then((user) => {
                setUsername(user.username);
                setEmail(user.email);
                setCharacterName(user.charactername);
                setId(user.id);
            });
        }
    }, []);

    const cambiarPassword = async (e) => {
        e.preventDefault();
        if (newPassword === repPassword) {
            ChangePasswordApi(id, password, newPassword).then((result) => {
                console.log(result.status);
                if (result.status === 200) {
                    setPassword("");
                    setNewPassword("");
                    setRepPassword("");

                    toastSuccess("Contraseña cambiada");
                } else {
                    toastError("Error al actualizar contraseña");
                }
                if (result.status === 202) {
                    alert("No te hagas el loco");
                }
            });
        } else {
            toastInfo("las contraseñas no coinciden");
        }
    };

    const saveChanges = async (e) => {
        e.preventDefault();
        UpdateUserApi(id, charactername);
    };

    return (
        <Container>
            <div className="formPerfil">
                <Form onSubmit={saveChanges}>
                    <Row>
                        <Col>
                            <FormGroup
                                className="mb-3"
                                controlId="formBasicUser"
                            >
                                <FormLabel>Usuario</FormLabel>
                                <Form.Control
                                    type="text"
                                    value={username}
                                    /*onChange={(e) =>
                                        setUsername(e.target.value)
                                    }*/
                                    style={{ width: "40vh" }}
                                    disabled
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    /*
                                    onChange={(e) => setEmail(e.target.value)}*/
                                    disabled
                                    style={{ width: "40vh" }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <FormGroup className="mb-3" controlId="formBasicChar">
                        <FormLabel>Character Name</FormLabel>
                        <FormControl
                            type="text"
                            value={charactername}
                            onChange={(e) => setCharacterName(e.target.value)}
                        ></FormControl>
                        <FormText className="text-muted">
                            Nombre de jugador
                        </FormText>
                    </FormGroup>

                    <Button className="btn btn-primary" type="submit">
                        Guardar
                    </Button>

                    <CardInfo
                        header={"Aviso"}
                        body={
                            "Perfil de usuario, algunos de los campos se encuentras deshabilitados para mas informacion contacte al administrador."
                        }
                    />
                </Form>
                <br></br>
                <Form onSubmit={cambiarPassword}>
                    <Row>
                        <Col>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                                <FormText>Actual contraseña</FormText>
                            </Form.Group>
                        </Col>
                        <Col>
                            <FormGroup>
                                <FormLabel>Nueva Password</FormLabel>
                                <FormControl
                                    type="password"
                                    placeholder="Nueva contraseña"
                                    value={newPassword}
                                    onChange={(e) =>
                                        setNewPassword(e.target.value)
                                    }
                                    required
                                />
                                <FormText>Nueva contraseña</FormText>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <FormLabel>Repita Contraseña</FormLabel>
                                <FormControl
                                    type="password"
                                    placeholder="Nueva contraseña"
                                    value={repPassword}
                                    onChange={(e) =>
                                        setRepPassword(e.target.value)
                                    }
                                    required
                                />
                                <FormText>Repita contraseña</FormText>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button className="btn btn-primary" type="submit">
                        Cambiar contraseña
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default Perfil;
