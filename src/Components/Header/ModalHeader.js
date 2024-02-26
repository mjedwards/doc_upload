import React from "react";

const ModalHeader = () => {
	return (
		<div>
			<button
				type='button'
				className='rounded-md bg-[#051D58] text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
				<span className='sr-only'>Close</span>
				<svg
					className='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='currentColor'
					aria-hidden='true'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			</button>
			<div className='text-center font-bold text-[#1B3B59] text-2xl w-fit border-b-2 border-[#E9EAEF] border-solid m-auto pb-2.5'>Document Upload</div>
		</div>
	);
};

export default ModalHeader;
