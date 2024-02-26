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
    <div className="border-solid border-y-2 border-[#E0E3EB] flex flex-col justify-evenly items-start gap-4 pt-4 pb-4 w-7/12">
        <p className='text-[#1B3B59] font-bold'>Location Checking:</p>
        <p className={isAllGood === true ? "text-green-500" : "text-red-500"}>{locationAvailability}</p>
    </div>
  )
}

export default LocationCheck;