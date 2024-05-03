import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

const BaseOptions = ({ onHandleFromProp, onHandleToProp }: BaseOptions) => {
	return (
		<div className='grid md:grid-cols-2 gap-4'>
			<Select onValueChange={onHandleFromProp}>
				<SelectTrigger>
					<SelectValue placeholder='From' />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Choose the base</SelectLabel>
						<SelectItem value='2'>Binary</SelectItem>
						<SelectItem value='8'>Octal</SelectItem>
						<SelectItem value='10'>Decimal</SelectItem>
						<SelectItem value='16'>Hexadecimal</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>

			<Select onValueChange={onHandleToProp}>
				<SelectTrigger>
					<SelectValue placeholder='To' />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Choose the base</SelectLabel>
						<SelectItem value='2'>Binary</SelectItem>
						<SelectItem value='8'>Octal</SelectItem>
						<SelectItem value='10'>Decimal</SelectItem>
						<SelectItem value='16'>Hexadecimal</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};

export default BaseOptions;
