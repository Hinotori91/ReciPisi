import Button from '@/components/Button'
import Card from '@/components/Card'
import LabeledInput from '@/components/LabeledInput'
import { neon } from '@neondatabase/serverless'
import Link from 'next/link'

const Login = () => {
	const create = async (formData: FormData) => {
		'use server'

		// Connect to the Neon database
		const sql = neon(`${process.env.DATABASE_URL}`)
		const comment = formData.get('comment')

		// Insert the comment from the form into the Postgres database
		await sql`INSERT INTO comments (comment) VALUES (${comment})`
	}

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
			<Card>
				<form action={create}>
					<input type="text" placeholder="write a comment" name="comment" />
					<button type="submit">Submit</button>
				</form>
			</Card>
		</div>
	)
}

export default Login
