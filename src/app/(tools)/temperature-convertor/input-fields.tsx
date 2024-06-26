'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import DisplayCard from '@/components/cards/DisplayCard';

export const InputFields = () => {
	const [formValues, setFormValues] = useState({
		celsius: '',
		fahrenheit: '',
		kelvin: '',
	});

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.target as HTMLFormElement;
		const fd = new FormData(e.target as HTMLFormElement);
		const data = Object.fromEntries(fd.entries());
		const temperatureValue = Number(data.value);

		switch (data.unit) {
			case 'celsius': {
				const fahrenheit = (temperatureValue * 9) / 5 + 32;
				const kelvin = temperatureValue + 273.15;

				setFormValues({
					celsius: temperatureValue.toFixed(2),
					fahrenheit: fahrenheit.toFixed(2),
					kelvin: kelvin.toFixed(2),
				});
				break;
			}

			case 'fahrenheit': {
				const celsius = ((temperatureValue - 32) * 5) / 9;
				const kelvin = celsius + 273.15;

				setFormValues({
					celsius: celsius.toFixed(2),
					fahrenheit: temperatureValue.toFixed(2),
					kelvin: kelvin.toFixed(2),
				});
				break;
			}

			case 'kelvin': {
				const celsius = temperatureValue - 273.15;
				const fahrenheit = (celsius * 9) / 5 + 32;

				setFormValues({
					celsius: celsius.toFixed(2),
					fahrenheit: fahrenheit.toFixed(2),
					kelvin: temperatureValue.toFixed(2),
				});
				break;
			}

			default:
				break;
		}

		const inputElement = form.elements.namedItem('value') as HTMLInputElement;
		if (inputElement) {
			inputElement.value = '';
		}
	};

	return (
		<>
			<form
				className='flex flex-col gap-6 border-8 rounded-xl p-4 w-full md:w-1/3'
				onSubmit={submitHandler}
			>
				<Select name='unit'>
					<SelectTrigger>
						<SelectValue placeholder='Select temperature unit' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='celsius'>Celsius</SelectItem>
							<SelectItem value='fahrenheit'>Fahrenheit</SelectItem>
							<SelectItem value='kelvin'>Kelvin</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>

				<Input
					type='number'
					name='value'
					step='0.001'
					placeholder='Enter temperature'
				/>
				<Button>Convert</Button>
			</form>
			{formValues.celsius && (
				<article className='w-full space-y-6 md:w-1/3 '>
					<DisplayCard title='Celsius' data={formValues.celsius} />
					<DisplayCard title='Fahrenheit' data={formValues.fahrenheit} />
					<DisplayCard title='Kelvin' data={formValues.kelvin} />
				</article>
			)}
		</>
	);
};
