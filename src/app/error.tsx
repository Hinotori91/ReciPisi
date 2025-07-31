'use client' // Fehlerkomponenten müssen clientseitig sein
import { useEffect } from 'react'

export default function Error({
	error,
	reset,
}: {
	error: Error
	reset: () => void
}) {
	useEffect(() => {
		console.error('Fehler aufgetreten:', error)
	}, [error])

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-red-100">
			<h2 className="text-2xl font-bold text-red-600">
				Oops! Ein Fehler ist aufgetreten.
			</h2>
			<p className="text-gray-700">{error.message}</p>
			<button
				className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
				onClick={() => reset()} // Versucht, die Seite neu zu rendern
			>
				Erneut versuchen
			</button>
		</div>
	)
}
