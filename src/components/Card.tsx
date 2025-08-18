type CardProps = {
	children: React.ReactNode
	className?: string
}

const Card = ({ children, className }: CardProps) => {
	return (
		<div className={`card card-border border-white w-max h-fit ${className}`}>
			{children}
		</div>
	)
}

export default Card
