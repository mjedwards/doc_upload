import React from "react";

const ModalFooter = ({ file }) => {
	async function handlePost(url = "", data = {}) {
		const response = await fetch("https://example.com/api", {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		return response.json();
	}

	return (
		<div>
			<div>
				<p className="text-center font-extrabold text-[#1B3B59] text-[0.825rem]">
					Data in the import file is correct. Please press Continue to import.
				</p>
				<div className='flex flex-row justify-center items-center gap-3 mt-5'>
					<button
						onClick={handlePost}
						type='button'
						className='inline-flex justify-center rounded-md bg-[#1D3E6E] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:col-start-1 w-[178px] h-[37px]'>
						Continue Import
					</button>
					<button
						type='button'
						className='mt-3 inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#FAAF4E] sm:col-start-2 sm:mt-0 w-[178px] h-[37px] border-solid border-[#FAAF4E] border-2'>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalFooter;
