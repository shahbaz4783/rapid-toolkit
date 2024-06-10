export const splitBill = (
	bill: number | null,
	tipPercentage: number | null,
	person: number | null
): {
	tipAmountPerPeople: number | null;
	totalBillPerPeople: number | null;
} | null => {
	if (bill === null || tipPercentage === null || person === null) {
		return null;
	}

	const tipAmount = (tipPercentage / 100) * bill;
	const tipAmountPerPeople = parseFloat((tipAmount / person).toFixed(2));

	const totalBill = bill + tipAmount;
	const totalBillPerPeople = parseFloat((totalBill / person).toFixed(2));

	return { tipAmountPerPeople, totalBillPerPeople };
};
