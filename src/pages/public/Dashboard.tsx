import React from 'react'
import Card from '../../components/Cards'
import { artists, recents } from '../../data'

const Dashboard = () => {
  return (
    <>
    <div className='w-full h-full font-medium text-sm mt-4 font-sourcesan'>
      <div className='flex justify-between items-center'>
        <div className='font-sourcesan text-2xl text-white'>Recently Played</div>
        <button type='button' className='text-[15px] font-medium hover:border-b-2 hover:border-primarygray'>SEE ALL</button>
      </div>
      <div className='flex items-center space-x-4'>
          {recents.map(recent => (
            <Card
              img={recent.url}
              title={recent.title}
              description={recent.description}
              className={`h-[200px] w-full ${(recent.id === 1 || recent.id === 2) && 'rounded-full'}`}
          />
        ))}
      </div>
    </div>
    <div className='w-full h-full font-medium text-sm mt-10 font-sourcesan'>
      <div className='flex justify-between items-center'>
        <div className='font-sourcesan text-2xl text-white'>Artists you liked</div>
        <button type='button' className='text-[15px] font-medium hover:border-b-2 hover:border-primarygray'>SEE ALL</button>
      </div>
      <div className='flex items-center space-x-4'>
        {artists.map(artist => (
          <Card
            img={artist.url}
            title={artist.title}
            description={artist.description}
            className="h-[200px] w-full"
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default Dashboard