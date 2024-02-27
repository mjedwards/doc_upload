import React from 'react'
import { HiDocumentText } from "react-icons/hi";

const DropZone = ({dropHandler, handleBrowseClick, dragOverHandler, handleFileChange, uploadError}) => {
  return (
    <>
    <div className='border-solid border-2 border-[#D9D9D9] rounded-lg p-0 flex flex-col items-center justify-center my-2.5 h-[148px]'>
    <div
        id='drop_zone'
        className='border-spacing-2 border-dashed border-[#D9D9D9] border-2 rounded-lg h-40 flex flex-col items-center justify-center h-[91px] w-[22rem] mt-[12px] mb-0 mx-auto'
        onDrop={dropHandler}
        onDragOver={dragOverHandler}>
        <HiDocumentText className='gold mb-5' size='20' />
        <p className='text-[#1B3B59] text-[0.65rem]'>
            Drag & Drop Here Or{" "}
            <span
                id='browseButton'
                className='cursor-pointer font-extrabold'
                onClick={handleBrowseClick}>
                Browse
            </span>
        </p>
    </div>
    {uploadError !== null ? <div className="text-red-400 mt-2">{uploadError}</div> : <div></div>}
    <input
        type='file'
        id='fileInput'
        className='hidden'
        accept='.csv'
        onChange={handleFileChange}
    />
    <button className='inline-flex justify-center rounded-md bg-[#1D3E6E] px-3 py-2 text-[0.625rem] font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-auto w-[151px] h-[25px]'>
        Upload Manifest
    </button>
</div>
</>
  )
}

export default DropZone