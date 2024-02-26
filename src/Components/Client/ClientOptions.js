import React from "react";
import classNames from "../../utils/joinClassNames";
import { BsClock } from "react-icons/bs";

const ClientOptions = () => {
	const options = [
		{ id: "single", title: "Single" },
		{ id: "multiple", title: "Multiple" },
	];
	return (
		<div>
			<p className='text-[#1B3B59] font-bold mt-4'>Client:</p>
			<fieldset className='my-4'>
				<legend className='sr-only'>Client Options</legend>
				<div className='space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0'>
					{options.map((option) => (
						<div key={option.id} className='flex items-center'>
							<input
								id={option.id}
								name='client-options'
								type='radio'
								defaultChecked={option.id === "multiple"}
								className={({ checked }) =>
									classNames(
										checked ? "ring ring-offset-1 border-[#1D3E6E] border-2 border-solid" : "",
										"relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none bg-none"
									)
								}
							/>
							<label
								htmlFor={option.id}
								className='ml-3 text-sm font-medium leading-6 text-gray-900'>
								{option.title}
							</label>
						</div>
					))}
				</div>
			</fieldset>
			<div className='flex flex-row gap-16 mb-5 items-center'>
				<label
					htmlFor='test-center-1'
					className=' text-sm font-medium leading-6 text-[#1B3B59]'>
					Testing Center 1
				</label>
				<div className='flex flex-row items-center gap-2'>
					<select
						id='test-center-1'
						name='test-center-1'
						className='mt-2  w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-[#1B3B59] ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-[#1B3B59] sm:text-sm sm:leading-6'
						defaultValue='Select Client'>
						<option>Select Client</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</select>
					<BsClock size='20' className="clock"/>
				</div>
			</div>
			<div className='flex flex-row gap-16 mb-5 items-center'>
				<label
					htmlFor='test-center-2'
					className=' text-sm font-medium leading-6 text-[#1B3B59]'>
					Testing Center 2
				</label>
				<div className='flex flex-row items-center gap-2'>
					<select
						id='test-center-2'
						name='test-center-2'
						className='mt-2  w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-[#1B3B59] ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-[#1B3B59] sm:text-sm sm:leading-6'
						defaultValue='Select Client'>
						<option>Select Client</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</select>
					<BsClock size='20' className="clock"/>
				</div>
			</div>
			<div className='flex flex-row gap-16 mb-5 items-center'>
				<label
					htmlFor='test-center-3'
					className=' text-sm font-medium leading-6 text-[#1B3B59]'>
					Testing Center 3
				</label>
				<div className='flex flex-row items-center gap-2'>
					<select
						id='test-center-3'
						name='test-center-3'
						className='mt-2  w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-[#1B3B59] ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-[#1B3B59] sm:text-sm sm:leading-6'
						defaultValue='Select Client'>
						<option>Select Client</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</select>
					<BsClock size='20' className="clock"/>
				</div>
			</div>
			<div className='flex flex-row gap-16 mb-5 items-center'>
				<label
					htmlFor='test-center-4'
					className=' text-sm font-medium leading-6 text-[#1B3B59]'>
					Testing Center 4
				</label>
				<div className='flex flex-row items-center gap-2'>
					<select
						id='test-center-4'
						name='test-center-4'
						className='mt-2  w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-[#1B3B59] ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-[#1B3B59] sm:text-sm sm:leading-6'
						defaultValue='Select Client'>
						<option>Select Client</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</select>
					<BsClock size='20' className="clock"/>
				</div>
			</div>
		</div>
	);
};

export default ClientOptions;
