import { NextResponse } from 'next/server';

import type { Quote } from '@/types';

import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const randomParam = searchParams.get('random');

  const epictetusQuotes: Quote[] = await prisma.quote.findMany({
    where: { author: { equals: 'epictetus', mode: 'insensitive' } },
  });

  if (randomParam !== null) {
    const randomQuote = Math.floor(Math.random() * epictetusQuotes.length);
    return NextResponse.json(epictetusQuotes[randomQuote]);
  } else {
    return NextResponse.json(epictetusQuotes);
  }
}
