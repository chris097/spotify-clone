import React from 'react'

type Props = {
    img?: string
    title?: string
    description?: string
    className?: string
}

const Card: React.FC<Props> = (props) => {
  return (
    <div className='w-[19%] mt-3'>
      <div
          className="overflow-hidden aspect-video bg-cardgray h-[310px] w-full hover:bg-hovergray cursor-pointer rounded-xl relative group"
        >
            <div
                className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute to-transparent bg-gradient-to-t inset-x-0 -bottom-2 text-white flex items-end"
            >
                <div className='w-full'>
                    <div
                        className="transform-gpu flex justify-end w-full space-y-3 text-xl group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                    >    

              <div className='w-full flex justify-end'>
                <div className='bg-primarygreen flex justify-center w-14 h-14 -mt-32 mr-6 absolute rounded-full items-center'>
                  <svg role="img" height="24" width="24" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                {/* <svg height="24" width="24" viewBox="0 0 24 24"><path d="M5.7 3a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7H5.7zm10 0a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7h-2.6z"></path></svg> */}
                        </div>
              </div>
                    </div>
                </div>
        </div>
        <div className='w-full p-4 h-[310px] rounded-md font-sourcesan'>
          <div className='w-full h-[195px]'>
            <img className={props.className} src={props.img} />
          </div>
          <div className='font-medium text-[18px] text-white mt-3'>{ props.title}</div>
          <div className='text-[15px] mt-1'>{props.description}</div>
          </div>
        </div>
 </div>
  )
};

export default Card