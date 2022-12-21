import Card from '../../components/Cards';
import Footer from '../../components/Footer';
import {  useGetTopChartsQuery } from '../../redux/services/ShazamCore';
// import { artists, dailys, recents } from '../../data'
import AudioPlayer from '../../components/Audio';
import { useDispatch, useSelector } from 'react-redux';
import { playPause } from '../../redux/feature/audio/audioSlice';
import PlayPause from '../../components/Audio/PlayPause';
import { useState } from 'react';
// import TopCard from '../../components/Cards/TopCard';

const Dashboard = () => {

  const { isPlaying, activeSong } = useSelector((state: any) => state.audio);
  console.log(activeSong?.title)

  const dispatch = useDispatch()

  const { data, isFetching } = useGetTopChartsQuery([]);
  
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    if (prevValue) {
      dispatch(playPause(true))
    }
  }
 
  return (
    <div className='mt-20 font-sourcesan'>
      <div className='bg-gradient-to-b from-[#8209114a] w-full md:pl-64 md:pr-10 pd:mx-0 h-60'>
        <div className='pt-2'>
          <div className='text-white text-2xl font-semibold'>Good Morning</div>
          <div className='flex gap-4 mt-4'>
            {data?.slice(0, 3).map((song:any) => (
              <div className='border border-[#392e2e] flex cursor-pointer justify-between items-center rounded shadow pr-3 h-[75px] bg-[#392e2e] hover:bg-[#3e3838] w-full'>
            <div className='flex gap-3'>
                  <img
                    src={song?.images?.coverart}
                    className='bg-white w-18 rounded-tl rounded-bl h-[75px]'
                  />
                  <div className='flex items-center h-[75px]'>{song?.title}</div>
              </div>
              <div className='w-full flex justify-end'>
                {/* <button onClick={togglePlayPause} type="button" className='bg-primarygreen flex justify-center w-12 h-12 mr-1 rounded-full items-center'>
                  {isPlaying && activeSong?.title === song?.title ?
                    (
                      <svg height="24" width="24" viewBox="0 0 24 24"><path d="M5.7 3a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7H5.7zm10 0a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7h-2.6z"></path></svg>
                    ) :
                    (
                      <svg role="img" height="24" width="24" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                    )
                  }
                </button> */}
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
              <div className='border border-[#392e2e] cursor-pointer flex justify-between items-center rounded shadow pr-3 h-[75px] bg-[#392e2e] w-full'>
            <div className='flex gap-3'>
                  {song?.images?.coverart ? <img
                    src={song?.images?.coverart}
                    className='bg-white w-18 rounded-tl rounded-bl h-[75px]'
                  /> : <div className='w-18 h-[75px] items-center flex'>Add img</div>}
                  <div className='flex items-center h-[75px]'>{song?.title}</div>
              </div>
                <div>
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
    isFetching ? <div>Loading...</div> :
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
      </div>
  )
}

export default Dashboard