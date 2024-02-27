import React from "react";
import Modal from "./Modal/Modal";
import SelectDropdown from "./SelectDropdown/SelectDropdown";
import UploadDocument from "./UploadDocument/UploadDocument";
import ElapseData from "./Elapse/ElapseData";
import ToleranceWindow from "./Tolerance/ToleranceWindow";
import Schedule from "./Schedule/Schedule";
import LocationCheck from "./LocationCheck/LocationCheck";
import ClientOptions from "./Client/ClientOptions";

function ManifestComponent() {
	return (
		<div>
			<Modal>
				<div className='right-side w-[57%] pb-5 flex flex-col gap-3'>
					<SelectDropdown />
					<UploadDocument />
					<ElapseData />
					<ToleranceWindow />
				</div>
				<div className='left-side w-[43%] pb-5 pl-[28px]'>
					<Schedule />
					<LocationCheck />
					<ClientOptions />
				</div>
			</Modal>
		</div>
	);
}

export default ManifestComponent;
