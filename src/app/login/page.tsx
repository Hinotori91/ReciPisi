import Card from '@/components/Card'
import LabeledInput from '@/components/LabeledInput'
import Link from 'next/link'

const Login = () => {
	return (
		<div className="flex h-full justify-center">
			<Card>
				<div className="card-body">
					<LabeledInput label="E-Mail/Username" />
					<LabeledInput label="Password" type="password" />
					<div className="card-actions justify-between">
						<Link href="/register">
							<button className="btn">Register</button>
						</Link>
						<button className="btn btn-primary">Login</button>
					</div>
				</div>
			</Card>
		</div>
	)
}

export default Login
