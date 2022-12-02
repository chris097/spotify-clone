import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { playPause, setActiveSong } from '../../redux/feature/audio/audioSlice'

type Props = {
  song?: any
  className?: string
  data?: []
  i?: number
}

const Card: React.FC<Props> = ({song, data, i, className}) => {

  const { isPlaying, activeSong } = useSelector((state: any) => state.audio);
  const dispatch = useDispatch();

  console.log(i)

 const togglePlayPause = () => {
    const prevValue = isPlaying;
      dispatch(playPause(!prevValue));
      if (!prevValue) {
        dispatch(playPause(true))
        dispatch(setActiveSong({song, data, i}))
   } else{
     dispatch(playPause(false))
   }
    };
  
  return (
    <div className='w-[217px] mt-6'>
      <div className={`overflow-hidden aspect-video bg-cardgray h-[310px] w-full ${(isPlaying && activeSong?.title === song?.title) && "bg-hovergray"} hover:bg-hovergray animate-slideup cursor-pointer rounded-xl relative group`}>
        <div className={`rounded-xl z-50 ${(isPlaying && activeSong?.title === song?.title) ? "" : "opacity-0 group-hover:opacity-100"} transition duration-300 ease-in-out cursor-pointer absolute to-transparent bg-gradient-to-t inset-x-0 -bottom-2 text-white flex items-end`}>
            <div className='w-full'>
              <div className="flex justify-end w-full space-y-3 text-xl group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">    
              {/* playpause */}
              <div className='w-full flex justify-end'>
                <button onClick={togglePlayPause} type="button" className='bg-primarygreen flex justify-center w-14 h-14 -mt-32 mr-6 rounded-full items-center'>
                  {isPlaying && activeSong?.title === song?.title ?
                    (
                      <svg height="24" width="24" viewBox="0 0 24 24"><path d="M5.7 3a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7H5.7zm10 0a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7h-2.6z"></path></svg>
                    ) :
                    (
                      <svg role="img" height="24" width="24" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                    )
                  }
                </button>
              </div>
                    </div>
                </div>
        </div>
        <div className='w-full p-4 rounded-md font-sourcesan'>
          <div className='w-full'>
            <img className={className} src={song?.images?.coverart} />
          </div>
            <Link to={`/songs/${song?.key}`}>
              <p className='font-medium text-[18px] text-white mt-7 truncate'>
                {song?.title}
              </p>
            </Link>
          <p className='text-[15px] mt-1'>
            <Link to="">
              {song?.subtitle}
            </Link>
          </p>
          </div>
        </div>
 </div>
  )
};

export default Card