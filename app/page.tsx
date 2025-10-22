'use client';

import { useState } from 'react';

type Quote = {
  author: string;
  quote: string;
};

export default function Home() {
  const [quote, setQuote] = useState<Quote | null>(null);

  const fetchQuote = async () => {
    const res = await fetch('/api/quotes/random');
    const data = await res.json();
    setQuote(data);
  };

  return (
    <main className='mx-8 font-sans md:mx-12 lg:mx-16 2xl:mx-72'>
      <header>
        <h1 className='3xl:my-12 my-6 text-center text-3xl font-bold'>
          Stoic API
        </h1>
      </header>

      <section className='tracking-normal'>
        <p className='text-base leading-7'>
          This is a simple API that gives you a ton of stoic quotes from the
          most famous Stoics that have lived. Only have to use{' '}
          <code className='rounded-md border border-neutral-300 bg-neutral-200 px-2 py-1 font-mono text-sm'>
            https://stoic-api-red.vercel.app/api/quotes
          </code>{' '}
          (By default are 20 quotes). If you want more quotes you can use{' '}
          <code className='rounded-md border border-neutral-300 bg-neutral-200 px-2 py-1 font-mono text-sm'>
            https://stoic-api-red.vercel.app/api/quotes?max=number
          </code>
        </p>

        <div>
          <h3 className='mt-4 mb-2 font-semibold'>Live Preview</h3>
          <div className='md:flex md:items-center md:gap-4'>
            {quote ? (
              <div className='mb-2 rounded-md bg-neutral-200 p-3 inset-shadow-xs md:mb-0 md:max-w-xl'>
                <p className='mb-2 text-sm'>
                  <em>{quote.quote}</em>
                </p>
                <p className='text-sm'>
                  - <strong>{quote.author}</strong>
                </p>
              </div>
            ) : (
              <div className='mb-2 w-44 rounded-md bg-neutral-200 p-4 inset-shadow-sm md:mb-0 md:max-w-xl'>
                <p className='text-sm'>Try fetching a quote</p>
              </div>
            )}
            <button
              className='cursor-pointer rounded-md bg-neutral-900 px-4 py-2 font-semibold text-neutral-50 shadow-sm duration-100 ease-out active:scale-97'
              onClick={fetchQuote}
              type='button'
            >
              Fetch Quote
            </button>
          </div>
        </div>

        <h2 className='my-8 text-xl font-bold'>Random Quotes</h2>
        <p className='text-base leading-7'>
          To fetch random quotes use this URL{' '}
          <code className='rounded-md border border-neutral-300 bg-neutral-200 px-2 py-1 font-mono text-sm'>
            https://stoic-api-red.vercel.app/api/quotes/random
          </code>
          .
        </p>

        <h2 className='my-8 text-xl font-bold'>
          Quotes from a specific author
        </h2>
        <p className='text-base leading-7'>
          To fetch Marcus Aurelius quotes use this URL{' '}
          <code className='rounded-md border border-neutral-300 bg-neutral-200 px-2 py-1 font-mono text-sm'>
            https://stoic-api-red.vercel.app/api/quotes/marcus
          </code>
          . You can choose between{' '}
          <code className='rounded-md border border-neutral-300 bg-neutral-200 px-2 py-1 font-mono text-sm'>
            marcus | seneca | epictetus | zeno
          </code>
          .
        </p>

        <h3 className='my-6 font-bold'>Random quote from specific author</h3>
        <p className='text-base leading-7'>
          To fetch a random quote from Marcus Aurelius, add this query to the
          URL{' '}
          <code className='text-foreground rounded-md border border-neutral-300 bg-neutral-200 px-2 py-1 font-mono text-sm'>
            https://stoic-api-red.vercel.app/api/quotes/marcus?random
          </code>
          . This applies to every author.
        </p>
      </section>

      <div className='md:fixed md:right-0 md:bottom-0 md:left-0'>
        <footer className='mt-10 pb-6'>
          <p className='text-center text-sm'>
            &copy;{' '}
            <a
              className='font-medium'
              href='https://github.com/Carlosaac23/'
              rel='noopener noreferrer'
              target='_blank'
            >
              Carlos Acosta
            </a>{' '}
            {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </main>
  );
}
