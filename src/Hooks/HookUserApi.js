import axios from "axios";
import { toastSuccess, toastWarning } from "../components/Alerts/Tostadas";

const URI = "http://localhost:3050/users/";
const URI2 = "http://localhost:3050/log/";

export const GetUserApi = async (id) => {
    try {
        const res = await axios.get(URI + id);
        return res.data;
    } catch (error) {
        console.error(error);
    }
};

export const UpdateUserApi = async (id, charactername) => {
    try {
        const res = await axios.put(URI + id, {
            charactername: charactername,
        });
        if (res.status === 200) {
            toastSuccess("Datos Actualizados");
        } else {
            toastWarning("Error al Actualizar");
        }
    } catch (error) {
        console.error(error);
    }
};

export const DeleteUserApi = async (id) => {
    try {
        await axios.delete(URI + id);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export const ChangePasswordApi = async (id, password, newPassword) => {
    try {
        const res = await axios.put(URI2 + "cp", {
            id: id,
            password: password,
            newPassword: newPassword,
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};
