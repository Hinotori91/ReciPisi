import { ChangeEventHandler } from 'react'

type LabeledInputProps = {
	label: string
	type?: string
	placeholder?: string
	onChange?: ChangeEventHandler<HTMLInputElement>
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
