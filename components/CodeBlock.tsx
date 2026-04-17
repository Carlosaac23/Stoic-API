export default function CodeBlock({ text }: { text: string }) {
  return (
    <code className='rounded-sm border border-neutral-300 bg-neutral-200 px-1.5 py-0.5 text-sm'>
      {text}
    </code>
  );
}
