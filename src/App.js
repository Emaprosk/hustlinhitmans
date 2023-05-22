import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//importamos los comp creados

import Navv from "./layouts/navbar";
import Home from "./Pages/home";
import Foro from "./Pages/foro";
import Login from "./Pages/login";
import Perfil from "./User/Perfil";
import CompCreateUser from "./User/CreateUser";
import CompEditUser from "./User/EditUser";
import CompCreateArticle from "./components/Articles/CreateArticle";
import CompEditArticle from "./components/Articles/EditArticle";
import Article from "./Pages/Articulo";
import Footer from "./Footer";
import Tostada from "./components/Alerts/Toast";
import Dashboard from "./Pages/Dashboard";
import ShowArtCat from "./components/Articles/ShowArtsCat";

function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navv />}>
                            <Route index element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="redes" element={<Dashboard />} />
                            <Route path="foro" element={<Foro />} />
                            <Route path="login" element={<Login />} />;
                            <Route
                                path="/perfil/:username"
                                element={<Perfil />}
                            />
                            ;
                            <Route
                                path="/register"
                                element={<CompCreateUser />}
                            />
                            <Route
                                path="/edit/:id"
                                element={<CompEditUser />}
                            />
                            <Route
                                path="/newarticle"
                                element={<CompCreateArticle />}
                            />
                            <Route path="/article/:id" element={<Article />} />
                            <Route
                                path="/editarticle/:id"
                                element={<CompEditArticle />}
                            />
                            <Route
                                path="/categoria/:category"
                                element={<ShowArtCat />}
                            />
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route
                                path="*"
                                element={<Navigate replace to="/" />}
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>

            <Tostada />
            <Footer />
        </>
    );
}

export default App;
