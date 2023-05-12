import React from "react";
import ReactPlayer from "react-player";
import video from "../../multimedia/icono_hh.mp4";

const Reproductor = () => {
    return (
        <>
            <ReactPlayer width={300} height={300} playing loop url={video} />
        </>
    );
};

export default Reproductor;
