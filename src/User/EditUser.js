import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URI_USUARY } from "../config";

const CompEditUser = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [charactername, setCharacterName] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    //Procedimiento para actualizar

    const update = async (e) => {
        e.preventDefault();
        await axios.put(URI_USUARY + id, {
            username: username,
            password: password,
            email: email,
            charactername: charactername,
        });
        navigate("/");
    };

    useEffect(() => {
        getUserById();
    });

    const getUserById = async () => {
        const res = await axios.get(URI_USUARY + id);
        setUsername(res.data.username);
        setPassword(res.data.password);
        setEmail(res.data.email);
        setCharacterName(res.data.charactername);
    };

    return (
        <div>
            <h1>Update User</h1>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        className="form-control"
                    ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="text"
                        className="form-control"
                    ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        className="form-control"
                    ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Charactername</label>
                    <input
                        value={charactername}
                        onChange={(e) => setCharacterName(e.target.value)}
                        type="text"
                        className="form-control"
                    ></input>
                </div>

                <button type="submit" className="btn btn-primary">
                    Save Change
                </button>
            </form>
        </div>
    );
};

export default CompEditUser;
