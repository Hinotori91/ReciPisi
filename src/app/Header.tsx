import Link from 'next/link'

const Header = () => {
	return (
		<div className="flex justify-between px-8 py-2">
			<div className="flex gap-4 items-center">
				<Link href="/">
					<span className="text-2xl font-extrabold mr-8">Recipisi</span>
				</Link>
				<Link href="/login">Login</Link>
				<Link href="/register">Register</Link>
				<Link href="/browse">Browse</Link>
				<Link href="/recipe">Recipe</Link>
				<Link href="/mealplan">Meal Plan</Link>
			</div>
			<div className="flex items-center">User Box coming soon™</div>
		</div>
	)
}

export default Header
