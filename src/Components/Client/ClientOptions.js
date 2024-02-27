import React from "react";
import classNames from "../../utils/joinClassNames";
import TestCenters from "./TestCenters";

const ClientOptions = () => {
	const options = [
		{ id: "single", title: "Single" },
		{ id: "multiple", title: "Multiple" },
	];

	const testingCenters = [
		{ id:"test-center-1", label: "Testing Center 1", options: [1, 2, 3, 4] },
		{ id:"test-center-2", label: "Testing Center 2", options: [1, 2, 3, 4] },
		{ id:"test-center-3", label: "Testing Center 3", options: [1, 2, 3, 4] },
		{ id:"test-center-4", label: "Testing Center 4", options: [1, 2, 3, 4] },		
	  ];
	
	return (
		<div>
			<p className='text-[#1B3B59] font-extrabold text-[0.65rem] font-bold mt-4'>Client:</p>
			<fieldset className='mt-[0.5rem] '>
				<legend className='sr-only'>Client Options</legend>
				<div className='space-y-4 sm:flex sm:items-center sm:space-x-3 sm:space-y-0'>
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
								className='ml-1 text-[0.65rem] font-medium leading-6 text-gray-900'>
								{option.title}
							</label>
						</div>
					))}
				</div>
			</fieldset>
			{testingCenters.map(center => <TestCenters key={center.id} id={center.id} label={center.label} options={center.options} />)}
		</div>
	);
};

export default ClientOptions;
