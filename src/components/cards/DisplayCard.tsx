import React from 'react';

const DisplayCard = ({
	title,
	data,
}: {
	title: string;
	data: number | string | undefined | null;
}) => {
	return (
		<div className='p-4 bg-slate-800 rounded-md flex-1'>
			<p className='text-3xl text-slate-300 italic font-bold font-serif'>
				{data}
			</p>
			<h3 className='font-semibold text-sky-400'>{title}</h3>
		</div>
	);
};

export default DisplayCard;
