import { NextResponse } from 'next/server';
import quotes from '@/data/quotes.json';

export async function GET() {
  return NextResponse.json(quotes);
}
