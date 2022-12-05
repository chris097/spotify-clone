import React from 'react'

type Track = {
  song?: any
};

const Tracks:React.FC<Track> = ({song}) => {
  return (
    <div className='flex space-x-3 items-center'>
            <img width='56px' height='56px' src={song?.images?.coverart} alt='audio image' />
            <div className='flex space-x-8 items-center'>
               <div>
          <div className='text-white text-[16px]'>{song?.title}</div>
                <div>{song?.subtitle}</div>
              </div>
              <div className='flex space-x-4'>
                <span><svg fill='#b3b3b3' role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z"></path></svg></span>
                <span><svg fill='#b3b3b3' width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" fillRule="nonzero"></path><path d="M10 8h4v3h-4z"></path></g></svg></span>
              </div>
            </div>
          </div>
  )
}

export default Tracks