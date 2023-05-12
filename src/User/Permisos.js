import React, { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "react-bootstrap";
import "../Styles/Permisos.css";
import CheckBox from "../components/CheckBox";
import { toastError } from "../components/Alerts/Tostadas";
import { getItemUser } from "../Hooks/HookUserStorage";

const URI = "http://localhost:3050/pow/";

const MostrarPermisos = () => {
    const [publicar, setPublicar] = useState([]);
    const [comentar, setComentar] = useState([]);
    const [editar, setEditar] = useState([]);
    const [id, setId] = useState([]);

    useEffect(() => {
        const user = getItemUser();
        if (user) {
            getPow(user.id).then((pow) => {
                setPublicar(pow.publicar);
                setComentar(pow.comentar);
                setEditar(pow.editar);
                setId(user.id);
            });
        }
    }, []);

    const getPow = async (id) => {
        try {
            const res = await axios.get(URI + id);
            return res.data;
        } catch (error) {
            toastError("Error at Getting");
        }
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            editPow(id);
        }, 100);
        return () => clearTimeout(timer);
        // eslint-disable-next-line
    }, [publicar, comentar, editar]);

    const editPow = async (id) => {
        try {
            await axios.put(URI + id, {
                publicar: publicar,
                comentar: comentar,
                editar: editar,
            });
        } catch (error) {
            toastError("Error al actualizar permisos");
        }
    };

    return (
        <>
            <Card
                style={{
                    width: "18rem",
                    backgroundColor: "black",
                    opacity: "80%",
                }}
            >
                <Card.Body>
                    <Card.Title>Permisos</Card.Title>
                    <Card.Text>
                        Publicar: {publicar ? "Yes" : "No"}
                        <br />
                        Comentar: {comentar ? "Yes" : "No"}
                        <br />
                        Editar: {editar ? "Yes" : "No"}
                    </Card.Text>
                    <div className="posPublicar">
                        {CheckBox(publicar, setPublicar, "publicar")}
                    </div>
                    <div className="posComentar">
                        {CheckBox(comentar, setComentar, "comentar")}
                    </div>
                    <div className="posEditar">
                        {CheckBox(editar, setEditar, "editar")}
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default MostrarPermisos;
