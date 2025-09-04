export default function Home() {
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
          most famous stoic that have lived. Only have to use{' '}
          <code className='rounded-md border border-neutral-300 bg-neutral-200 px-2 py-1 font-mono text-sm'>
            https://stoic-api-red.vercel.app/api/quotes
          </code>{' '}
          (By default are 20 quotes). If you want more quotes you can use{' '}
          <code className='rounded-md border border-neutral-300 bg-neutral-200 px-2 py-1 font-mono text-sm'>
            https://stoic-api-red.vercel.app/api/quotes?max=number
          </code>
        </p>

        <h2 className='my-8 text-xl font-semibold text-neutral-600'>
          - Random Quotes
        </h2>
        <p className='text-base leading-7'>
          To fetch random quotes use this URL{' '}
          <code className='rounded-md border border-neutral-300 bg-neutral-200 px-2 py-1 font-mono text-sm'>
            https://stoic-api-red.vercel.app/api/quotes/random
          </code>
          .
        </p>

        <h2 className='my-8 text-xl font-semibold text-neutral-600'>
          - Quotes from a specific author
        </h2>
        <p className='text-base leading-7'>
          To fetch Marcus Aurelius quotes use this URL{' '}
          <code className='rounded-md border border-neutral-300 bg-neutral-200 px-2 py-1 font-mono text-sm'>
            https://stoic-api-red.vercel.app/api/quotes/marcus
          </code>
          . You can choose between{' '}
          <code className='rounded-md border border-neutral-300 bg-neutral-200 px-2 py-1 font-mono text-sm'>
            marcus | seneca | epictetus
          </code>
          .
        </p>

        <h3 className='my-6 font-semibold text-neutral-600'>
          -- Random quote from specific author
        </h3>
        <p className='text-base leading-7'>
          To fetch a random quote from Marcus Aurelius, add this query to the
          URL{' '}
          <code className='text-foreground rounded-md border border-neutral-300 bg-neutral-200 px-2 py-1 font-mono text-sm'>
            https://stoic-api-red.vercel.app/api/quotes/marcus?random
          </code>
          . This applies to every author.
        </p>
      </section>

      <div className='fixed right-0 bottom-0 left-0'>
        <footer className='py-4'>
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
