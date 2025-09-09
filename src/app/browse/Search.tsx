'use client'

import Card from '@/components/Card'
import LabeledInput from '@/components/LabeledInput'
import SearchBar from '@/components/SearchBar'
import { SearchFilter } from './data'
import { ChangeEvent, useState } from 'react'

type SearchProps = {
	search: (f: SearchFilter) => Promise<void>
}

const Search = ({ search }: SearchProps) => {
	const [searchString, setSearchString] = useState<string>()
	const [ingredients, setIngredients] = useState<string>()
	const [excluding, setExcluding] = useState<string>()
	const [maxCal, setMaxCal] = useState<number | undefined>()
	const [maxTime, setMaxTime] = useState<number | undefined>()

	const onSearch = () => {
		search({
			searchTag: searchString,
			ingredients: [],
			ingredientsExcluded: [],
			maxCalories: maxCal,
			maxTime: maxTime,
		})
	}

	const handleIngredientsChange = (e: ChangeEvent<HTMLInputElement>) => {
		const v = e.currentTarget.value
		console.log(`new ingredients: ${v}`)
		setIngredients(v)
	}

	const handleIngredientsExcludeChange = (e: ChangeEvent<HTMLInputElement>) => {
		const v = e.currentTarget.value
		console.log(`new ingredients exclude: ${v}`)
		setExcluding(v)
	}

	const handleMaxCalChange = (e: ChangeEvent<HTMLInputElement>) => {
		const v = e.currentTarget.valueAsNumber
		console.log(`new max cal: ${v}`)
		setMaxCal(v)
	}

	const handleMaxTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
		const v = e.currentTarget.valueAsNumber
		console.log(`new max time: ${v}`)
		setMaxTime(v)
	}

	return (
		<Card>
			<div className="card-body">
				<SearchBar
					placeholder="Search for recipes..."
					value={searchString}
					onChange={setSearchString}
				/>
				<LabeledInput
					label="Ingredients"
					value={ingredients}
					onChange={handleIngredientsChange}
				/>
				<LabeledInput
					label="Excluding..."
					value={excluding}
					onChange={handleIngredientsExcludeChange}
				/>
				<LabeledInput
					label="Max. Calories"
					type="number"
					value={maxCal}
					onChange={handleMaxCalChange}
				/>
				<LabeledInput
					label="Max. Time effort"
					type="number"
					value={maxTime}
					onChange={handleMaxTimeChange}
				/>
				<div className="card-actions justify-end">
					<button className="btn btn-primary" onClick={onSearch}>
						Search
					</button>
				</div>
			</div>
		</Card>
	)
}

export default Search
