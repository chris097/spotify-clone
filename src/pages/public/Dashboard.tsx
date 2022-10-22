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
          className='h-[195px] rounded-full w-[200px] aspect-square group-hover:scale-110 transition duration-300 ease-in-out'
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
      {/* <div className='flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br'>
  <div
            className="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group"
        >
            <div
                className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
            >
                <div>
                    <div
                        className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                    >
                        <div className="font-bold">Jessie Watsica</div>

                        <div onClick={() => console.log('something was clicked.')} className="opacity-60 text-sm ">
                            <img src="https://i.scdn.co/image/ab67706c0000da84f483c9930a71c6d17932377e" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <img
                alt=""
                className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src="https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80
"
            />
        </div>
 </div> */}
    </div>
  )
}

export default Dashboard