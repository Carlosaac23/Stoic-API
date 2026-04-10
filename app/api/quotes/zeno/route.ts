import { NextResponse } from 'next/server';

import type { Quote } from '@/types';

import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const randomParam = searchParams.get('random');

  const zenoQuotes: Quote[] = await prisma.quote.findMany({
    where: { author: { contains: 'zeno', mode: 'insensitive' } },
  });

  if (randomParam !== null) {
    const randomQuote = Math.floor(Math.random() * zenoQuotes.length);
    return NextResponse.json(zenoQuotes[randomQuote]);
  } else {
    return NextResponse.json(zenoQuotes);
  }
}
