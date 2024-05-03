import { Input } from '@/components/ui/input';
import { Switch } from '../../../components/ui/Switch';
import { Label } from '@/components/ui/label';

export const InvestmentInputField: React.FC<InputFieldFunction> = ({
	userInput,
	onChangeProp,
	investmentType,
	onInvestmentTypeChange,
}) => {
	return (
		<section className='md:w-4/12 grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center overflow-hidden flex-1 border-4 border-slate-300 rounded-xl p-6'>
			<article className='space-y-2'>
				<Label htmlFor='investment-type'>Investment Type</Label>
				<menu className='flex justify-between overflow-hidden content-stretch items-center flex-1 border  rounded-md'>
					<Switch
						title='SIP'
						onClick={() => onInvestmentTypeChange('SIP')}
						isActive={investmentType === 'SIP'}
					/>
					<Switch
						title='Lumpsum'
						onClick={() => onInvestmentTypeChange('Lumpsum')}
						isActive={investmentType === 'Lumpsum'}
					/>
				</menu>
			</article>

			<article className='space-y-2'>
				<Label htmlFor='sip'>
					{investmentType === 'SIP' ? 'Monthly SIP' : 'Total Investment'}
				</Label>
				<div className='flex overflow-hidden rounded-md'>
					<span className='bg-slate-800 p-3'>₹</span>
					<Input
						type='number'
						value={userInput.monthlySIP}
						onChange={(e) => onChangeProp('monthlySIP', e.target.value)}
						id='sip'
						className='rounded-none'
					/>
				</div>
			</article>

			<article className='space-y-2'>
				<Label htmlFor='roi'>Expected Return (p.a)</Label>
				<div className='flex overflow-hidden rounded-md'>
					<Input
						type='number'
						value={userInput.ROI}
						onChange={(e) => onChangeProp('ROI', e.target.value)}
						id='roi'
						className='rounded-none'
					/>
					<span className='bg-slate-800  p-3'>%</span>
				</div>
			</article>

			<article className='space-y-2'>
				<Label htmlFor='duration'>Duration</Label>
				<div className='flex overflow-hidden rounded-md'>
					<Input
						type='number'
						value={userInput.duration}
						onChange={(e) => onChangeProp('duration', e.target.value)}
						id='duration'
						className='rounded-none'
					/>
					<span className='bg-slate-800  p-3'>
						{userInput.duration >= 2 ? 'years' : 'year'}
					</span>
				</div>
			</article>
		</section>
	);
};
