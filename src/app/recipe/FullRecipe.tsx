import { Recipe } from '@/types/types'

type FullRecipeProps = {
	recipe: Recipe
}

const FullRecipe = ({ recipe }: FullRecipeProps) => {
	return (
		<div className="card-body gap-4 w-5xl">
			<div className="flex gap-2 justify-between">
				<span className="card-title overflow-scroll">{recipe.title}</span>
				<div className="flex gap-2">
					<button className="btn btn-primary">Start cooking mode</button>
				</div>
			</div>
			<div className="flex gap-2 w-full">
				{/* Left side */}
				<div className="flex flex-1 flex-col gap-2 border-red-800 border">
					<div>kochzeit&nutritions</div>
					<div>Ingredients</div>
				</div>
				{/* Right side */}
				<div className="flex flex-1 flex-col gap-2 border border-blue-800">
					{recipe.steps.map((step, i) => (
						<div key={i}>
							<h3 className="text-lg">{`Step ${i + 1}`}</h3>
							<div>{step}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default FullRecipe
