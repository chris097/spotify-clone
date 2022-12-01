import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { playPause } from '../../redux/feature/audio/audioSlice'
import Player from './Player'

const MusicPlayer = () => {
  const { isPlaying, activeSong } = useSelector((state: any) => state.audio)
  const dispatch = useDispatch()

  if (isPlaying) {
    dispatch(playPause(false))
  } else {
    dispatch(playPause(true))
  }
  return (
    <div className='relative sm:px-12 px-8 w-full flex items-center justify-between'>
      <Player
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  )
}

export default MusicPlayer