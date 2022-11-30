import Card from '../../components/Cards';
import Footer from '../../components/Footer';
import {  useGetTopChartsQuery } from '../../redux/services/ShazamCore';
import { artists, dailys, recents } from '../../data'

const Dashboard = () => {

  const { data } = useGetTopChartsQuery([]);

  return (
    <>
    <div className='w-full h-full font-medium text-sm mt-4 font-sourcesan'>
      <div className='flex justify-between items-center'>
        <div className='font-sourcesan text-2xl text-white'>Recently Played</div>
        <button type='button' className='text-[15px] font-medium hover:border-b-2 hover:border-primarygray'>SEE ALL</button>
      </div>
      <div className='flex items-center space-x-4'>
          {recents.map(recent => (
            <Card
              key={recent.id}
              img={recent.url}
              title={recent.title}
              description={recent.description}
              className={`h-[190px] w-full ${(recent.id === 1 || recent.id === 2) ? 'rounded-full' : 'rounded-md'}`}
          />
        ))}
      </div>
    </div>
    <div className='w-full h-full font-medium text-sm mt-10 font-sourcesan'>
      <div className='flex justify-between items-center'>
        <div className='font-sourcesan text-2xl text-white'>Artists you liked</div>
        <button type='button' className='text-[15px] font-medium hover:border-b-2 hover:border-primarygray'>SEE ALL</button>
      </div>
      <div className='flex items-center space-x-4'>
        {artists.map(artist => (
          <Card
            key={artist.id}
            img={artist.url}
            title={artist.title}
            description={artist.description}
            className="h-[190px] w-full rounded-md"
          />
        ))}
      </div>
    </div>
    <div className='w-full h-full font-medium text-sm mt-10 font-sourcesan'>
      <div className='flex justify-between items-center'>
        <div className='font-sourcesan text-2xl text-white'>Good morning</div>
        <button type='button' className='text-[15px] font-medium hover:border-b-2 hover:border-primarygray'>SEE ALL</button>
      </div>
      <div className='flex items-center space-x-4'>
        {dailys.map(daily => (
          <Card
            key={daily.id}
            img={daily.url}
            title={daily.title}
            description={daily.description}
            className="h-[190px] w-full rounded-md"
          />
        ))}
        </div>
        <Footer />
    </div>
    </>
  )
}

export default Dashboard