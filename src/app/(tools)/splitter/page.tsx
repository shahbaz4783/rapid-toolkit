'use client';

import React, { useState } from 'react';
import InputFields from './input-fields';
import DisplayData from './display-data';

interface TipInputs {
	tipPercentage: number | null;
	totalBill: number | null;
	totalPerson: number | null;
}

const Splitter = () => {
	const [userInput, setUserInput] = useState<TipInputs>({
		tipPercentage: null,
		totalBill: null,
		totalPerson: null,
	});

	const handleChange = (field: keyof TipInputs, value: number | null) => {
		setUserInput((prevUserInput) => ({
			...prevUserInput,
			[field]: value,
		}));
	};

	return (
		<div className='space-y-12'>
			<InputFields userInput={userInput} onChangeProp={handleChange} />
			<DisplayData
				tipPercentage={userInput.tipPercentage}
				totalBill={userInput.totalBill}
				totalPerson={userInput.totalPerson}
			/>
		</div>
	);
};

export default Splitter;
