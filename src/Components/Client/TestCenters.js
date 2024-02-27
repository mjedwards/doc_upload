import React from 'react';
import { BsClock } from "react-icons/bs";

const TestCenters = ({id, label, options}) => {
  return (
    <div className='flex flex-row gap-3  items-center justify-between'>
				<label
					htmlFor={id}
					className=' text-[0.65rem] font-medium leading-6 text-[#1B3B59] text-[0.65rem]'>
					{label}
				</label>
				<div className='flex flex-row items-center gap-2'>
					<select
						id={id}
						name={id}
						className='mt-2  w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-[#1B3B59] ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-[#1B3B59] sm:text-[0.65rem] sm:leading-6'
						defaultValue='Select Client'>
						<option>Select Client</option>
                        {options.map((choice, idx) => <option key={idx}>{choice}</option>)}
					</select>
					<BsClock size='20' className="clock"/>
				</div>
			</div>
  )
}

export default TestCenters