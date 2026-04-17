import { RateLimiterMemory } from 'rate-limiter-flexible';

const rateLimiter = new RateLimiterMemory({ points: 10, duration: 60 });

export async function consumeRateLimiter(
  userIP: string,
  pointsToConsume: number
) {
  return await rateLimiter.consume(userIP, pointsToConsume);
}
