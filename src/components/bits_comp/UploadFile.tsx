import Styles from "./UploadFile.module.css"

const UploadFile = () => {
	return (
		<div className={Styles.input_div}>
			<input className={Styles.input} name='file' type='file'/>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='2em'
				height='2em'
				strokeLinejoin='round'
				strokeLinecap='round'
				viewBox='0 0 24 24'
				strokeWidth={2}
				fill='none'
				stroke='currentColor'
				className={Styles.icon}>
				<polyline points='16 16 12 12 8 16' />
				<line y2={21} x2={12} y1={12} x1={12} />
				<path d='M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3' />
				<polyline points='16 16 12 12 8 16' />
			</svg>
		</div>
	);
};

export default UploadFile;
