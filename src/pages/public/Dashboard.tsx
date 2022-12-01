import Card from '../../components/Cards';
import Footer from '../../components/Footer';
import {  useGetTopChartsQuery } from '../../redux/services/ShazamCore';
import { artists, dailys, recents } from '../../data'

const Dashboard = () => {

  const { data } = useGetTopChartsQuery([]);
console.log(data?.map((song:any) => song))
 
  return (
    <>
    <div className='w-full h-full font-medium text-sm mt-4 font-sourcesan'>
      <div className='flex justify-between items-center'>
        <div className='font-sourcesan text-2xl text-white'>Recently Played</div>
        <button type='button' className='text-[15px] font-medium hover:border-b-2 hover:border-primarygray'>SEE ALL</button>
      </div>
        <div className='flex items-center space-x-4'>
          {data?.slice(0, 5).map((song:any, i:number) => (
            <Card
              song={song}
              key={song?.key}
              data={data}
              i={i}
            />
          ))}
      </div>
    </div>
    
        <Footer />
    </>
  )
}

export default Dashboard