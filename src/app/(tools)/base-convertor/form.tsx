'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useRef } from 'react';
import BaseOptions from './base-options';

export const Form = () => {
	const [fromBase, setfromBase] = useState<number>(10);
	const [toBase, settoBase] = useState<number>(16);
	const [enteredNum, setEnteredNum] = useState('');

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
		<>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col gap-10 w-full md:w-2/3 p-6 rounded-xl border-8'
			>
				<BaseOptions
					onHandleFromProp={handleFromOption}
					onHandleToProp={handleToOption}
				/>
				<Input placeholder='Enter a number' ref={number} required />
				<Button>Convert</Button>
			</form>
			{enteredNum && (
				<p className='font-mono text-3xl text-center w-full overflow-scroll bg-gray-100 text-blue-800 p-4 md:w-2/3 rounded-lg'>
					{enteredNum}
				</p>
			)}
		</>
	);
};
