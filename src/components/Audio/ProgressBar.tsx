import React from 'react'

type Bar = {
  value?: string | number
  min?: string | number
  max?: string | number
  onInput?: any
}

const ProgressBar:React.FC<Bar> = ({ value, min, max, onInput }) => {

   // converts the time to format 0:00
  const getTime = (time:any) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <div className='flex items-center mt-1'>
      <p className="text-white">{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="md:block w-24 md:w-56 lg:w-96 h-1 mx-1 2xl:mx-6 rounded-lg"
      />
      <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
    </div>
  )
}

export default ProgressBar;