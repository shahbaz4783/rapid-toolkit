import DisplayCard from '@/components/cards/DisplayCard';
import { splitBill } from '@/utils/maths';
import React from 'react';

const DisplayData = ({ tipPercentage, totalBill, totalPerson }: TipInputs) => {
	const data = splitBill(totalBill, tipPercentage, totalPerson);

  if (data === null) return null;

	return (
		<div className='flex flex-col md:flex-row text-center md:justify-between flex-1 gap-8'>
			<DisplayCard
				title='Tip per Person'
				data={`$${data.tipAmountPerPeople}`}
			/>
			<DisplayCard
				title='Total per Person'
				data={`$${data.totalBillPerPeople}`}
			/>
		</div>
	);
};

export default DisplayData;
