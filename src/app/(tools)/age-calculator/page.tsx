import React from 'react';
import PickDate from './pick-date';

const AgeCalculator = () => {
	return (
		<div className='md:w-4/5 md:m-auto flex flex-col gap-10 items-center justify-center'>
			<PickDate />
		</div>
	);
};

export default AgeCalculator;
