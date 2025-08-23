import Card from '@/components/Card'
import FullRecipe from './FullRecipe'

import type { Recipe } from '@/types/types.ts'

const Recipe = () => {
	const r: Recipe = {
		allergens: [],
		energy: 345,
		id: 'foo',
		ingredients: [],
		isFavourite: false,
		nutritions: [],
		steps: [
			'Admire this page',
			'Like, *really* admire this page',
			'Tell Anders how fucking nice this page is',
			'Admire the meal plan site for all its glory!',
			'Be happy :D',
		],
		title: 'Dummy title',
		totalTime: 3,
	}

	return (
		<Card className="m-auto">
			<FullRecipe recipe={r} />
		</Card>
	)
}

export default Recipe
