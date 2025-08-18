import Card from '@/components/Card'
import { neon } from '@neondatabase/serverless'

const Test = () => {
	const create = async (formData: FormData) => {
		'use server'

		// // Connect to the Neon database
		// const sql = neon(`${process.env.DATABASE_URL}`)
		// const comment = formData.get('comment')
		//
		// // Insert the comment from the form into the Postgres database
		// await sql`INSERT INTO comments (comment) VALUES (${comment})`
	}

	return (
		<Card>
			<form className="card-body" action={create}>
				<input
					type="text"
					className="input"
					placeholder="write a comment"
					name="comment"
				/>
				<button className="btn btn-primary" type="submit">
					Submit
				</button>
			</form>
		</Card>
	)
}

export default Test
