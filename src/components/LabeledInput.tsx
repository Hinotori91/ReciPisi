type LabeledInputProps = {
	label: string
	type?: string
	placeholder?: string
}

const LabeledInput = ({ label, type, placeholder }: LabeledInputProps) => {
	return (
		<>
			<label //
				htmlFor={`input-${placeholder}`}
			>
				{label}
			</label>
			<input //
				id={`input-${placeholder}`}
				type={type}
				placeholder={placeholder ? placeholder : label}
			/>
		</>
	)
}

export default LabeledInput
