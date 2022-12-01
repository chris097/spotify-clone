import React, { useRef, useEffect } from 'react';
 
type Playing = {
  isPlaying?: any
  activeSong?: any
}

const Player: React.FC<Playing> = ({ isPlaying, activeSong }) => {
  
  const ref = useRef<HTMLMediaElement>(null);

  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  // useEffect(() => {
  //   let vol = ref.current?.volume
  //   vol = volume;
  // }, [volume]);
  // // updates audio element only on seekTime change (and not on each rerender):
  // useEffect(() => {
  //   let curTime = ref?.current?.currentTime
  //   curTime = seekTime;
  // }, [seekTime]);

  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      ref={ref}
      // onLoadedData={onLoadedData}
      // loop={repeat}
      // onEnded={onEnded}
      // onTimeUpdate={onTimeUpdate}
    />
  )
}

export default Player