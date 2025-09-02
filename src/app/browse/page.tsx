import RecipeCard from './RecipeCard'
import Search from './Search'
import _ from 'lodash'

const Browse = () => {
	return (
		<div className="flex gap-2 h-full">
			<Search></Search>
			<div className="border flex-1 h-full grid grid-cols-3 overflow-scroll gap-2">
				{_.times(20, (i) => {
					return <RecipeCard key={i} title={`Recipe ${i}`}></RecipeCard>
				})}
			</div>
		</div>
	)
}

export default Browse
