import { RecipeOverview } from '@/types/types'

export type SearchFilter = {
	searchTag: string
	// ingredients: Ingredient[]
	// ingredientsExcluded: Ingredient[]
	// maxCalories: number
	// maxTime: number
}

export const getRecipes = ({
	searchTag,
	// ingredients,
	// ingredientsExcluded,
	// maxCalories,
	// maxTime,
}: SearchFilter): RecipeOverview[] => {
	return [
		{
			id: searchTag,
			title: searchTag,
			totalTime: Math.ceil(Math.random() * 24) * 5,
			energy: 3,
			isFavourite: false,
		},
	]
}
