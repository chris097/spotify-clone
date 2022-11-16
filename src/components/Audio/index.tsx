import { useState, useRef, useEffect } from 'react';
import { MdOutlinePause } from 'react-icons/md';

const AudioComponent = () => {
// state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<any | null>(0);
  const [currentTime, setCurrentTime] = useState<any | null>(0);

  // reference
  const audioPlayer = useRef<HTMLAudioElement>(null) // reference our audio component
  const progressBar = useRef<HTMLInputElement>(null);

    //useEffect
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current?.duration || duration);
    setDuration(seconds);
    let progess:any|number = progressBar?.current?.max;
    progess = seconds;
  }, [audioPlayer?.current?.onloadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs:any) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinute = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor(secs % 60);
    const returedSeconds = seconds < 10 ? `0${seconds}` : seconds

    return `${returnedMinute} : ${returedSeconds}`
  }

  const handleAudioPlay = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue)
    if (!prevValue) {
      audioPlayer.current?.play()
    } else {
      audioPlayer.current?.pause()
    }
  };

  const changeHandler = () => {
    let audioCurrentTime: any = audioPlayer.current?.currentTime;
    let progressVal:any|number = progressBar.current;
    audioCurrentTime = progressVal?.value;
    progressVal?.style.setProperty('0', `${audioCurrentTime / duration * 100}%`);
    setCurrentTime(audioCurrentTime);
    console.log('currentTime', `${progressVal?.value / duration * 100}%`)
  }

  return (
    <div className='fixed bottom-0 px-3 left-0 z-50 bg-cardgray border-t border-bordergray w-full h-[90px]'>
        <div className='flex justify-between items-center h-full'>
          <div className='flex space-x-3 items-center'>
            <img width='56px' height='56px' src='https://i.scdn.co/image/ab67616d000048518a6ac9a40bdbb616a1a518f4' alt='audio image' />
            <div className='flex space-x-8 items-center'>
              <div>
                <div className='text-white text-[16px]'>Dada</div>
                <div>Young John</div>
              </div>
              <div className='flex space-x-4'>
                <span><svg fill='#b3b3b3' role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z"></path></svg></span>
                <span><svg fill='#b3b3b3' width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" fillRule="nonzero"></path><path d="M10 8h4v3h-4z"></path></g></svg></span>
              </div>
            </div>
          </div>
          <div className='flex justif-center flex-col items-center'>
          {/* audio */}
          <audio ref={audioPlayer} src='https://www.computerhope.com/jargon/m/example.mp3' preload='metadata'></audio>
        <div className='flex space-x-8 items-center'>
            <span><svg fill='#727272' height="16" width="16" viewBox="0 0 16 16"><path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"></path><path d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"></path></svg></span>
            <span><svg fill='#a7a7a7' role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"></path></svg></span>
            {/* play & pause */}
            <button type='button' onClick={handleAudioPlay} className='w-8 h-8 rounded-full bg-white flex justify-center items-center'>
              {isPlaying ? <MdOutlinePause color='#000' size="16px" />:
                <svg role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"></path></svg>
              }
            </button>
            <span><svg fill='#a7a7a7' role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"></path></svg></span>
            <span><svg role="img" fill='#727272' height="16" width="16" viewBox="0 0 16 16"><path d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"></path></svg></span>
          </div>
          {/* progress bar */}
        <div className='flex space-x-4 items-center mt-2'>
            <div>{calculateTime(currentTime)}</div> 
            <div>
              <input type="range" className='progressBar' defaultValue="0" ref={progressBar} onChange={changeHandler} />
            </div>  
            <div>{!duration ? "00 : 00" : calculateTime(duration)}</div>
        </div>
    </div>
        <div className='flex space-x-4 items-center'>
          <span>
            <svg role="img" fill='#727272' height="16" width="16" viewBox="0 0 16 16"><path d="M13.426 2.574a2.831 2.831 0 00-4.797 1.55l3.247 3.247a2.831 2.831 0 001.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 004.74 9.075L2.065 12.12a1.287 1.287 0 001.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 114.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 01-3.933-3.933l2.676-3.045 3.505-3.99z"></path></svg>
          </span>
          <span>
            <svg role="img" fill='#727272' height="16" width="16" viewBox="0 0 16 16"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"></path></svg>
          </span>
          <span>
            <svg role="presentation" fill='#727272' height="16" width="16" viewBox="0 0 16 16"><path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15h-6.5A1.75 1.75 0 016 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25h-6.5zm-6 0a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 010 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path><path d="M13 10a2 2 0 11-4 0 2 2 0 014 0zm-1-5a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </span>
          <span>
            <svg role="presentation" fill='#727272' height="16" width="16" aria-label="Volume high" id="volume-icon" viewBox="0 0 16 16"><path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"></path></svg>
          </span>
          {/* volume */}
          <div>
            <input type='range' className='h-1 rounded' />
          </div>
          </div>
        </div>
      </div>
  )
}

export default AudioComponent