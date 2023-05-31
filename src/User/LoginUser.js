import axios from "axios";
import { toastError } from "../components/Alerts/Tostadas";
import { URI_LOG } from "../config";

export const Logger = async (credentials) => {
    try {
        const { data } = await axios.post(URI_LOG, credentials);
        return data;
    } catch (error) {
        toastError("Credenciales Incorrectas");
    }
};
