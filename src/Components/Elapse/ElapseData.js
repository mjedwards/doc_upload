import React, { useState } from 'react'

const ElapseData = () => {
  const [datesElaped, setDatesElaped] = useState(false);

  return (
    <div className='w-[212px] border-solid border-y-2 border-[#E0E3EB] flex flex-col justify-evenly items-start gap-[0.75rem] pt-[0.825rem] pb-[0.825rem] text-[0.725rem]'>
        <p className='text-[#1B3B59] font-extrabold'>Elapse Data Checking:</p>
        <p className='text-[#5CB972] font-bold'>No Elapsed Dates!</p>
    </div>
  )
}

export default ElapseData