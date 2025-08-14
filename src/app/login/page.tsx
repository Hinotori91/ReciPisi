import Button from '@/components/Button'
import Card from '@/components/Card'
import LabeledInput from '@/components/LabeledInput'
import Link from 'next/link'

const Login = () => {
	return (
		<div className="flex h-full justify-center">
			<Card>
				<div className="grid grid-cols-[1fr_300px] gap-2">
					<LabeledInput label="E-Mail/Username"></LabeledInput>
					<LabeledInput label="Password" type="password"></LabeledInput>
				</div>
				<div className="mt-8 flex justify-between">
					<Link href="/register">
						<Button label="Register" />
					</Link>
					<Button label="Login" isPrimary />
				</div>
			</Card>
		</div>
	)
}

export default Login
