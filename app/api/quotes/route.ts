import { NextResponse } from 'next/server';
import quotes from '@/data/quotes.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limitParam = searchParams.get('max');

  // default limit
  let limit = 20;

  if (limitParam) {
    const parsed = parseInt(limitParam, 10);
    if (!isNaN(parsed)) {
      limit = Math.min(parsed, 100);
    }
  }

  const shuffled = [...quotes].sort(() => Math.random() - 0.5);
  const limitedQuotes = shuffled.slice(0, limit);
  return NextResponse.json(limitedQuotes);
}
