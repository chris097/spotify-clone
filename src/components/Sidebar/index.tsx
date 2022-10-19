import React from 'react'
import SpotifyLogo from '../../public/svg/spotifyLogo'

const Sidebar = () => {
  return (
    <div className='w-sidebarwidth h-screen fixed bg-black px-6 pt-5'>
      <div>
        <SpotifyLogo />
        <div className='flex mt-10 item-center'>
          <svg style={{ display: 'block' }} height="24" width="24" fill='#fff' className="text-white" aria-hidden="true" viewBox="0 0 24 24"><path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path></svg>
          <div>Home</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar