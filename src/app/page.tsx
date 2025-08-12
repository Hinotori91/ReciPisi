import Image from 'next/image'

const Home = () => {
	return (
		<div className="flex gap-5 items-center justify-center min-h-screen">
			<div className="flex flex-col">
				<Image
					src="/placeholder.png"
					alt="Placeholder meme"
					width={500}
					height={900}
				/>
			</div>
		</div>
	)
}

export default Home
