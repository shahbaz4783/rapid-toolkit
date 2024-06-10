'use client';

import React, { useState } from 'react';
import InputFields from './input-fields';
import DisplayData from './display-data';

const Splitter = () => {
	const [userInput, setUserInput] = useState<TipInputs>({
		tipPercentage: null,
		totalBill: null,
		totalPerson: null,
	});

	const handleChange = (inputIdentifier: string, newValue: number) => {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputIdentifier]: newValue,
			};
		});
	};

	return (
		<div>
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
