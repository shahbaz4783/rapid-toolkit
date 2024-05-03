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