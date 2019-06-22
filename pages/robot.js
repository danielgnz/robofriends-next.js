import fetch from 'isomorphic-unfetch';
import Card from '../components/RoboCard';
import Title from '../components/Title';
import PageStyle from '../components/PageStyle';
import Button from '../components/Button';
import Link from 'next/link';

function Robot({ robot }){
	return (
		<div style={{textAlign: 'center'}}>
			<Title desc="Robofriends" />
			<Card id={robot.id} name={robot.name} email={robot.email} />
			{
				/*
				Robofriends Title,
				New Card with avatar, name
				(More Info)
				Go Back Button
				*/
			}
			<h2 
				style={{color: '#9eebcf', textShadow:'2px 2px black'}}>
				{`
					Hi there! You can call me ${robot.username} :)
				`}
			</h2>
			<Link href='/'>
				<a><Button desc="< Go Back" /></a>
			</Link>
			<PageStyle />
		</div>
	);
}

Robot.getInitialProps = async function(context) {
	const { id } = context.query;
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const data = await res.json();
	console.log('Robot fetched.', data);
	return {
		robot: data
	}
}

export default Robot;