import { CircleAlert } from 'lucide-react';

export default function InfoDiv({ text }: { text: string }) {
  return (
    <div className='mt-16 inline-block rounded-md border border-red-400 bg-red-50 px-6 py-4 text-red-500'>
      <div className='flex items-center gap-2'>
        <CircleAlert />
        {text}
      </div>
    </div>
  );
}
