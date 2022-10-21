import React from 'react'

const Dashboard = () => {
  return (
    <div className='w-full h-full font-medium text-sm mt-4 font-sourcesan'>
      <div className='flex justify-between items-center'>
        <div className='font-sourcesan text-2xl text-white'>Recently Played</div>
        <button type='button' className='text-[15px] font-medium hover:border-b-2 hover:border-primarygray'>SEE ALL</button>
      </div>
    </div>
  )
}

export default Dashboard