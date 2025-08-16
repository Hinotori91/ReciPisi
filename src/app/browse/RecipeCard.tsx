import Card from '@/components/Card'

type RecipeCardProps = { title?: string }

const RecipeCard = ({ title = 'Unknown recipe' }: RecipeCardProps) => {
	return <Card className="flex flex-col gap-2 p-2 w-full">{title}</Card>
}

export default RecipeCard
