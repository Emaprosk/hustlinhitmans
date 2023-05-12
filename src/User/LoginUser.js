import axios from "axios";
import { toastError } from "../components/Alerts/Tostadas";

const URI = "http://localhost:3050/log/";

export const Logger = async (credentials) => {
    try {
        const { data } = await axios.post(URI, credentials);
        return data;
    } catch (error) {
        toastError("Credenciales Incorrectas");
    }
};
