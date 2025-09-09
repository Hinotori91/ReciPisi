'use client'

import { getRecipes, SearchFilter } from './data'
import RecipeCard from './RecipeCard'
import Search from './Search'
import { RecipeOverview } from '@/types/types'
import { useState } from 'react'

const Browse = () => {
	const [recipes, setRecipes] = useState<RecipeOverview[]>([])

	const onSearch = async (filter: SearchFilter) => {
		setRecipes(getRecipes(filter))
	}

	return (
		<div className="flex gap-2 h-full">
			<Search search={onSearch}></Search>
			<div className="border flex-1 h-full grid grid-cols-3 overflow-scroll gap-2">
				{recipes.map((recipe) => {
					return <RecipeCard key={recipe.id} title={recipe.title}></RecipeCard>
				})}
			</div>
		</div>
	)
}

export default Browse
