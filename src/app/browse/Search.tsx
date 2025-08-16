import Button from '@/components/Button'
import Card from '@/components/Card'
import LabeledInput from '@/components/LabeledInput'
import SearchBar from '@/components/SearchBar'

const Search = () => {
	return (
		<Card className="flex flex-col gap-2 p-2">
			<SearchBar placeholder="Search for recipes..." />
			<div className="grid grid-cols-[1fr_300px] gap-2">
				<LabeledInput label="Ingredients" />
				<LabeledInput label="Excluding..." />
				<LabeledInput label="Max. Calories" type="number" />
				<LabeledInput label="Max. Time effort" type="number" />
				<LabeledInput label="Favorites only?" type="checkbox" />
			</div>
			<div className="flex justify-end">
				<Button label="Search" isPrimary />
			</div>
		</Card>
	)
}

export default Search
