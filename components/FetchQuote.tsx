import { useQuotes } from '@/hooks/useQuotes';

export default function FetchQuote() {
  const { quote, fetchQuote } = useQuotes();

  return (
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
  );
}
