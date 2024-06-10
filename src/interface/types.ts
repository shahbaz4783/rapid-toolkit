interface ToolsInfoObject {
	title: string;
	description: string;
	path: string;
	tags: string;
}

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

interface InvestmentResult {
	totalInvestment: number;
	totalGain: number;
	totalValue: number;
}

interface ReactNode {
	children: React.ReactNode;
}

interface BaseOptions {
	onHandleFromProp: any;
	onHandleToProp: any;
}

interface Button {
	title: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	isActive?: boolean;
}


interface InputFieldFunction {
	onChangeProp?: any;
	userInput?: any;
	investmentType: string;
	onInvestmentTypeChange: (type: string) => void;
}

interface ListWrapper {
	field: string;
	value: string;
}

interface Result {
	input: any;
	investmentType: string;
}

interface TipInputProps {
	userInput: {
		tipPercentage: number | null;
		totalBill: number | null;
		totalPerson: number | null;
	};
	onChangeProp: any;
}

interface DisplayTipInterface {
	selectedTip: number;
	bill: number;
	people: null;
	onReset: () => void;
}

interface TipInputs {
	tipPercentage: number | null;
	totalBill: number | null;
	totalPerson: number | null;
}
