import axios from "axios";

const URI = "http://localhost:3050/articles/";

export const GetArticleByID = async (id) => {
    try {
        const res = await axios.get(URI + id);
        return res.data;
    } catch (error) {
        console.error(error);
    }
};

export const GetAllArticles = async () => {
    try {
        const res = await axios.get(URI);
        return res.data;
    } catch (error) {
        console.error(error);
    }
};

export const UpdatedArticle = async (id, title, contenido, createdBy) => {
    try {
        await axios.put(URI + id, {
            tittle: title,
            contenido: contenido,
            createdBy: createdBy,
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export const DeleteArticle = async (id) => {
    try {
        await axios.delete(URI + id);
        return true;
    } catch (error) {
        return false;
    }
};
