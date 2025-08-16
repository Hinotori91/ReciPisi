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

type RootLayoutProps = Readonly<{
	children: React.ReactNode
}>

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="de" className={inter.className}>
			<body className="flex flex-col h-dvh">
				<Header />
				<div className="flex-1 border overflow-scroll">{children}</div>
			</body>
		</html>
	)
}
export default RootLayout
