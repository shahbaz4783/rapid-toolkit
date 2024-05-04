'use client';
import { useState } from 'react';
import { InvestmentInputField } from './input-fields';
import { InvestmentResult } from './result-data';

const InvestmentCalculator: React.FC = () => {
	const [userInput, setUserInput] = useState({
		monthlySIP: 5000,
		ROI: 12,
		duration: 5,
	});

	const [investmentType, setinvestmentType] = useState('SIP');

	const investmantToggle = (type: string) => {
		setinvestmentType(type);
	};

	const handleChange = (inputIdentifier: string, newValue: number) => {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputIdentifier]: newValue,
			};
		});
	};
	return (
		<div className='md:flex gap-8'>
			<InvestmentInputField
				userInput={userInput}
				onChangeProp={handleChange}
				investmentType={investmentType}
				onInvestmentTypeChange={investmantToggle}
			/>
			<InvestmentResult input={userInput} investmentType={investmentType} />
		</div>
	);
};

export default InvestmentCalculator;
