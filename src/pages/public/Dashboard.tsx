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
      <div className='bg-gradient-to-b from-[#82091160] w-full md:pl-64 md:pr-10 pd:mx-0 h-60'>
        <div className=''>
          <div className='text-white text-3xl'>Good Morning</div>
          <div className='flex gap-8'>
            <div className='border border-[#362525] flex justify-between items-center rounded-lg shadow pr-3 h-[60px] bg-[#362525] w-full'>
            <div className='flex gap-3'>
                <div className='bg-white w-16 rounded-tl-lg rounded-bl-lg h-[60px]'>img</div>
                <div className='flex items-center h-[60px]'>name</div>
              </div>
              <div>play</div>
          </div>
          <div className='border border-white h-[60px] w-full'>
              <div>
                <div>img</div>
                <div>name</div>
              </div>
              <div>play</div>
          </div>
          <div className='border border-white h-[60px] w-full'>
            do something here...
          </div>
          </div>
        </div>
      </div>
   {
    isFetching ? <div>Loading...</div> :
          <>
    <div className='w-full h-full font-medium text-sm mt-6 font-sourcesan md:pl-64 md:pr-10 pd:mx-0'>
      <div className='flex justify-between items-center'>
        <div className='font-sourcesan text-2xl text-white'>Recently Played</div>
        <div className='text-white'>See All</div>
      </div>
        <div className='flex items-center space-x-4'>
                {data?.slice(6, 11).map((song: any, i: number) => (
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