type Unit = 'kg' | 'l' | 'pcs'

type NutritionUnit = 'kJ' | 'kcal' | 'g'

type Allergen = {
	id: string
	displayName: string
	letter: string
}

type Ingredient = {
	id: string
	displayName: string
	unit: Unit
}

type Nutrition = {
	id: string
	displayName: string
	amount: number
	unit: NutritionUnit
}

type RecipeOverview = {
	id: string
	title: string
	totalTime: number
	energy: number
	isFavourite: boolean
}

type Recipe = RecipeOverview & {
	allergens: Allergen[]
	nutritions: Nutrition[]
	ingredients: Ingredient[]
	steps: string[]
}
