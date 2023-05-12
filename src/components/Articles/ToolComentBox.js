import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const BoxComent = (text) => {
    return (
        <>
            <div className="text-editor">
                <ReactQuill
                    theme="bubble"
                    id="text-area"
                    className="form-control"
                    value={text}
                ></ReactQuill>
            </div>
        </>
    );
};

export default BoxComent;
