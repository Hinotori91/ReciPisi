'use client' // error components have to be client side rendered

import { useEffect } from 'react'

export default function Error({
	error,
	reset,
}: {
	error: Error
	reset: () => void
}) {
	useEffect(() => {
		console.error('an error occured:', error)
	}, [error])

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-red-100">
			<h2 className="text-2xl font-bold text-red-600">
				Hubsi! An error occured.
			</h2>
			<p className="text-gray-700">{error.message}</p>
			<button
				className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
				onClick={() => reset()} // Tries to rerender the site
			>
				Try again
			</button>
		</div>
	)
}
