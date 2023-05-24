export const getItemUser = () => {
    let isLogged = null;
    const loggedUserJSON = window.localStorage.getItem("loggedUserApp");
    if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON);
        isLogged = user;
    }
    return isLogged;
};

export const destroySessions = () => {
    window.localStorage.removeItem("loggedUserApp");
    //window.location.reload();
};
