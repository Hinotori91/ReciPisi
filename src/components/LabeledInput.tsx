import { ChangeEventHandler } from 'react'

type LabeledInputProps = {
	label: string
	type?: string
	placeholder?: string
	value?: string | number
	onChange?: ChangeEventHandler<HTMLInputElement>
}

const LabeledInput = ({
	label,
	type,
	placeholder,
	value,
	onChange,
}: LabeledInputProps) => {
	return (
		<label className="floating-label">
			<span>{label}</span>
			<input //
				id={`input-${placeholder}`}
				type={type}
				placeholder={placeholder ? placeholder : label}
				className="input"
				value={value}
				onChange={onChange}
			/>
		</label>
	)
}

export default LabeledInput
