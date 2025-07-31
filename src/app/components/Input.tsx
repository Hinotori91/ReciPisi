type InputProps = {
	inputType: string
	placeholder: string
}

type InputLabelProps = {
	forInput: string
	labelText: string
}

type input = InputProps & InputLabelProps

const InputLabel = (propsLabel: InputLabelProps) => {
	return <label htmlFor={propsLabel.forInput}>{propsLabel.labelText}</label>
}

const UserInput = (props: InputProps) => {
	return (
		<input
			id={props.placeholder}
			type={props.inputType}
			placeholder={props.placeholder}
		/>
	)
}

export default function Input(props: input) {
	return (
		<div>
			<InputLabel forInput={props.forInput} labelText={props.labelText} />
			<br />
			<UserInput inputType={props.inputType} placeholder={props.placeholder} />
		</div>
	)
}
