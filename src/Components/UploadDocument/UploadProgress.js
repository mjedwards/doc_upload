import React from 'react'
import { BsFileEarmarkImage } from "react-icons/bs";

const UploadProgress = ({file, size}) => {
  return (
        	<div className='download-progress border-solid border-y-2 border-[#F0F0F0] flex flex-row py-0 px-4 h-[45px] items-center gap-4'>
				<BsFileEarmarkImage className='gold' size='20' />
				<div className='file-info w-full'>
					<div className='flex flex-row gap-4 justify-between items-center'>
						<p className='text-[#D7D7DA] text-xs'>{file?.name}</p>
						<span className='text-black text-xs'>{size}</span>
					</div>
					<div className='w-full bg-[#E5E5E5] rounded-full h-1 mt-2'>
						<div
							className='bg-[#FA9E27] h-1 rounded-full'
							style={{ width: "45%" }}></div>
					</div>
				</div>
			</div>
  )
}

export default UploadProgress