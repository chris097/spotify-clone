import React from 'react'
import Card from '../../components/Cards'

const Dashboard = () => {
  return (
    <div className='w-full h-full font-medium text-sm mt-4 font-sourcesan'>
      <div className='flex justify-between items-center'>
        <div className='font-sourcesan text-2xl text-white'>Recently Played</div>
        <button type='button' className='text-[15px] font-medium hover:border-b-2 hover:border-primarygray'>SEE ALL</button>
      </div>
      <div className='flex items-center space-x-4'>
        <Card
          img='https://i.scdn.co/image/ab6761610000f178a0e4780f120345edddeaada9'
          title='Burna Boy'
          description='Artist'
          className='h-[195px] rounded-full w-[200px] bg-no-repeat bg-center'
        />
        <Card
          img='https://i.scdn.co/image/ab6761610000f1781fb2a505cc085458c85d0e1a'
          title='Black Sherif'
          description='Artist'
          className='h-[195px] rounded-full w-[200px] bg-no-repeat bg-center'
        />
        <Card
          img='https://i.scdn.co/image/ab67706c0000da8470e7f2869a831ef938f2e8bb'
          title='BEST OF AMAPIANO 🇿🇦'
          description='Best Songs from the South African genre Amapiano'
          className='h-[200px] w-full object-fit bg-cover bg-no-repeat bg-center'
        />
        <Card
          img='https://i.scdn.co/image/ab67616d00001e02e3958e82cc3582e949978c6b'
          title='Praise the lord'
          description='By Christian Chiemela'
          className='h-[200px] w-full object-fit bg-cover bg-no-repeat bg-center'
        />
        <Card
          img='https://i.scdn.co/image/ab67706c0000da84f483c9930a71c6d17932377e'
          title='AFROBEATS 2022🌴🔥'
          description='afrolister.com best mix of upbeat afrobeats UPDATED'
          className='h-[200px] w-full object-fit bg-cover bg-no-repeat bg-center'
        />
      </div>
    </div>
  )
}

export default Dashboard