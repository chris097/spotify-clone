import React from 'react'
import navs from '../../nav'
import HomeIcon from '../../public/svg/HomeIcon'
import SpotifyLogo from '../../public/svg/SpotifyLogo'

const Sidebar = () => {
  return (
    <div className='w-sidebarwidth h-screen fixed bg-black px-6 pt-5'>
      <div>
        <SpotifyLogo />
        {
          navs?.map((nav:any, index) => (
            <div className='mt-3' key={index}>
              <div className=''>{nav.icon}</div>
              <span className='font-medium text-[15px] font-sourcesan'>{nav.name}</span>
            </div>
          ))
        }
        {/* <div className='flex mt-10 item-center space-x-4'>
          <HomeIcon />
          <svg role="img" height="24" width="24" className="Svg-ytk21e-0 jAKAlG home-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"></path></svg>
          <svg height="24" width="24" stroke='#fff' aria-hidden="true" viewBox="0 0 24 24"><path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path></svg>
          <div className='font-medium text-[18px] font-sourcesan'>Home</div>
        </div> */}
      </div>
    </div>
  )
}

export default Sidebar