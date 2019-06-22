const Button = ({desc}) => (
	<div>
		<button>{desc}</button>
		<style jsx>{`
			button {
				padding: 1rem 3rem;
				background-color: #fff;
				border: 1px solid #000;
				text-transform: uppercase;
				color: #000;
				font-size: 1rem;
				font-weight: 600;
				transition: background-color .15s ease-in-out;
				cursor: pointer;
			}
			button:hover {
				background-color: #000;
				color: #fff;
			}
		`}</style>
	</div>
);

export default Button;