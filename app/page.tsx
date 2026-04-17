'use client';

import CodeBlock from '@/components/CodeBlock';
import FetchQuote from '@/components/FetchQuote';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import InfoDiv from '@/components/InfoDiv';

export default function Home() {
  return (
    <main className='mx-8 font-sans md:mx-12 lg:mx-16 2xl:mx-72'>
      <Header />

      <section className='tracking-normal'>
        <p className='text-base leading-7'>
          This is a simple API that gives you a ton of stoic quotes from the
          most famous Stoics that have lived. Only have to use{' '}
          <CodeBlock text='https://stoic-api-red.vercel.app/api/quotes' /> (By
          default are 10 quotes). If you want more quotes you can use{' '}
          <CodeBlock text='max={number}' /> param{' '}
          <CodeBlock text='https://stoic-api-red.vercel.app/api/quotes?max={number}' />
        </p>

        <FetchQuote />

        <h2 className='my-8 text-xl font-bold'>Random Quotes</h2>
        <p className='text-base leading-7'>
          To fetch random quotes use <CodeBlock text='random' /> param{' '}
          <CodeBlock text='https://stoic-api-red.vercel.app/api/quotes?random' />
        </p>

        <h2 className='my-8 text-xl font-bold'>
          Quotes from a specific author
        </h2>
        <p className='text-base leading-7'>
          To fetch Marcus Aurelius quotes use this URL{' '}
          <CodeBlock text='https://stoic-api-red.vercel.app/api/quotes/marcus' />
          . You can choose between{' '}
          <CodeBlock text='marcus | seneca | epictetus | zeno' />
        </p>

        <h3 className='my-6 font-bold'>Random quote from specific author</h3>
        <p className='text-base leading-7'>
          To fetch a random quote from Marcus Aurelius or fetch more than 10
          quotes, add <CodeBlock text='random' /> param to the URL{' '}
          <CodeBlock text='https://stoic-api-red.vercel.app/api/quotes/marcus?random' />{' '}
          or <CodeBlock text='max={number}' /> respectively{' '}
          <CodeBlock text='https://stoic-api-red.vercel.app/api/quotes/marcus?max={number}' />{' '}
          . This applies to every author.
        </p>
      </section>

      <InfoDiv text='Rate limited to 10 requests per minute per IP.' />

      <div className='md:fixed md:right-0 md:bottom-0 md:left-0'>
        <Footer />
      </div>
    </main>
  );
}
