import React, { useEffect, useState } from "react";
import { getFileSize } from "../../utils/fileUpload";
import DropZone from "./DropZone";
import UploadProgress from "./UploadProgress";

const UploadDocument = () => {
	const [file, setFile] = useState(null);
	const [uploadError, setErrorUpload] = useState(null);
	const [size, setSize] = useState(null);


	useEffect(() => {
		if (file !== null) {
			const fileSize = getFileSize(file);
			setSize(fileSize);
		}
	}, [file, size]);
	
	const handleBrowseClick = () => {
		const fileInput = document.getElementById("fileInput");
		fileInput.click();
	};
	
	const dropHandler = (e) => {
		e.preventDefault();

		if (e.dataTransfer.items) {
			[...e.dataTransfer.items].forEach((item, i) => {
				if (item.kind === "file") {
					const file = item.getAsFile();
					if (file.name.endsWith(".csv")) {
						setErrorUpload(null)
						setFile(file);
					} else {
						setErrorUpload("Invalid file type");
					}
				}
			});
		} else {
			[...e.dataTransfer.files].forEach((file, i) => {
				if (file.name.endsWith(".csv")) {
					setFile(file);
					console.log(`… file[${i}].name = ${file.name}`);
				} else {
					setErrorUpload("Invalid file type");
				}
			});
		}
	};

	const dragOverHandler = (e) => {
		e.preventDefault();
	};

	

	return (
		<div>
			<p className='w-fit border-t-2 border-[#E9EAEF] border-solid pt-2.5 text-[#1B3B59] font-extrabold text-[0.65rem]'>
				Select a manifest that you'd like to import
			</p>
			<DropZone handleBrowseClick={handleBrowseClick} dropHandler={dropHandler} dragOverHandler={dragOverHandler} uploadError={uploadError}/>
			<UploadProgress file={file} size={size} />
		</div>
	);
};

export default UploadDocument;
