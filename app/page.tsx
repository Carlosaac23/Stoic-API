export default function Home() {
  return (
    <main className='3xl:mx-24 mx-8 font-sans text-neutral-50 md:mx-12 lg:mx-16'>
      <header>
        <h1 className='3xl:my-12 my-6 text-center text-3xl'>Stoic API</h1>
      </header>

      <section>
        <p className='text-base xl:text-lg'>
          This is a simple API that gives you a ton of stoic quotes from the
          most famous stoic that have lived. Only have to fecth{' '}
          <code className='text-foreground rounded-md border border-neutral-800 bg-neutral-900/50 px-2 py-1 font-mono text-sm'>
            https://stoic-api-red.vercel.app/api/quotes
          </code>{' '}
          and you will recieve a tons of quotes.
        </p>

        <h2 className='my-8 text-xl font-semibold'>Random Quotes</h2>
        <p className='text-base xl:text-lg'>
          To fetch random quotes use this URL{' '}
          <code className='text-foreground rounded-md border border-neutral-800 bg-neutral-900/50 px-2 py-1 font-mono text-sm'>
            https://stoic-api-red.vercel.app/api/quotes/random
          </code>
          .
        </p>

        <h2 className='my-8 text-xl font-semibold'>
          Quotes from a specific author
        </h2>
        <p className='text-base xl:text-lg'>
          To fetch Marcus Aurelius quotes use this URL{' '}
          <code className='text-foreground rounded-md border border-neutral-800 bg-neutral-900/50 px-2 py-1 font-mono text-sm'>
            https://stoic-api-red.vercel.app/api/quotes/marcus
          </code>
          . You can choose between{' '}
          <code className='text-foreground rounded-md border border-neutral-800 bg-neutral-900/50 px-2 py-1 font-mono text-sm'>
            marcus | seneca | epictetus
          </code>
          .
        </p>
      </section>

      <div className='fixed right-0 bottom-0 left-0'>
        <footer className='py-4'>
          <p className='text-center text-sm'>
            &copy;{' '}
            <a
              className='underline underline-offset-2'
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
