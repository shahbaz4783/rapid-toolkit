'use client';

import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { getCurrentDate } from '@/utils/time';
import React, { useState } from 'react';
import { BirthDatesCard } from './data-card';

const PickDate = () => {
	const [age, setAge] = useState<{
		years: number;
		months: number;
		days: number;
	} | null>(null);

	const [wishes, setWishes] = useState(false);
	const [daysLeft, setDaysLeft] = useState<number | null>(null);

	const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setWishes(false);
		calculateAge(e.target.value);
	};

	const calculateAge = (birthdate: string) => {
		const today = new Date();
		const birthDate = new Date(birthdate);

		let years = today.getFullYear() - birthDate.getFullYear();
		let months = today.getMonth() - birthDate.getMonth();
		let days = today.getDate() - birthDate.getDate();

		if (months < 0 || (months === 0 && days < 0)) {
			years--;
			months = 12 + months;
		}

		if (days < 0) {
			const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
			days = lastMonth.getDate() + days;
		}

		if (days === 0 && months === 0) {
			setWishes(true);
		}

		const nextBirthday = new Date(
			today.getFullYear() + (birthDate.getMonth() >= today.getMonth() ? 0 : 1),
			birthDate.getMonth(),
			birthDate.getDate()
		);

		const daysLeftUntilNextBirthday = Math.floor(
			(nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
		);

		setDaysLeft(daysLeftUntilNextBirthday);
		setAge({ years, months, days });
	};
	return (
		<>
			<div>
				<Input
					type='date'
					id='date'
					required
					onChange={dateHandler}
					max={getCurrentDate()}
					className='p-3 text-xl font-bold'
				/>
			</div>
			{age !== null && (
				<BirthDatesCard age={age} wishes={wishes} daysLeft={daysLeft} />
			)}
		</>
	);
};

export default PickDate;
