import { NextResponse } from 'next/server';
import quotes from '@/data/quotes.json';

export async function GET() {
  const marcoQuotes = quotes.filter(quote => quote.author.toLowerCase() === 'marcus aurelius');
  return NextResponse.json(marcoQuotes);
}
