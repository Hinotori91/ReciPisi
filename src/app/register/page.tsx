import Card from '@/components/Card'
import LabeledInput from '@/components/LabeledInput'

const Register = () => {
	return (
		<div className="flex h-full justify-center">
			<Card>
				<div className="card-body">
					<LabeledInput label="E-Mail" type="email"></LabeledInput>
					<LabeledInput label="Username"></LabeledInput>
					<LabeledInput label="Password" type="password"></LabeledInput>
					<LabeledInput label="Confirm password" type="password"></LabeledInput>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Register</button>
					</div>
				</div>
			</Card>
		</div>
	)
}

export default Register
