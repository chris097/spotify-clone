import React from 'react'

type Props = {
    img?: string
    title?: string
    description?: string
    className?: string
}

const Card:React.FC<Props> = (props) => {
  return (
      <div className='bg-cardgray w-[20%] p-4 h-[310px] rounded-md font-sourcesan mt-5'>
        <img className={props.className}
        src={props.img}
        alt='image'
        />
          <div className='font-medium text-[18px] text-white mt-3'>{props.title}</div>
          <div className='text-[15px] mt-1'>{props.description}</div>
    </div>
  )
}

export default Card