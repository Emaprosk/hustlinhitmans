import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import video from "../../multimedia/closeSesion_hh.mp4";

const CloseSesionPlayer = () => {
    const [playing, setPlaying] = useState(false);
    const playerRef = useRef(null);

    return (
        <div>
            <ReactPlayer
                width={200}
                height={"auto"}
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

export default CloseSesionPlayer;
