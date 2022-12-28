import { useSelector } from 'react-redux'
import { COLOR, colorQuery } from '../colors';

const Header = () => {

  const { activeColor } = useSelector((state: any) => state.color);

//  function colorScheme () {
//     if (activeColor === 'bg-gradient-to-b from-[#82091159]') {
//     return 'bg-[#82091159]'
//   } else {
//     return 'bg-[#242424be]'
//     }
//   }

  return (
    <>
      <div className={`${colorQuery(activeColor, COLOR.HD_RED_BG, COLOR.HD_GRAY_BG)} fixed top-0 left-0 z-40 w-full pl-64 h-20 flex justify-between items-center font-sourcesan pr-8`}>
      <div className='flex space-x-5'>
        <button className='bg-secondarygray w-9 h-9 items-center flex justify-center rounded-full'>
          <svg role="img" height="24" width="24" fill='#b3b3b3' viewBox="0 0 24 24"><path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path></svg>
        </button>
        <button className='bg-secondarygray w-9 h-9 items-center flex justify-center rounded-full'>
          <svg role="img" height="24" width="24" fill='#b3b3b3' viewBox="0 0 24 24"><path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path></svg>
        </button>
      </div>
      <div className='flex space-x-10'>
        <button className='border ease-in-out duration-300 transform transition border-basegray w-24 text-white hover:bg-black hover:border-white rounded-full'>Upgrade</button>
        <button className='flex items-center bg-black w-[180px] justify-center space-x-2 rounded-full pr-2 py-1 hover:bg-basegray'>
          <div className='bg-nextgray w-8 h-7 flex justify-center items-center rounded-full ml-1'><svg role="img" height="16" width="16" fill="#fff" aria-hidden="true" viewBox="0 0 16 16"><path d="M6.233.371a4.388 4.388 0 015.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 00.201 1.13l2.209 1.275a4.75 4.75 0 012.375 4.114V16H.382v-1.143a4.75 4.75 0 012.375-4.113l2.209-1.275a.75.75 0 00.201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 01.904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 00-2.13.937 2.85 2.85 0 00-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 01-.603 3.39l-2.209 1.275A3.25 3.25 0 001.902 14.5h12.196a3.25 3.25 0 00-1.605-2.457l-2.209-1.275a2.25 2.25 0 01-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 00-.588-1.022A2.888 2.888 0 008 1.5z"></path></svg></div>
          <span className='whitespace-nowrap ease-in-out duration-300 transform transition truncate text-white'>Christian Chiemela</span>
          <svg role="img" height="16" width="16" fill="#fff" aria-hidden="true" viewBox="0 0 16 16"><path d="M14 6l-6 6-6-6h12z"></path></svg>
        </button>
      </div>
    </div>
    </>
  )
}

export default Header