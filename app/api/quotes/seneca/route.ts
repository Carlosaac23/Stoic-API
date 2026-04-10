import { NextResponse } from 'next/server';

import type { Quote } from '@/types';

import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const randomParam = searchParams.get('random');

  const senecaQuotes: Quote[] = await prisma.quote.findMany({
    where: { author: { contains: 'seneca', mode: 'insensitive' } },
  });

  if (randomParam !== null) {
    const randomQuote = Math.floor(Math.random() * senecaQuotes.length);
    return NextResponse.json(senecaQuotes[randomQuote]);
  } else {
    return NextResponse.json(senecaQuotes);
  }
}
