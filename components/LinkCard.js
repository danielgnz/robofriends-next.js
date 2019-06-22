import Link from 'next/link';

const LinkCard = ({id, name, email}) => {
	return (
		<Link as={`/robot/${id}`} href={`/robot?id=${id}`}>
			<div className='card grow'>
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
						cursor: pointer;
					}
					.grow {
						backface-visibility: hidden;
						transform: translateZ(0);
						transition: transform .25s ease-out;
					}
					.grow:focus,
					.grow:hover {
						transform: scale(1.05);
					}
					.grow:active {
						transform: scale(.9);
					}
	      			`}
	      		</style>
	   		 </div>
	   		</Link>
	);
}

export default LinkCard;