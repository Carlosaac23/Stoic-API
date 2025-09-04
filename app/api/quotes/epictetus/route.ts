import { NextResponse } from 'next/server';
import quotes from '@/data/quotes.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const randomParam = searchParams.get('random');
  const epictetusQuotes = quotes.filter(
    (quote) => quote.author.toLowerCase() === 'epictetus',
  );

  if (randomParam !== null) {
    const randomQuote = Math.floor(Math.random() * epictetusQuotes.length);
    return NextResponse.json(epictetusQuotes[randomQuote]);
  } else {
    return NextResponse.json(epictetusQuotes);
  }
}
