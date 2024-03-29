import React from "react";
import ModalHeader from "../Header/ModalHeader";
import ModalFooter from "../Footer/ModalFooter";

const Modal = ({ children }) => {
	// const [isOpen, setIsOpen] = useState(false);
	// const [file, setIsFile] = useState(false);

	// const handleClose = () => {
	// 	setIsOpen(false);
	// };
	return (
		<div
			className=''
			aria-labelledby='modal-title'
			role='dialog'
			aria-modal='true'>
			<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
				<div className='flex min-h-full items-end mx-auto p-4 text-center sm:items-center sm:p-0 justify-center'>
					<div className='relative h-fit  h-[42.313rem] transform  rounded-2xl bg-white px-4 pb-[51px] text-left shadow-xl transition-all sm:my-8 w-[51.125rem] sm:pt-5 overflow-auto'>
						<ModalHeader />
						<div className='flex flex-row flex-nowrap gap-5 px-[51px] py-[2rem] h-[30rem]'>{children}</div>
						<ModalFooter />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
