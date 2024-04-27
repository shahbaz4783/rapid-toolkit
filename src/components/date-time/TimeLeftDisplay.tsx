import React, { FC } from 'react';

const TimeLeftDisplay: FC<{
	timeleft: { days: number; hours: number; minutes: number; seconds: number };
}> = ({ timeleft }) => {
	return (
		<section className='text-center'>
			<h1 className='text-2xl font-bold mb-6'>Time Left</h1>
			<article className='grid grid-cols-2 md:grid-cols-4 gap-2 text-xl capitalize max-w-3xl m-auto'>
				<div className='p-4 bg-zinc-100 rounded-s-xl'>
					<p className='text-3xl text-blue-700 italic font-bold font-serif'>
						{timeleft.days}
					</p>
					<h3 className='font-semibold text-sky-600'>
						{timeleft.days >= 2 ? 'days' : 'day'}
					</h3>
				</div>

				<div className='p-4 bg-zinc-100 rounded-e-xl md:rounded-none'>
					<p className='text-3xl text-blue-700 italic font-bold font-serif'>
						{timeleft.hours}
					</p>
					<h3 className='font-semibold text-sky-600'>
						{timeleft.hours >= 2 ? 'hours' : 'hour'}
					</h3>
				</div>

				<div className='p-4 bg-zinc-100 rounded-s-xl md:rounded-none'>
					<p className='text-3xl text-blue-700 italic font-bold font-serif'>
						{timeleft.minutes}
					</p>
					<h3 className='font-semibold text-sky-600'>
						{timeleft.minutes >= 2 ? 'minutes' : 'minute'}
					</h3>
				</div>

				<div className='p-4 bg-zinc-100 rounded-e-xl'>
					<p className='text-3xl text-blue-700 italic font-bold font-serif'>
						{timeleft.seconds}
					</p>
					<h3 className='font-semibold text-sky-600'>
						{timeleft.seconds >= 2 ? 'seconds' : 'second'}
					</h3>
				</div>
			</article>
		</section>
	);
};

export default TimeLeftDisplay;
