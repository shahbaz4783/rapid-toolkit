import { Input } from '@/components/ui/input';
import { DollarSign, UserRound } from 'lucide-react';
import React from 'react';

const InputFields = ({ userInput, onChangeProp }: TipInputProps) => {
	return (
		<aside className='space-y-8'>
			<div className='space-y-2'>
				<label htmlFor='bill'>Bill</label>
				<div className='flex rounded-lg'>
					<div className='border p-3 flex items-center rounded-s-md overflow-hidden'>
						<DollarSign />
					</div>
					<Input
						type='number'
						name='bill'
						id='bill'
						value={userInput.totalBill || undefined}
						onChange={(e) =>
							onChangeProp(e.target.value ? parseInt(e.target.value) : '')
						}
					/>
				</div>
			</div>
			<div className='space-y-2'>
				<label htmlFor='tip'>Select Tip %</label>
				<menu className='grid grid-cols-2 md:grid-cols-3 gap-2'>
					{[5, 10, 15, 25, 50].map((tip) => (
						<div
							key={tip}
							className='px-8 py-2 rounded-md text-center cursor-pointer text-white'
						>
							{tip}%
						</div>
					))}
					<div className='rounded-md cursor-pointer overflow-hidden'>
						<Input
							type='number'
							placeholder='Custom'
							value={userInput.tipPercentage || undefined}
						/>
					</div>
				</menu>
			</div>
			<div className='space-y-2'>
				<div className='flex justify-between'>
					<label htmlFor='people'>Number of People</label>
				</div>
				<div className='flex rounded-lg'>
					<div className='border p-3 flex items-center rounded-s-md overflow-hidden'>
						<UserRound />
					</div>
					<Input
						type='number'
						name='people'
						id='people'
						value={userInput.totalPerson || undefined}
					/>
				</div>
			</div>
		</aside>
	);
};

export default InputFields;
