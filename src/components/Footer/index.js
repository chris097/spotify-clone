import React from 'react'
import AudioComponent from '../Audio'

const Footer = () => {
  return (
    <div>
      <div className='flex justify-between mt-24 mb-14'>
        <div className='flex space-x-28'>
          <div>
            <div className='text-lg text-white'>Company</div>
            <ul className='text-[16px]'>
              <li className='mt-2'>About</li>
              <li className='mt-2'>Jobs</li>
              <li className='mt-2'>For the Record</li>
            </ul>
          </div>
          <div>
            <div className='text-lg text-white'>Communities</div>
            <ul className='text-[16px]'>
              <li className='mt-2'>For Artist</li>
              <li className='mt-2'>For Developer</li>
              <li className='mt-2'>Adertising</li>
              <li className='mt-2'>Investors</li>
              <li className='mt-2'>Vendors</li>
            </ul>
          </div>
          <div>
            <div className='text-lg text-white'>Useful links</div>
            <ul className='text-[16px]'>
              <li className='mt-2'>Support</li>
              <li className='mt-2'>Free Mobile App</li>
            </ul>
          </div>
        </div>
        <div className='flex space-x-6'>
          <div className='bg-circlegray hover:bg-nextgray flex justify-center items-center w-[40px] h-[40px] rounded-full'>
            <svg fill='#fff' height="16" width="16" viewBox="0 0 16 16"><path d="M8 1.44c2.136 0 2.389.009 3.233.047.78.036 1.203.166 1.485.276.348.128.663.332.921.598.266.258.47.573.599.921.11.282.24.706.275 1.485.039.844.047 1.097.047 3.233s-.008 2.389-.047 3.232c-.035.78-.166 1.204-.275 1.486a2.654 2.654 0 01-1.518 1.518c-.282.11-.706.24-1.486.275-.843.039-1.097.047-3.233.047s-2.39-.008-3.232-.047c-.78-.035-1.204-.165-1.486-.275a2.477 2.477 0 01-.921-.599 2.477 2.477 0 01-.599-.92c-.11-.282-.24-.706-.275-1.486-.038-.844-.047-1.096-.047-3.232s.009-2.39.047-3.233c.036-.78.166-1.203.275-1.485.129-.348.333-.663.599-.921a2.49 2.49 0 01.92-.599c.283-.11.707-.24 1.487-.275.843-.038 1.096-.047 3.232-.047L8 1.441zm.001-1.442c-2.172 0-2.445.01-3.298.048-.854.04-1.435.176-1.943.373a3.928 3.928 0 00-1.417.923c-.407.4-.722.883-.923 1.417-.198.508-.333 1.09-.372 1.942C.01 5.552 0 5.826 0 8c0 2.172.01 2.445.048 3.298.04.853.174 1.433.372 1.941.2.534.516 1.017.923 1.417.4.407.883.722 1.417.923.508.198 1.09.333 1.942.372.852.039 1.126.048 3.299.048 2.172 0 2.445-.01 3.298-.048.853-.04 1.433-.174 1.94-.372a4.087 4.087 0 002.34-2.34c.199-.508.334-1.09.373-1.942.039-.851.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.853-.174-1.433-.372-1.94a3.924 3.924 0 00-.923-1.418A3.928 3.928 0 0013.24.42c-.508-.197-1.09-.333-1.942-.371-.851-.041-1.125-.05-3.298-.05l.001-.001z"></path><path d="M8 3.892a4.108 4.108 0 100 8.216 4.108 4.108 0 000-8.216zm0 6.775a2.668 2.668 0 110-5.335 2.668 2.668 0 010 5.335zm4.27-5.978a.96.96 0 100-1.92.96.96 0 000 1.92z"></path></svg>
          </div>
          <div className='bg-circlegray hover:bg-nextgray flex justify-center items-center w-[40px] h-[40px] rounded-full'>
            <svg role="img" fill='#fff' height="16" width="16" viewBox="0 0 16 16"><path d="M13.54 3.889a2.968 2.968 0 001.333-1.683 5.937 5.937 0 01-1.929.738 2.992 2.992 0 00-.996-.706 2.98 2.98 0 00-1.218-.254 2.92 2.92 0 00-2.143.889 2.929 2.929 0 00-.889 2.15c0 .212.027.442.08.691a8.475 8.475 0 01-3.484-.932A8.536 8.536 0 011.532 2.54a2.993 2.993 0 00-.413 1.523c0 .519.12 1 .361 1.445.24.445.57.805.988 1.08a2.873 2.873 0 01-1.373-.374v.04c0 .725.23 1.365.69 1.92a2.97 2.97 0 001.739 1.048 2.937 2.937 0 01-1.365.056 2.94 2.94 0 001.063 1.5 2.945 2.945 0 001.77.603 5.944 5.944 0 01-3.77 1.302c-.243 0-.484-.016-.722-.048A8.414 8.414 0 005.15 14c.905 0 1.763-.12 2.572-.361.81-.24 1.526-.57 2.147-.988a9.044 9.044 0 001.683-1.46c.5-.556.911-1.155 1.234-1.798a9.532 9.532 0 00.738-1.988 8.417 8.417 0 00.246-2.429 6.177 6.177 0 001.508-1.563c-.56.249-1.14.407-1.738.476z"></path></svg>
          </div>
          <div className='bg-circlegray hover:bg-nextgray ease-in-out duration-300 transform transition flex justify-center items-center w-[40px] h-[40px] rounded-full'>
            <svg role="img" fill='#fff' height="16" width="16" viewBox="0 0 16 16"><path d="M16 8a8 8 0 10-9.25 7.903v-5.59H4.719V8H6.75V6.237c0-2.005 1.194-3.112 3.022-3.112.875 0 1.79.156 1.79.156V5.25h-1.008c-.994 0-1.304.617-1.304 1.25V8h2.219l-.355 2.313H9.25v5.59A8.002 8.002 0 0016 8z"></path></svg>
          </div>
        </div>
      </div>
      <div className='border-basergba border-[.5px]'></div>
      <div className='mt-10 mb-44 flex justify-between text-[15px]'>
        <div>
          <ul className='flex space-x-9'>
            <li>Legal</li>
            <li>Privacy Center</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
            <li>About Ads</li>
          </ul>
        </div>
        <div>© 2022 Spotify AB</div>
      </div>
      <AudioComponent />
    </div>
  )
}

export default Footer