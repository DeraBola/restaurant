import { React, useState, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setplayVideo] = useState(false);
  const VidRef = useRef();
  return (
    <div className="app__video">
      <video
        src={meal}
        ref={VidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay f">

      </div>
    </div>
  );
};

export default Intro;
