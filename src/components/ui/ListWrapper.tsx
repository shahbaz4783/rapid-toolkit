export const ListWrapper: React.FC<ListWrapper> = ({ field, value }) => {
	return (
		<div>
			<h2 className='text-sm text-gray-300'>{field}</h2>
			<p className='text-xl font-bold text-white'>{value}</p>
		</div>
	);
};
