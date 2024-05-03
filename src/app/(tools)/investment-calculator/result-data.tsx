import { calculateInvestmentValue } from '@/utils/financeCalculations';
import { totalReturns } from '@/utils/financeCalculations';
import { calculateLumpsum } from '@/utils/financeCalculations';
import { ListWrapper } from '../../../components/ui/ListWrapper';

export const InvestmentResult: React.FC<Result> = ({
	input,
	investmentType,
}) => {
	const result = calculateInvestmentValue(
		input.monthlySIP,
		input.ROI,
		input.duration
	);

	const lumpumResult = calculateLumpsum(
		input.monthlySIP,
		input.ROI,
		input.duration,
		4.5
	);
	console.log(lumpumResult);

	const returns = totalReturns(result.totalGain, result.totalInvestment);
	const lumpumReturns = totalReturns(
		lumpumResult.totalGain,
		lumpumResult.totalInvestment
	);
	console.log(lumpumReturns);

	const formatNumber = (value: number) => {
		return new Intl.NumberFormat('en-IN', {
			style: 'currency',
			currency: 'INR',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(value);
	};

	return (
		<section className='border rounded-xl p-6 flex flex-col gap-6'>
			<article className='flex flex-col gap-3'>
				<h2 className='text-center text-xl font-semibold'>
					Future value of your <span className='text-red-300'>investment</span>
				</h2>
				<p className='text-center text-white font-bold text-3xl'>
					{investmentType === 'SIP'
						? formatNumber(result.totalValue)
						: formatNumber(lumpumResult.totalValue)}
				</p>
			</article>
			<article className='flex justify-between'>
				<div className='border-8 rounded-full border-white p-6 bg-slate-900'>
					<p className='text-xl font-bold text-center'>
						{investmentType === 'SIP'
							? Math.round(returns) + '%'
							: Math.round(lumpumReturns) + '%'}
					</p>
					<h1 className='text-lg text-center'>Returns</h1>
				</div>
				<div className='flex flex-col gap-4'>
					<ListWrapper
						field='Invested Amount'
						value={
							investmentType === 'SIP'
								? formatNumber(result.totalInvestment)
								: formatNumber(lumpumResult.totalInvestment)
						}
					/>
					<ListWrapper
						field='Estimated Returns'
						value={
							investmentType === 'SIP'
								? formatNumber(result.totalGain)
								: formatNumber(lumpumResult.totalGain)
						}
					/>
				</div>
			</article>
		</section>
	);
};
