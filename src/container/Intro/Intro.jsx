import React, { useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import "./Intro.css";
import { meal } from "../../constants";
import { useRef } from "react";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();
  const handleVideo = () => {
    setPlayVideo((previousPlayVideo) => !previousPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        ref={vidRef}
        loop
        controls={false}
        muted
      ></video>
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#FFF" fontSize={30}></BsPauseFill>
          ) : (
            <BsFillPlayFill color="#FFF" fontSize={30}></BsFillPlayFill>
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
