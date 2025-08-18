import Card from '@/components/Card'

type RecipeCardProps = { title?: string }

const RecipeCard = ({ title = 'Unknown recipe' }: RecipeCardProps) => {
	return (
		<Card>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
			</div>
		</Card>
	)
}

export default RecipeCard
