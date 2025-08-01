import Navbar from './components/Navbar'
import '@/app/globals.css'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="de">
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
