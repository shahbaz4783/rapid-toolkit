export const Switch: React.FC<Button> = ({ title, isActive, ...props }) => {
	return (
		<button
			{...props}
			className={`flex-1 p-3 px-6 cursor-pointer transition-all ${
				isActive ? 'bg-slate-800 font-bold ' : 'hover:bg-slate-700'
			}`}
		>
			{title}
		</button>
	);
};
