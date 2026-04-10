import { NextResponse } from 'next/server';

import type { Quote } from '@/types';

import { prisma } from '@/lib/prisma';

const epictetusQuotes: Quote[] = await prisma.quote.findMany({
  where: { author: { equals: 'epictetus', mode: 'insensitive' } },
});
const marcusQuotes: Quote[] = await prisma.quote.findMany({
  where: { author: { equals: 'marcus aurelius', mode: 'insensitive' } },
});
const senecaQuotes: Quote[] = await prisma.quote.findMany({
  where: { author: { contains: 'seneca', mode: 'insensitive' } },
});
const zenoQuotes: Quote[] = await prisma.quote.findMany({
  where: { author: { contains: 'zeno', mode: 'insensitive' } },
});

export async function GET() {
  const quotes = [
    ...epictetusQuotes,
    ...marcusQuotes,
    ...senecaQuotes,
    ...zenoQuotes,
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return NextResponse.json(quotes[randomIndex]);
}
