import React, { useEffect, useState } from 'react'
import useCheckLocation from '../../utils/checkLocation'

const LocationCheck = () => {
    const [locationAvailability, setLocationAvailability] = useState("");
    const isAllGood = useCheckLocation();

    useEffect(() => {
        if (isAllGood !== undefined) { // Check if value is received
            setLocationAvailability(isAllGood ? 'All Available!' : 'None Available');
        }
      }, [isAllGood]);

  return (
    <div className="border-solid border-y-2 border-[#E0E3EB] flex flex-col justify-evenly items-start gap-4 pt-4 pb-4 w-[219px] text-[0.65rem]">
        <p className='text-[#1B3B59] font-extrabold'>Location Checking:</p>
        <p className={isAllGood === true ? "text-[#5CB972] font-bold" : "text-red-500 font-bold"}>{locationAvailability}</p>
    </div>
  )
}

export default LocationCheck;