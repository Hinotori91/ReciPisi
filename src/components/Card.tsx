type CardProps = {
	children: React.ReactNode
	className?: string
}

const Card = (p: CardProps) => {
	return (
		<div className={`p-8 border rounded-lg w-max h-fit ${p.className}`}>
			{p.children}
		</div>
	)
}

export default Card
