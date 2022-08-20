import {React, useState} from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => { 
  const [playVideo, setplayVideo] = useState(false)
  const VidRef React.useRef();
const first = useRef(second)
  return(
  <div className="app__video">
  <video 
  src={meal} 
  ref={video}
  type="video/mp4"
  loop 
  controls={false}
  muted
   />
  </div>
)
}

export default Intro;
