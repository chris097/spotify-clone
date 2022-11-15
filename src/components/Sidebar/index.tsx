import React from 'react'
import { NavLink } from 'react-router-dom'
import navs from '../../nav'
import HomeIcon from '../../public/svg/HomeIcon'
import SpotifyLogo from '../../public/svg/SpotifyLogo'
import { PUBLIC_ROUTE } from '../../routes/url'

const Sidebar = () => {

  // const data = navs?.map(nav => nav)
  return (
    <div className='w-sidebarwidth h-screen fixed bg-black px-6 pt-5 font-medium text-[16px]'>
      <div>
        <SpotifyLogo />
        {/* {
          navs?.map((nav:any, index:number) => (
            <div>
              <button type='button' className='mt-3' key={index}>
              {nav.icon}
              <span className='font-medium text-[15px] font-sourcesan'>{nav.name}</span>
            </button>
            </div>
          ))
        } */}
        <div className='mt-10'>
          {/* <HomeIcon /> */}
          <NavLink to={`${PUBLIC_ROUTE.SPOTIFY_DASHBOARD_PAGE}`} className={({isActive}) => isActive ? 'active flex items-center space-x-4 mt-5 font-sourcesan hover:text-white' : 'flex items-center space-x-4 mt-5 font-sourcesan hover:text-white'}>
            <svg height="24" width="24" stroke='#b3b3b3' viewBox="0 0 24 24"><path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path></svg>
            <div className='font-medium text-white text-[16px]'>Home</div>
          </NavLink>
          <NavLink to={`${PUBLIC_ROUTE.SPOTIFY_SEARCH_PAGE}`} className={({isActive}) => isActive ? 'active flex items-center space-x-4 mt-5 font-sourcesan hover:text-white' : 'flex items-center space-x-4 mt-5 font-sourcesan hover:text-white'}>
            <svg height="24" width="24" fill='#b3b3b3' clipPath='#b3b3b3' viewBox="0 0 24 24">
              {/* <path d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z">
              </path> */}
              <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z">
              </path></svg>
            <span className='font-medium text-[16px]'>Search</span>
          </NavLink>
          <NavLink to={`${PUBLIC_ROUTE.SPOTIFY_LIBRARY_PAGE}`} className={({isActive}) => isActive ? 'active flex items-center space-x-4 mt-5 font-sourcesan hover:text-white' : 'flex items-center space-x-4 mt-5 font-sourcesan hover:text-white'}>
           <svg height="24" width="24" fill='#b3b3b3' viewBox="0 0 24 24"><path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path></svg>
            <span className='font-medium text-[16px]'>Your Library</span>
          </NavLink>
        </div>
        <div className='mt-10 font-sourcesan'>
          <button type='button' className='flex item-center space-x-2'>
            <div className='w-6 h-6 items-center flex justify-center bg-primarygray rounded-[2px]'><svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16"><path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path></svg></div>
            <span className='text-primarygray hover:text-white'>Create Playlist</span>
          </button>
        </div>
        <div className='fixed bottom-24 font-medium text-[15px]'>
          <div className='flex space-x-3 items-center'>
            <span>
              <svg fill='#b3b3b3' role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path><path d="M12 6.05a1 1 0 011 1v7.486l1.793-1.793a1 1 0 111.414 1.414L12 18.364l-4.207-4.207a1 1 0 111.414-1.414L11 14.536V7.05a1 1 0 011-1z"></path></svg>
            </span>
            <div>Install App</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar