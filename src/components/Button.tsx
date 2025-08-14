type ButtonProps = {
	label?: string
	isPrimary?: boolean
}

const Button = ({ label = 'Button', isPrimary }: ButtonProps) => {
	return (
		<button
			className={`border px-3 py-1 rounded-md ${isPrimary ? 'bg-white text-black' : ''}`}
			type="button"
		>
			{label}
		</button>
	)
}

export default Button
