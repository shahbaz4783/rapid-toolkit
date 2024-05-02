export const ProgressBar: React.FC<React.HTMLProps<HTMLProgressElement>> = ({
	...rest
}) => {
	return (
		<progress
			{...rest}
			className='[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-blue-400 [&::-moz-progress-bar]:bg-blue-400'
		/>
	);
};
