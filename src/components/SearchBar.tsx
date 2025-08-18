type SearchBarProps = {
	placeholder: string
}

const SearchBar = ({ placeholder = 'Search...' }: SearchBarProps) => {
	return <input className="input" type="search" placeholder={placeholder} />
}

export default SearchBar
