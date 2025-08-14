import Button from '@/components/Button'
import Card from '@/components/Card'
import LabeledInput from '@/components/LabeledInput'
import Link from 'next/link'

const Register = () => {
	return (
		<div className="flex h-full justify-center">
			<Card>
				<div className="grid grid-cols-[1fr_300px] gap-2">
					<LabeledInput label="E-Mail"></LabeledInput>
					<LabeledInput label="Username"></LabeledInput>
					<LabeledInput label="Password" type="password"></LabeledInput>
					<LabeledInput label="Confirm password" type="password"></LabeledInput>
				</div>
				<div className="mt-8 flex justify-end">
					<Button label="Register" isPrimary />
				</div>
			</Card>
		</div>
		// <div className="flex flex-col gap-5 items-center bg-sky-950 rounded-3xl w-80 p-10">
		// 	<div className="flex flex-col gap-2 items-center">
		// 		<label htmlFor="username">Username</label>
		// 		<input id="username" type="text" placeholder="username" />
		// 	</div>
		// 	<div className="flex flex-col gap-2 items-center">
		// 		<label htmlFor="firstname">Firstname</label>
		// 		<input id="firstname" type="text" placeholder="firstname" />
		// 	</div>
		// 	<div className="flex flex-col gap-2 items-center">
		// 		<label htmlFor="lastname">Lastname</label>
		// 		<input id="lastname" type="text" placeholder="lastname" />
		// 	</div>
		// 	<div className="flex flex-col gap-2 items-center">
		// 		<label htmlFor="mail">Mail</label>
		// 		<input id="mail" type="text" placeholder="mail" />
		// 	</div>
		// 	<div className="flex flex-col gap-2 items-center">
		// 		<label htmlFor="password">Password</label>
		// 		<input id="password" type="password" placeholder="password" />
		// 	</div>
		// 	<div className="flex justify-center">
		// 		<input
		// 			type="submit"
		// 			value="Send"
		// 			className="text-center border-2 border-indigo-600 p-3 rounded-2xl w-72"
		// 		/>
		// 	</div>
		// </div>
	)
}

export default Register
