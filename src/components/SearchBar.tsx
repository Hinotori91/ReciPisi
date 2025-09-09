import { ChangeEvent } from 'react'

type SearchBarProps = {
	placeholder: string
	value?: string
	onChange: (searchString: string) => void
}

const SearchBar = ({
	placeholder = 'Search...',
	value = '',
	onChange,
}: SearchBarProps) => {
	const handleSearchBarChange = (e: ChangeEvent<HTMLInputElement>) => {
		const v = e.target.value
		console.log(`search bar change handler value: ${v}`)
		onChange(v)
	}

	return (
		<input
			className="input"
			type="search"
			placeholder={placeholder}
			value={value}
			onChange={handleSearchBarChange}
		/>
	)
}

export default SearchBar
