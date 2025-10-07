import { NextResponse } from 'next/server';
import epictetusQuotes from '@/data/epictetus.json';
import marcusQuotes from '@/data/marcus.json';
import senecaQuotes from '@/data/seneca.json';
import zenoQuotes from '@/data/zeno.json';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const limitParam = searchParams.get('max');
	const quotes = [
		...marcusQuotes,
		...epictetusQuotes,
		...senecaQuotes,
		...zenoQuotes,
	];

	// default limit
	let limit = 20;

	if (limitParam) {
		const parsed = parseInt(limitParam, 10);
		if (!Number.isNaN(parsed)) {
			limit = Math.min(parsed, 100);
		}
	}

	const shuffled = [...quotes].sort(() => Math.random() - 0.5);
	const limitedQuotes = shuffled.slice(0, limit);
	return NextResponse.json(limitedQuotes);
}
