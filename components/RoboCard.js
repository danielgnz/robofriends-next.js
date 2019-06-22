const Card = ({name, id, email}) => (
	<div className='card'>
		<img alt='robots' src={`https://robohash.org/${id}`} />
		   <div>
		     <h2>{name}</h2>
		     <p>{email}</p>
		   </div>
		<style jsx>{`
			.card {
				text-align: center;
				background-color: #9eebcf;
				display: inline-block;
				margin: .5rem;
				padding: 1rem;
				box-shadow: 4px 4px 8px rgba(0,0,0,.2);
				border-width: .25rem;
				border-radius: .5rem;
			}
		`}</style>
	</div>
);

export default Card;