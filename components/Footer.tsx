export default function Footer() {
  return (
    <footer className='mt-10 pb-6'>
      <p className='text-center text-sm'>
        &copy;{' '}
        <a
          className='font-medium hover:underline hover:underline-offset-2'
          href='https://github.com/Carlosaac23/'
          rel='noopener noreferrer'
          target='_blank'
        >
          Carlos Acosta
        </a>{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
