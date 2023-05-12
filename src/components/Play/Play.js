import ReactPlayer from "react-player";
import video from "../../multimedia/icono_hh.mp4";

export const playVideo = () => {
    <ReactPlayer url={video} width={300} height={300} playing loop />;
};
