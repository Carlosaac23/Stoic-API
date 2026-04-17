import { headers } from 'next/headers';

export async function getUserIP() {
  const headerList = await headers();

  const ip =
    headerList.get('x-forwarded-for')?.split(',')[0] ||
    headerList.get('x-real-ip') ||
    '127.0.0.1'; // Fallback for local development
  return ip;
}
