'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useRef } from 'react';
import BaseOptions from './base-options';
import DisplayCard from '@/components/cards/DisplayCard';
import { MoveDown, MoveRight } from 'lucide-react';

export const Form = () => {
	const [fromBase, setfromBase] = useState<number>(10);
	const [toBase, settoBase] = useState<number>(16);
	const [enteredNum, setEnteredNum] = useState('');

	const currentBase =
		fromBase === 2
			? 'Binary'
			: fromBase === 8
			? 'Octal'
			: fromBase === 10
			? 'Decimal'
			: fromBase === 16
			? 'Hexadecimal'
			: 'Wrong Selection';

	const desiredBase =
		toBase === 2
			? 'Binary'
			: toBase === 8
			? 'Octal'
			: toBase === 10
			? 'Decimal'
			: toBase === 16
			? 'Hexadecimal'
			: 'Wrong Selection';

	const number = useRef<HTMLInputElement | null>(null);

	const handleFromOption = (event: string) => {
		setfromBase(parseInt(event));
	};

	const handleToOption = (event: string) => {
		settoBase(parseInt(event));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const userInput = number.current?.value;
		const res = parseInt(userInput || '0', fromBase).toString(toBase);
		setEnteredNum(res);
	};

	return (
		<div className='flex flex-col gap-6  rounded-xl p-4 w-full md:w-2/3'>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col gap-8 p-6 rounded-xl border-8'
			>
				<Input placeholder='Enter number' ref={number} required />
				<BaseOptions
					onHandleFromProp={handleFromOption}
					onHandleToProp={handleToOption}
				/>
				<Button>Convert</Button>
			</form>
			{enteredNum && (
				<div className='space-y-4 md:grid grid-cols-3 justify-between items-center'>
					<DisplayCard title={currentBase} data={number.current?.value} />
					<div className='hidden md:flex justify-center items-center'>
						<MoveRight />
					</div>
					<div className='md:hidden flex justify-center items-center'>
						<MoveDown />
					</div>
					<DisplayCard title={desiredBase} data={enteredNum} />
				</div>
			)}
		</div>
	);
};
