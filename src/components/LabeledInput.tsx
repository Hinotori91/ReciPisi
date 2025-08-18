type LabeledInputProps = {
	label: string
	type?: string
	placeholder?: string
}

const LabeledInput = ({ label, type, placeholder }: LabeledInputProps) => {
	return (
		<label className="floating-label">
			<span>{label}</span>
			<input //
				id={`input-${placeholder}`}
				type={type}
				placeholder={placeholder ? placeholder : label}
				className="input"
			/>
		</label>
	)
}

export default LabeledInput
