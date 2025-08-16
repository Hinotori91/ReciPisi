import Button from '@/components/Button'
import Card from '@/components/Card'
import LabeledInput from '@/components/LabeledInput'

const Register = () => {
	return (
		<div className="flex h-full justify-center">
			<Card>
				<div className="grid grid-cols-[1fr_300px] gap-2">
					<LabeledInput label="E-Mail" type="email"></LabeledInput>
					<LabeledInput label="Username"></LabeledInput>
					<LabeledInput label="Password" type="password"></LabeledInput>
					<LabeledInput label="Confirm password" type="password"></LabeledInput>
				</div>
				<div className="mt-8 flex justify-end">
					<Button label="Register" isPrimary />
				</div>
			</Card>
		</div>
	)
}

export default Register
