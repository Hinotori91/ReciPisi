import '@/app/globals.css'
import localFont from 'next/font/local'

const inter = localFont({
	src: [
		{
			path: 'fonts/inter/web/Inter-Regular.woff2',
			weight: '400',
			style: 'normal'
		},
		{
			path: 'fonts/inter/web/Inter-ExtraBold.woff2',
			weight: '800',
			style: 'extrabold'
		}
	],
	display: 'swap'
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="de" className={inter.className}>
			<body>
				<div className="flex space-between px-8 py-2">
					<span className='text-2xl font-extrabold'>Recipisi</span>
				</div>
				{children}
			</body>
		</html>
	)
}
