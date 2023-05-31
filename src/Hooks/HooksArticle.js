import axios from "axios";
import { URI_ARTICLE } from "../config";

export const GetArticleByID = async (id) => {
    try {
        const res = await axios.get(URI_ARTICLE + id);
        return res.data;
    } catch (error) {
        console.error(error);
    }
};

export const GetAllArticles = async () => {
    try {
        const res = await axios.get(URI_ARTICLE);
        const modifyData = ajustarArreglo(res.data);
        return modifyData;
    } catch (error) {
        console.error(error);
    }
};

const ajustarArreglo = (articles) => {
    const modifiedArticles = articles.map((article) => {
        article.createdAt = AjusteHorario(article.createdAt);
        article.updatedAt = AjusteHorario(article.updatedAt);
        return article;
    });
    return modifiedArticles;
};

const AjusteHorario = (date) => {
    const articleDate = new Date(date);
    articleDate.setHours(articleDate.getHours() - 3);
    date = FormateDate(articleDate);
    return date;
};
const FormateDate = (date) => {
    const articleDate = new Date(date);
    const formattedDate = new Intl.DateTimeFormat("es", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
    }).format(articleDate);
    date = formattedDate;
    return date;
};

export const UpdatedArticle = async (id, title, contenido, createdBy) => {
    try {
        await axios.put(URI_ARTICLE + id, {
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
        await axios.delete(URI_ARTICLE + id);
        return true;
    } catch (error) {
        return false;
    }
};
