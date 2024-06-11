import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { DollarSign, UserRound } from 'lucide-react';
import React from 'react';

interface TipInputProps {
	userInput: TipInputs;
	onChangeProp: (field: keyof TipInputs, value: number | null) => void;
}

const InputFields = ({ userInput, onChangeProp }: TipInputProps) => {
	return (
		<aside className='border-4 border-slate-300 rounded-xl p-6 space-y-8'>
			<div className='space-y-2'>
				<label htmlFor='bill'>Total Bill</label>
				<div className='flex rounded-lg'>
					<div className='border p-3 flex items-center rounded-s-md overflow-hidden'>
						<DollarSign />
					</div>
					<Input
						type='number'
						name='bill'
						id='bill'
						value={userInput.totalBill ?? ''}
						onChange={(e) =>
							onChangeProp(
								'totalBill',
								e.target.value ? parseInt(e.target.value) : null
							)
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
							className={cn(
								'px-6 py-3 rounded-md text-center cursor-pointer bg-slate-800',
								{ 'bg-slate-900': userInput.tipPercentage === tip }
							)}
							onClick={() => onChangeProp('tipPercentage', tip)}
						>
							{tip}%
						</div>
					))}
					<div className='rounded-md cursor-pointer overflow-hidden'>
						<Input
							type='number'
							className='py-3'
							placeholder='Custom'
							onChange={(e) =>
								onChangeProp(
									'tipPercentage',
									e.target.value ? parseInt(e.target.value) : null
								)
							}
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
						value={userInput.totalPerson ?? ''}
						onChange={(e) =>
							onChangeProp(
								'totalPerson',
								e.target.value ? parseInt(e.target.value) : null
							)
						}
					/>
				</div>
			</div>
		</aside>
	);
};

export default InputFields;
