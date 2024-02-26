import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { BsClock } from "react-icons/bs";
import classNames from "../../utils/joinClassNames";

const ToleranceWindow = () => {
	const [enabled, setEnabled] = useState(false);

	return (
		<div className="flex flex-col gap-2">
			<p className='text-[#1B3B59] font-bold'>Tolerance Window:</p>
			<div className='flex flex-row items-center'>
				<div className="border-solid border-r-2 border-[#BEC4D3] flex flex-row items-center mr-2.5 gap-2.5 w-[27%]">
					<Switch
						checked={enabled}
						onChange={setEnabled}
						className={classNames(
							enabled ? "bg-[#1D3E6E]" : "bg-gray-200",
							"relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out"
						)}>
						<span className='sr-only'>Set Tolerance Window</span>
						<span
							aria-hidden='true'
							className={classNames(
								enabled ? "translate-x-5" : "translate-x-0",
								"pointer-events-none h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
							)}
						/>
					</Switch>
					<p className="text-[#5A7187]">Toggle {!enabled ? "OFF" : "ON"}</p>
				</div>
				<div className="flex flex-row items-center gap-2">
					<BsClock />
					<p className="text-[#5A7187]">Select Tolerance Level</p>
				</div>
			</div>
		</div>
	);
};

export default ToleranceWindow;
