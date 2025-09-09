import { Ingredient, RecipeOverview } from '@/types/types'

export type SearchFilter = {
	searchTag?: string
	ingredients: Ingredient[]
	ingredientsExcluded: Ingredient[]
	maxCalories?: number
	maxTime?: number
}

export const getRecipes = ({
	searchTag,
	ingredients,
	ingredientsExcluded,
	maxCalories,
	maxTime,
}: SearchFilter): RecipeOverview[] => {
	console.log(
		`received search filter: ${JSON.stringify({
			//
			searchTag,
			ingredients,
			ingredientsExcluded,
			maxCalories,
			maxTime,
		})}`,
	)

	return [
		{
			id: searchTag ? searchTag : 'Unknown id',
			title: searchTag ? searchTag : 'Unknown title',
			totalTime: maxTime ? maxTime : -1,
			energy: maxCalories ? maxCalories : -1,
			isFavourite: false,
		},
	]
}
