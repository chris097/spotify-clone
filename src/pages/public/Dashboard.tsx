import Card from '../../components/Cards';
import Footer from '../../components/Footer';
import {  useGetTopChartsQuery } from '../../redux/services/ShazamCore';
// import { artists, dailys, recents } from '../../data'
import AudioPlayer from '../../components/Audio';
// import TopCard from '../../components/Cards/TopCard';

const Dashboard = () => {

  const { data, isFetching } = useGetTopChartsQuery([]);
console.log(data?.map((song:any) => song))
 
  return (
    <div className='mt-20'>
      <div className='bg-gradient-to-b from-[#8209114a] w-full md:pl-64 md:pr-10 pd:mx-0 h-60'>
        <div className='pt-4'>
          <div className='text-white text-3xl'>Good Morning</div>
          <div className='flex gap-4 mt-4'>
            {data?.slice(0, 3).map((song:any) => (
              <div className='border border-[#2d2929] flex justify-between items-center rounded shadow pr-3 h-[80px] bg-[#2d2929] w-full'>
            <div className='flex gap-3'>
                  <img
                    src={song?.images?.coverart}
                    className='bg-white w-18 rounded-tl rounded-bl h-[80px]'
                  />
                  <div className='flex items-center h-[80px]'>{song?.title}</div>
              </div>
              <div>play</div>
          </div>
            ))}
          </div>
          <div className='flex gap-4 mt-5'>
            {data?.slice(0, 3).map((song:any) => (
              <div className='border border-[#2d2929] cursor-pointer flex justify-between items-center rounded shadow pr-3 h-[80px] bg-[#2d2929] w-full'>
            <div className='flex gap-3'>
                  <img
                    src={song?.images?.coverart}
                    className='bg-white w-18 rounded-tl rounded-bl h-[80px]'
                  />
                  <div className='flex items-center h-[80px]'>{song?.title}</div>
              </div>
              <div>play</div>
          </div>
            ))}
          </div>
        </div>
      </div>
   {
    isFetching ? <div>Loading...</div> :
          <>
    <div className='w-full h-full font-medium text-sm font-sourcesan md:pl-64 mt-8 md:pr-10 pd:mx-0'>
      <div className='flex justify-between items-center'>
        <div className='font-sourcesan text-2xl text-white'>Recently Played</div>
        <div className='text-white'>See All</div>
      </div>
        <div className='flex items-center space-x-4'>
                {data?.slice(0, 5).map((song: any, i: number) => (
            <>
            <Card
              song={song}
              key={i}
              data={data}
              i={i}
                    />
                    <AudioPlayer
                      song={song}
                      data={data}
                      i={i}
                    />
            </>
          ))}
      </div>
    </div>
      <Footer />
          </>}
      </div>
  )
}

export default Dashboard