import { Analytics } from '@vercel/analytics/next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Stoic API',
	description: 'Stoic API that gives hundred of stoic quotes',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className={`${GeistSans.variable} ${GeistMono.variable}`} lang='en'>
			<body className='antialiased'>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
