'use client';

import TimeLeftDisplay from '@/components/date-time/TimeLeftDisplay';
import React, { useState, useEffect } from 'react';
import { percentageOfYearPassed, timeLeftInYear } from '@/utils/time';
import { ProgressBar } from '@/components/ui/ProgressBar';

const YearProgress = () => {
	const [currentYear, _setCurrentYear] = useState<number>(
		new Date().getFullYear()
	);
	const [percentagePassed, setPercentagePassed] = useState<number>(0);
	const [timeLeft, setTimeLeft] = useState<TimeLeft>({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const updateProgress = () => {
			const percentage = percentageOfYearPassed(currentYear);
			setPercentagePassed(percentage);
		};
		const intervalId = setInterval(updateProgress, 100);
		return () => clearInterval(intervalId);
	}, [currentYear]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTimeLeft(timeLeftInYear());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className='space-y-12'>
			<section className='text-center flex flex-col space-y-6 items-center'>
				<h1 className='font-extrabold text-7xl text-blue-600'>{currentYear}</h1>
				<p className='text-xl font-semibold font-serif'>
					{percentagePassed.toFixed(7)}%
				</p>
				<ProgressBar value={percentagePassed} max={100} />
			</section>
			<div>
				<TimeLeftDisplay timeleft={timeLeft} />
			</div>
		</div>
	);
};

export default YearProgress;
