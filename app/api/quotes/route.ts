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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limitParam = searchParams.get('max');
  const quotes = [
    ...marcusQuotes,
    ...epictetusQuotes,
    ...senecaQuotes,
    ...zenoQuotes,
  ];

  // default limit
  let limit = 20;

  if (limitParam) {
    const parsed = parseInt(limitParam, 10);
    if (!Number.isNaN(parsed)) {
      limit = Math.min(parsed, 100);
    }
  }

  const shuffled = [...quotes].sort(() => Math.random() - 0.5);
  const limitedQuotes = shuffled.slice(0, limit);
  return NextResponse.json(limitedQuotes);
}
