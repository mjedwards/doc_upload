import React from "react";
import classNames from "../../utils/joinClassNames";

const Schedule = () => {
	const options = [
		{ id: "yes", title: "Yes" },
		{ id: "no", title: "No" },
	];

	return (
		<div className="pt-1.5 pb-[0.80rem]">
			<p className='text-[#1B3B59] font-extrabold text-[0.65rem]'>
				Split schedule using social distancing?
			</p>
			<fieldset className=' mt-[0.30rem]'>
				<legend className='sr-only'>Schedule Options</legend>
				<div className='space-y-4 sm:flex sm:items-center sm:space-x-3 sm:space-y-0'>
					{options.map((option) => (
						<div key={option.id} className='flex items-center'>
							<input
								id={option.id}
								name='schedule-options'
								type='radio'
								defaultChecked={option.id === "yes"}
								className={({ checked }) =>
									classNames(
										checked ? "ring ring-offset-1 focus:ring-[#1D3E6E]" : "",
										"relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none bg-none"
									)
								}
							/>
							<label
								htmlFor={option.id}
								className='ml-2 text-[0.65rem] font-medium leading-6 text-gray-900'>
								{option.title}
							</label>
						</div>
					))}
				</div>
			</fieldset>
		</div>
	);
};

export default Schedule;
