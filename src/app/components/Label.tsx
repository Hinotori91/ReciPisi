type InputLabelProps = {
  forInput: string,
  labelText: string
}

const InputLabel = (props: InputLabelProps) => {
  return (
    <label htmlFor={props.forInput}>{props.labelText}</label>
  )
}

export default InputLabel;