import Image from 'next/image'

const Home = () => {
	return (
		<Image
			className="m-auto"
			src="/placeholder.png"
			alt="Placeholder meme"
			width={500}
			height={900}
		/>
	)
}

export default Home
