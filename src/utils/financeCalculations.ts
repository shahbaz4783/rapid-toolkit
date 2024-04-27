export const calculateInvestmentValue = (
	monthlySIP: number,
	annualRate: number,
	durationInYears: number
): InvestmentResult => {
	const n = 12;
	const r = annualRate / (n * 100);
	const t = durationInYears * n;

	const totalInvestment = monthlySIP * t;
	const totalValue = monthlySIP * ((Math.pow(1 + r, t) - 1) / r);
	const totalGain = totalValue - totalInvestment;

	return {
		totalInvestment,
		totalGain,
		totalValue,
	};
};

export const totalReturns = (gain: number, principal: number): number => {
	if (principal !== 0) return (gain / principal) * 100;
	else return 0;
};

export const calculateLumpsum = (
	principal: number,
	rate: number,
	time: number,
	compoundingFrequency: number
): {
	totalGain: number;
	totalValue: number;
	totalInvestment: number;
} => {
	const n = compoundingFrequency;
	const r = rate / 100;

	const totalInvestment = principal;
	const totalValue = principal * Math.pow(1 + r / n, n * time);
	const totalGain = totalValue - principal;

	return {
		totalGain,
		totalValue,
		totalInvestment,
	};
};
