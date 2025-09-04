import { NextResponse } from 'next/server';
import quotes from '@/data/quotes.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const randomParam = searchParams.get('random');
  const senecaQuotes = quotes.filter(
    (quote) => quote.author.toLowerCase() === 'seneca',
  );

  if (randomParam !== null) {
    const randomQuote = Math.floor(Math.random() * senecaQuotes.length);
    return NextResponse.json(senecaQuotes[randomQuote]);
  } else {
    return NextResponse.json(senecaQuotes);
  }
}
