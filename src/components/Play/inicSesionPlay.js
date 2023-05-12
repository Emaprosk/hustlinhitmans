import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import video from "../../multimedia/inicSesion_hh.mp4";

const InicSesionPlayer = () => {
    const [playing, setPlaying] = useState(false);
    const playerRef = useRef(null);

    return (
        <div>
            <ReactPlayer
                width={200}
                height={200}
                ref={playerRef}
                url={video}
                playing={playing}
                muted
                onMouseEnter={() => setPlaying(true)}
                onMouseLeave={() => {
                    playerRef.current.seekTo(0);
                    setPlaying(false);
                }}
            />
        </div>
    );
};

export default InicSesionPlayer;
