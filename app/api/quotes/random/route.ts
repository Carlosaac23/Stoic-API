import { NextResponse } from 'next/server';
import epictetusQuotes from '@/data/epictetus.json';
import marcusQuotes from '@/data/marcus.json';
import senecaQuotes from '@/data/seneca.json';
import zenoQuotes from '@/data/zeno.json';

export async function GET() {
	const quotes = [
		...epictetusQuotes,
		...marcusQuotes,
		...senecaQuotes,
		...zenoQuotes,
	];
	const randomIndex = Math.floor(Math.random() * quotes.length);
	return NextResponse.json(quotes[randomIndex]);
}
