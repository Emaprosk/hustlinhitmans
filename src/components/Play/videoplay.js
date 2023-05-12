import React from "react";
import video from "../../multimedia/icono_hh.mp4";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
    return (
        <>
            <ReactPlayer
                width={300}
                height={300}
                url={video}
                playing
                muted
                loop
            />
        </>
    );
};

export default VideoPlayer;
