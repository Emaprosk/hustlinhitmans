import React from "react";
import video from "../../multimedia/icono_hh.mp4";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
    return (
        <>
            <ReactPlayer
                width={250}
                height={"auto"}
                url={video}
                playing
                muted
                loop
            />
        </>
    );
};

export default VideoPlayer;
