import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import cn from 'classnames'
import styles from './UiVideo.module.css'


const UiVideo = ({
  src,
  playbackRate = 1.0,
  classes
}) => {

  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.playbackRate = playbackRate;
  }, []);

  return (
    <video
      Loop
      autoPlay
      muted
      className={cn(styles.video, classes)}
      playbackRate={playbackRate}
      ref={videoRef}
    >
      <source src={src} />
    </video >
  )
}


UiVideo.protoTypes = {
  src: PropTypes.string,
  playbackRate: PropTypes.number,
  classes: PropTypes.string,
}

export default UiVideo
