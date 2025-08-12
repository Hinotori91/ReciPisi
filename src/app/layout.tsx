import '@/globals.css'
import localFont from 'next/font/local'
import Header from './Header'

const inter = localFont({
	src: [
		{
			path: '../fonts/inter/web/Inter-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../fonts/inter/web/Inter-ExtraBold.woff2',
			weight: '800',
			style: 'extrabold',
		},
	],
})

const RootLayout = ({
	children,
}: //
Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<html lang="de" className={inter.className}>
			<body className="flex flex-col h-screen">
				<Header />

				{children}
			</body>
		</html>
	)
}
export default RootLayout
