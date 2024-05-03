import React, { FC } from 'react';
import DisplayCard from '../../../components/cards/DisplayCard';

const TimeLeftDisplay: FC<{
	timeleft: { days: number; hours: number; minutes: number; seconds: number };
}> = ({ timeleft }) => {
	return (
		<section className='text-center'>
			<h1 className='text-2xl font-bold mb-6'>Time Left</h1>

			<article className='grid grid-cols-2 md:grid-cols-4 gap-2 text-xl capitalize max-w-3xl m-auto'>
				<DisplayCard
					title={timeleft.days >= 2 ? 'days' : 'day'}
					data={timeleft.days}
				/>
				<DisplayCard
					title={timeleft.hours >= 2 ? 'hours' : 'hour'}
					data={timeleft.hours}
				/>
				<DisplayCard
					title={timeleft.minutes >= 2 ? 'minutes' : 'minute'}
					data={timeleft.minutes}
				/>
				<DisplayCard
					title={timeleft.seconds >= 2 ? 'seconds' : 'second'}
					data={timeleft.seconds}
				/>
			</article>
		</section>
	);
};

export default TimeLeftDisplay;
