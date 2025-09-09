'use client'

import Card from '@/components/Card'
import LabeledInput from '@/components/LabeledInput'
import SearchBar from '@/components/SearchBar'
import { SearchFilter } from './data'
import { ChangeEvent } from 'react'

type SearchProps = {
	search: (f: SearchFilter) => Promise<void>
}

const Search = ({ search }: SearchProps) => {
	const onSearch = () => {
		search({
			searchTag: 'test',
		})
	}

	const setMaxCal = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(`new max Cal: ${e.currentTarget.valueAsNumber}`)
	}

	return (
		<Card>
			<div className="card-body">
				<SearchBar placeholder="Search for recipes..." />
				<LabeledInput label="Ingredients" />
				<LabeledInput label="Excluding..." />
				<LabeledInput
					label="Max. Calories"
					type="number"
					onChange={setMaxCal}
				/>
				<LabeledInput label="Max. Time effort" type="number" />
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
