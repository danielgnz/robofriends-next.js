
const SearchBox = ({ searchChange }) => {
	return (
		<div style={{ padding: '.5rem' }}>
			<input 
				className='searchInput'
				type='search'
				placeholder='search robots'
				onChange={searchChange}
				/>
			<style jsx>{`
				.searchInput {
					padding: 1rem;
					background-color: #cdecff;
					border: solid 1px #19a974;
					outline-offset: -2px;
					overflow: visible;
					line-height: 1.15;
					margin: 0;
				}
			`}</style>
		</div>
	);
}

export default SearchBox;