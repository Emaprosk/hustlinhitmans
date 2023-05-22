import React from "react";
import "./../Styles/OptionsTool.css";
import { Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { DeleteArticle } from "../Hooks/HooksArticle";
import { toastError, toastSuccess } from "./Alerts/Tostadas";

const Options = (props) => {
    const updateList = (id) => {
        const nuevaLista = props.list.filter((item) => item.id !== props.id);
        props.setList(nuevaLista);
    };

    return (
        <>
            <div className="body">
                <Dropdown
                    className="list-container"
                    autoClose="outside"
                    drop="end"
                >
                    <Dropdown.Toggle className="more-button">
                        <DropdownMenu>
                            <Dropdown.Item href={"/editarticle/" + props.id}>
                                <li className="more-button-list-item">
                                    <span>Edit</span>

                                    <div className="icon">
                                        <ion-icon name="pencil-outline"></ion-icon>
                                    </div>
                                </li>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <li className="more-button-list-item">
                                    <span>Share</span>
                                    <div className="icon">
                                        <ion-icon name="share-social-outline"></ion-icon>
                                    </div>
                                </li>
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => {
                                    DeleteArticle(props.id)
                                        ? toastSuccess("Articulo borrado!")
                                        : toastError("Error removing");
                                    updateList(props.id);
                                }}
                            >
                                <li className="more-button-list-item">
                                    <span>Delete</span>
                                    <div className="icon">
                                        <ion-icon name="trash-outline"></ion-icon>
                                    </div>
                                </li>
                            </Dropdown.Item>
                        </DropdownMenu>
                    </Dropdown.Toggle>
                </Dropdown>
            </div>
        </>
    );
};

export default Options;
