import Card from '../../components/Cards';
import Footer from '../../components/Footer';
import {  useGetTopChartsQuery } from '../../redux/services/ShazamCore';
import AudioPlayer from '../../components/Audio';
import { useDispatch, useSelector } from 'react-redux';
import { playPause } from '../../redux/feature/audio/audioSlice';
import PlayPause from '../../components/Audio/PlayPause';
import { setActiveColor } from '../../redux/feature/composition/colorScheme';

const Dashboard = () => {

  // states
  const { isPlaying, activeSong } = useSelector((state: any) => state.audio);
  const { activeColor } = useSelector((state:any) => state.color)
  // dispatcher 
  const dispatch = useDispatch()
  // query
  const { data, isFetching } = useGetTopChartsQuery([]);
  // function
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    if (prevValue) {
      dispatch(playPause(true))
    }
  };
  const handleMouseEnter = () => {
    dispatch(setActiveColor('bg-gradient-to-b from-[#82091159]'))
  };
  const handleMouseLeave = () => {
    dispatch(setActiveColor('bg-gradient-to-b from-[#242424be]'))
  };

  const colorScheme = () => {
    if (activeColor === 'bg-gradient-to-b from-[#82091159]') {
    return 'bg-[#eacece33]'
  } else {
    return 'bg-[#303030f0]'
    }
  }

  // activeColor === '' ? 'bg-[#303030f0]' : 'bg-[#eacece33]'
 
  return (
  <>
   { isFetching ? <div className='pl-64 z-50 relative'>Loading...</div> :  <div className='mt-20 font-sourcesan'>
      <div className={` ${activeColor  === '' ? 'bg-gradient-to-b from-[#242424be] transition ease-in-out duration-700 transform' : activeColor} w-full md:pl-64 md:pr-10 pd:mx-0 h-60`}>
        <div className='pt-2'>
          <div className='text-white text-2xl font-semibold'>Good Morning</div>
          <div className='flex gap-4 mt-4' >
            {data?.slice(0, 3).map((song:any) => (
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`overflow-hidden animate-slideup relative group flex cursor-pointer justify-between items-center rounded shadow pr-3 h-[80px] ${colorScheme()} bg-[#303030f0] w-full`}>
            <div className='flex gap-3 transition animate-300 ease-in-out absolute to-transparent inset-x-0 group'>
                  <img
                    src={song?.images?.coverart}
                    className='bg-white w-18 rounded-tl rounded-bl h-[80px]'
                    alt='audio image'
                  />
                  <div className='flex items-center h-[80px] whitespace-nowrap text-white font-semibold'>{song?.title}</div>
              </div>
              <div className='w-full flex justify-end transform transition duration-300 to-transparent ease-in-out group-hover:translate-y-0 translate-y-16'>
                  <PlayPause
                    togglePlayPause={togglePlayPause}
                    isPlaying={isPlaying}
                    song={song?.title}
                    activeSong={activeSong?.title}
                  />
              </div>
          </div>
            ))}
          </div>
          <div className='flex gap-4 mt-5'>
            {data?.slice(3, 6).map((song:any) => (
              <div className='overflow-hidden animate-slideup relative group flex cursor-pointer justify-between items-center rounded shadow pr-3 h-[80px] bg-[#303030f0] w-full'>
            <div className='flex gap-3'>
                  {song?.images?.coverart ? <img
                    src={song?.images?.coverart}
                    className='bg-white w-18 rounded-tl rounded-bl h-[80px]'
                  /> : <div className='w-18 h-[80px] whitespace-nowrap items-center flex'>Add img</div>}
                  <div className='flex items-center h-[80px] whitespace-nowrap text-white font-semibold'>{song?.title}</div>
              </div>
                <div className='w-full flex justify-end transform transition duration-300 to-transparent ease-in-out group-hover:translate-y-0 translate-y-16'> 
                  <PlayPause
                    togglePlayPause={togglePlayPause}
                    isPlaying={isPlaying}
                    song={song?.title}
                    activeSong={activeSong?.title}
                  />
              </div>
          </div>
            ))}
          </div>
        </div>
      </div>
   {
          <>
    <div className='w-full h-full font-medium text-sm font-sourcesan md:pl-64 mt-4 md:pr-10 pd:mx-0'>
      <div className='flex justify-between items-center'>
        <div className='font-sourcesan text-xl text-white'>Recently Played</div>
        <div className='text-white'>See All</div>
      </div>
        <div className='flex items-center space-x-4'>
          {data?.slice(0, 5).map((song: any, i: number) => (
            <>
            <Card
                song={song}
                key={i}
                data={data}
                i={i}
            />
            </>
          ))}
      </div>
    </div>
            <Footer />
            <AudioPlayer
                      song={"song"}
                      data={data}
                      i={1}
                    />
          </>}
      </div>}
      </>
      )
}

export default Dashboard