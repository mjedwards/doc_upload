import React from "react";

function SelectDropdown() {
	return (
		<div>
			<label
				htmlFor='location'
				className='text-[0.625rem] font-bold leading-6 hidden'>
				Select Import Name:
			</label>
			<select
				id='location'
				name='location'
				className='mt-2 h-[31px] w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-[#1B3B59] ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-[#1B3B59] sm:text-[0.625rem] sm:leading-6 font-bold'
                defaultValue="Select Import Name:"
                >
				<option>Select Import Name:</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</select>
		</div>
	);
}

export default SelectDropdown;
