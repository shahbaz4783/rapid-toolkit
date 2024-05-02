import { tools } from '@/data/tools';
import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1 className='text-3xl font-semibold'>A Hub of Utilities and Tools</h1>
			<section className='grid gap-4 grid-cols-2 sm:grid-cols-4'>
				{tools.map((item, index) => (
					<Link key={index} href={item.path} className='border rounded-sm p-3'>
						<h2>{item.title}</h2>
						<p>{item.description}</p>
					</Link>
				))}
			</section>
		</main>
	);
}
