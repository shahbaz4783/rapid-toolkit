import { MoveLeft } from 'lucide-react';
import Link from 'next/link';

const DateTimeLayout = ({ children }: ReactNode) => {
	return (
		<div className='p-6 md:p-16 min-h-svh m-auto space-y-8'>
			<Link href={'/'}>
				<MoveLeft className='cursor-pointer hover:text-blue-200' />
			</Link>
			{children}
		</div>
	);
};

export default DateTimeLayout;
