import { NextResponse } from 'next/server';
import quotes from '@/data/quotes.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const randomParam = searchParams.get('random');
  const senoQuotes = quotes.filter(
    (quote) => quote.author.toLowerCase() === 'zeno of citium',
  );

  if (randomParam !== null) {
    const randomQuote = Math.floor(Math.random() * senoQuotes.length);
    return NextResponse.json(senoQuotes[randomQuote]);
  } else {
    return NextResponse.json(senoQuotes);
  }
}
