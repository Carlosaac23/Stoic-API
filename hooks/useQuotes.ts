import { useState } from 'react';

import type { Quote } from '@/types';

export function useQuotes() {
  const [quote, setQuote] = useState<Quote | null>(null);

  const fetchQuote = async () => {
    const res = await fetch('/api/quotes?random');
    const data = await res.json();
    setQuote(data);
  };

  return { quote, fetchQuote };
}
