import axios from "axios";
import { useState } from "react";
import "../Styles/singUp.css";
import { toastError, toastSuccess } from "../components/Alerts/Tostadas";
import Pop from "../components/Popovers/Popovers";
import CardInfo from "../components/CardInfo";

const URI = "http://localhost:3050/users/";

const CompCreateUser = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [charactername, setCharacterName] = useState("");

    const errorMessage = validarCampos(user, password, email);

    const store = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post(URI, {
                username: user,
                password: password,
                email: email,
                charactername: charactername,
            });

            if (data.status === 200) {
                setUser("");
                setEmail("");
                setPassword("");
                setCharacterName("");
                toastSuccess("Usuario Creado");
            }
        } catch (error) {
            toastError("Error al crear Usuario");
            alert("Los campos ingresados ya existen en la base de datos");
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label"></label>
                    <Pop
                        text={"Ingrese Usuario"}
                        valor={user}
                        setValor={setUser}
                        type={"text"}
                        placeholder={"Usuario"}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label"></label>
                    <Pop
                        text={
                            "Ingrese contraseña de al menos 8 caracteres y numeros"
                        }
                        valor={password}
                        setValor={setPassword}
                        type={"password"}
                        placeholder={"Contraseña"}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label"></label>
                    <Pop
                        text={"Ingrese un Email"}
                        valor={email}
                        setValor={setEmail}
                        type={"email"}
                        placeholder={"Correo electronico"}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label"></label>
                    <Pop
                        text={"Ingrese nombre de personaje utilizado en juego"}
                        valor={charactername}
                        setValor={setCharacterName}
                        type={"text"}
                        placeholder={"Nombre de jugador"}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={errorMessage}
                >
                    Sing up
                </button>
            </form>
            <CardInfo
                header={"Atencion"}
                body={
                    "La contraseña se enviará por correo, cuando inicie sesion cambie dicha contraseña"
                }
            />
        </div>
    );
};

const validarCampos = (user, password, email) => {
    const regexContrasena = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;
    const regexCorreoElectronico = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (user.includes("@")) return "Caracter no valido";
    if (password.length < 8)
        return "La contraseña debe tener al menos 8 caracteres";
    if (!regexContrasena.test(password))
        return "La contraseña debe tener al menos 8 caracteres y contener al menos un número y una letra.";
    if (!regexCorreoElectronico.test(email))
        return "Por favor ingrese un correo electrónico válido.";
};

export default CompCreateUser;
