import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/singUp.css";
import { Logger } from "../User/LoginUser";
import { toastError } from "../components/Alerts/Tostadas";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // eslint-disable-next-line
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = await Logger({ username, password });
            setUser(user);

            setUsername("");
            setPassword("");
            if (user !== undefined) {
                window.localStorage.setItem(
                    "loggedUserApp",
                    JSON.stringify(user)
                );

                navigate("./home");
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
            toastError("Credenciales incorrectas");
        }
    };

    return (
        <>
            <h1>Login</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label"></label>
                        <input
                            id="usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Usuario"
                            required
                        ></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label"></label>
                        <input
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            required
                        ></input>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Log In
                    </button>
                </form>
                <Link to={"/register"}>
                    <button type="link" className="btn btn-success">
                        Sing up
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Login;
