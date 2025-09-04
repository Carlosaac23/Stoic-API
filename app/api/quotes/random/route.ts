import { NextResponse } from 'next/server';
import quotes from '@/data/quotes.json';

export async function GET() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return NextResponse.json(quotes[randomIndex]);
}
