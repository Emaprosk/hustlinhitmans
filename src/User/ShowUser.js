import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { URI_USUARY } from "../config";

const CompShowUser = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const res = await axios.get(URI_USUARY);
        setUser(res.data);
    };

    const deleteUsers = async (id) => {
        await axios.delete(URI_USUARY + id);
        getUsers();
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to={"/create"} className="btn btn-primary mt-2 mb-2">
                        Crear
                    </Link>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>Usuario</th>
                                <th>Char. Player</th>
                                <th>Created Date</th>
                                <th>Updated Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.charactername}</td>
                                    <td>{user.createdAt}</td>
                                    <td>{user.updatedAt}</td>
                                    <td>
                                        <Link
                                            to={"/edit/" + user.id}
                                            className="btn btn-info"
                                        >
                                            Editar
                                        </Link>
                                        <button
                                            onClick={() => deleteUsers(user.id)}
                                            className="btn btn-danger"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CompShowUser;
