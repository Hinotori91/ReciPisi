import Image from 'next/image'
import Login from './login/page'
import CurrentLocation from './components/CurrentLocation'
import Registry from './registry/page'

function Location() {
	const loc = <CurrentLocation />

	if (loc.key == '/registry') {
		return <Registry />
	} else {
		return <Login />
	}
}

export default function Home() {
	return (
		<div className="flex gap-5 items-center justify-center min-h-screen">
			<div className="flex flex-col">
				<Image
					src="/placeholder.png"
					alt="ResiPisi"
					width={500}
					height={900}
				/>
			</div>
		</div>
	)
}
