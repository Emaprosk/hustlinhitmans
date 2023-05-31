import axios from "axios";
import { toastSuccess, toastWarning } from "../components/Alerts/Tostadas";
import { URI_LOG, URI_USUARY } from "../config";

export const GetUserApi = async (token) => {
    try {
        const res = await axios.post(URI_LOG + "gut", {
            token: token,
        });
        return res.data;
    } catch (error) {
        console.error(error);
    }
};

export const UpdateUserApi = async (id, charactername) => {
    try {
        const res = await axios.put(URI_USUARY + id, {
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
        await axios.delete(URI_USUARY + id);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export const ChangePasswordApi = async (id, password, newPassword) => {
    try {
        const res = await axios.put(URI_LOG + "cp", {
            id: id,
            password: password,
            newPassword: newPassword,
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};
