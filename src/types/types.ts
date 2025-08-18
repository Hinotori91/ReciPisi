export type Unit = 'kg' | 'l' | 'pcs'

export type NutritionUnit = 'kJ' | 'kcal' | 'g'

export type Allergen = {
	id: string
	displayName: string
	letter: string
}

export type Ingredient = {
	id: string
	displayName: string
	unit: Unit
}

export type Nutrition = {
	id: string
	displayName: string
	amount: number
	unit: NutritionUnit
}

export type RecipeOverview = {
	id: string
	title: string
	totalTime: number
	energy: number
	isFavourite: boolean
}

export type Recipe = RecipeOverview & {
	allergens: Allergen[]
	nutritions: Nutrition[]
	ingredients: Ingredient[]
	steps: string[]
}
