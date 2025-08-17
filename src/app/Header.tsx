import Link from 'next/link'

const Header = () => {
	return (
		<div className="flex justify-between px-8 py-2">
			<div className="flex gap-4 items-center overflow-scroll">
				<Link href="/" className="mr-8">
					<span className="text-2xl font-extrabold">Recipisi</span>
				</Link>
				<Link href="/login">Login</Link>
				<Link href="/register">Register</Link>
				<Link href="/browse">Browse</Link>
				<Link href="/recipe">Recipe</Link>
				<Link href="/mealplan">Meal Plan</Link>
				<Link href="/test" className="ml-4 text-gray-500">
					Test
				</Link>
			</div>
			<div className="flex items-center">User Box coming soon™</div>
		</div>
	)
}

export default Header
