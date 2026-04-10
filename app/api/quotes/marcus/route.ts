import { NextResponse } from 'next/server';

import type { Quote } from '@/types';

import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const randomParam = searchParams.get('random');

  const marcoQuotes: Quote[] = await prisma.quote.findMany({
    where: { author: { equals: 'marcus aurelius', mode: 'insensitive' } },
  });

  if (randomParam !== null) {
    const randomQuote = Math.floor(Math.random() * marcoQuotes.length);
    return NextResponse.json(marcoQuotes[randomQuote]);
  } else {
    return NextResponse.json(marcoQuotes);
  }
}
