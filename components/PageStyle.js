const PageStyle = ()=> {
	return (
		<style jsx global>{`
			html, body {
				margin: 0;
				min-height: 100vh;
			}
			body {
				background: -webkit-linear-gradient(right, #071b52 0%, teal);
				background: -o-linear-gradient(right, #071b52 0%, teal);
				background: linear-gradient(to left, #071b52 0%, teal);
				font-family: apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
			}
		`}
		</style>
	);
};

export default PageStyle;