const Input = ({ value }) => {
	return (
		<div className="w-full mt-8 h-[50px] bg-gray-800 flex items-center justify-end">
			<input
				className="w-full h-full bg-inherit text-right text-2xl text-white px-4 outline-none border-b border-gray-50/40"
				type="text"
				value={value}
				disabled
			/>
		</div>
	);
};

export default Input;
