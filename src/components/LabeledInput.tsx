type LabeledInputProps = {
	label: string
	type: string
	placeholder: string
}

const LabeledInput = (p: LabeledInputProps) => {
	return (
		<>
			<label //
				htmlFor={`input-${p.placeholder}`}
			>
				{p.label}
			</label>
			<input //
				id={`input-${p.placeholder}`}
				type={p.type}
				placeholder={p.placeholder}
			/>
		</>
	)
}
