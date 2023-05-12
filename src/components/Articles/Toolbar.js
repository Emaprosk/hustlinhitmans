import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextArea = (text, setText) => {
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote", "color"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["link", "image"],
            ["clean"],
        ],
    };
    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "color",
    ];

    return (
        <div>
            <ReactQuill
                theme="snow"
                id="text-area"
                className="form-control"
                modules={modules}
                formats={formats}
                value={text}
                onChange={setText}
            ></ReactQuill>
        </div>
    );
};

export default TextArea;
