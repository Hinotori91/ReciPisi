type CardProps = {
	children: React.ReactNode
	className?: string
}

const Card = ({ children, className }: CardProps) => {
	return (
		<div className={`p-8 border rounded-lg w-max h-fit ${className}`}>
			{children}
		</div>
	)
}

export default Card
