import DisplayCard from '@/components/cards/DisplayCard';
import { splitBill } from '@/utils/maths';
import React from 'react';

const DisplayData = ({ tipPercentage, totalBill, totalPerson }: TipInputs) => {
	const data = splitBill(totalBill, tipPercentage, totalPerson);

	return (
		<div className='space-y-4'>
			<DisplayCard title='Tip per Person' data={data?.tipAmountPerPeople} />
			<DisplayCard title='Total per Person' data={data?.totalBillPerPeople} />
		</div>
	);
};

export default DisplayData;
