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