import { React, useState, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setplayVideo] = useState(false);
  const VidRef = useRef();
  const handleVideo = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo) 
    if(playVideo) {
      vidRef.current.pause();
    }else{
      vidRef.current.play();
    }
  }
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
      <div className="app__video-overlay flex__center">
        <div 
        className="app__video-overlay-circle flex__center" 
        onClick={handleVideo}
        >
{playVideo ?(
  <BsPauseFill color="#fff"  />
): <BsFillPlayFill />
 }
        </div>
      </div>
    </div>
  );
};

export default Intro;
