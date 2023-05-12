import React from "react";
import "./../Styles/OptionsTool.css";
import { Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

const Options = () => {
    return (
        <>
            <div className="body">
                <Dropdown className="list-container" autoClose="outside">
                    <Dropdown.Toggle className="more-button">
                        <DropdownMenu>
                            <Dropdown.Item>
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
                            <Dropdown.Item>
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
