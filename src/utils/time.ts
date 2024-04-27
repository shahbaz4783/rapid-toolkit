// Function to calculate percentage of current year passed
export const percentageOfYearPassed = (currentYear: number): number => {
	const currentDate = new Date();
	const startOfYear = new Date(currentYear, 0, 1);
	const timeElapsed = currentDate.getTime() - startOfYear.getTime();
	const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
	const percentage = (timeElapsed / millisecondsInYear) * 100;
	return percentage;
};

// Function to calculate time left in current year
export const timeLeftInYear = (): TimeLeft => {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	const endOfYear = new Date(currentYear + 1, 0, 1);
	const timeLeftMillis = endOfYear.getTime() - currentDate.getTime();

	const daysLeft = Math.floor(timeLeftMillis / (1000 * 60 * 60 * 24));
	const hoursLeft = Math.floor(
		(timeLeftMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutesLeft = Math.floor(
		(timeLeftMillis % (1000 * 60 * 60)) / (1000 * 60)
	);
	const secondsLeft = Math.floor((timeLeftMillis % (1000 * 60)) / 1000);

	return {
		days: daysLeft,
		hours: hoursLeft,
		minutes: minutesLeft,
		seconds: secondsLeft,
	};
};

// Function to get current in YYYY-MM-DD
export const getCurrentDate = () => {
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, '0');
	const day = String(now.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
};
