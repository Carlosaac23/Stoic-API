import { NextResponse } from 'next/server';
import quotes from '@/data/quotes.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const randomParam = searchParams.get('random');
  const marcoQuotes = quotes.filter(
    (quote) => quote.author.toLowerCase() === 'marcus aurelius',
  );

  if (randomParam !== null) {
    const randomQuote = Math.floor(Math.random() * marcoQuotes.length);
    return NextResponse.json(marcoQuotes[randomQuote]);
  } else {
    return NextResponse.json(marcoQuotes);
  }
}
