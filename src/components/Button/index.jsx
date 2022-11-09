const Button = ({ label, onClick, className }) => {
	return (
		<button
			className={`p-5  rounded-md shadow-sm bg-transparent text-white/80 brightness-75 font-bold text-2xl hover:brightness-150 ${className}`}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default Button;
