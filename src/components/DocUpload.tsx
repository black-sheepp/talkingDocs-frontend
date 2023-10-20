import UploadFile from "./bits_comp/UploadFile";

const DocUpload = () => {
	return (
		<div className='flex flex-col'>
			<p className="text-center mt-16 text-3xl lg:text-4xl font-semibold">Forget reading, it's all about having a chat now!</p>
			<p className="text-center my-8 text-lg lg:text-xl font-light">Introducing <strong>TalkingDocs</strong>, where documents talk back to you. Reading is no longer dull. it's a blast!" 😎</p>
			<div className='flex my-6 justify-center'>
				<UploadFile />
			</div>
			<p className="text-center mt-6 text-3xl font-semibold text-[#01EBFC]">Upload PDF</p>
		</div>
	);
};

export default DocUpload;
