import { NextResponse } from 'next/server';
import { RateLimiterRes } from 'rate-limiter-flexible';

import type { Quote } from '@/types';

import { getUserIP } from '@/lib/getUserIP';
import { prisma } from '@/lib/prisma';
import { consumeRateLimiter } from '@/lib/rateLimiter';

export async function GET(request: Request) {
  try {
    const userIP = await getUserIP();
    await consumeRateLimiter(userIP, 1);

    const { searchParams } = new URL(request.url);
    const randomParam = searchParams.get('random');
    const limitParam = searchParams.get('max');
    let limit = 10; // Default limit

    const epictetusQuotes: Quote[] = await prisma.quote.findMany({
      where: { author: { equals: 'epictetus', mode: 'insensitive' } },
    });

    if (limitParam) {
      const parsed = parseInt(limitParam, 10);
      if (!Number.isNaN(parsed)) {
        limit = Math.min(parsed, 100);
      }
    }

    if (randomParam !== null) {
      const randomQuote = Math.floor(Math.random() * epictetusQuotes.length);
      return NextResponse.json(epictetusQuotes[randomQuote]);
    } else if (limitParam) {
      return NextResponse.json(epictetusQuotes.slice(0, limit));
    }

    return NextResponse.json(epictetusQuotes.slice(0, limit));
  } catch (error) {
    if (error instanceof RateLimiterRes) {
      return NextResponse.json(
        { message: 'Too many requests.' },
        { status: 429 }
      );
    }
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
