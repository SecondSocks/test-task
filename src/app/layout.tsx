import { MainLayout } from '@/components/containers/layouts/MainLayout'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import './globals.css'

const jost = Jost({
	variable: '--font-jost',
	subsets: ['cyrillic', 'latin'],
})

export const metadata: Metadata = {
	title: 'TechStore',
	description: 'TechStore - современный магазин электроники гаджетов',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${jost.variable} antialiased`}>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	)
}
