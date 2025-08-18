import Card from '@/components/Card'
import LabeledInput from '@/components/LabeledInput'
import SearchBar from '@/components/SearchBar'

const Search = () => {
	return (
		<Card>
			<div className="card-body">
				<SearchBar placeholder="Search for recipes..." />

				<LabeledInput label="Ingredients" />
				<LabeledInput label="Excluding..." />
				<LabeledInput label="Max. Calories" type="number" />
				<LabeledInput label="Max. Time effort" type="number" />
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Search</button>
				</div>
			</div>
		</Card>
	)
}

export default Search
