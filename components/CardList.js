import LinkCard from './LinkCard';

const CardList = ({ robots }) => {
	return (
		<div>
			{
				robots.map((robot, i) => (
						<LinkCard
							key={i}
							id={robot.id}
							name={robot.name}
							email={robot.email}
						/>
				))
			}
		</div>
	);
}

export default CardList;