function App() {
	return (
		<div>
			<h1>hello</h1>
			{console.log('hi')}
			{console.log('add in local')}
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'))
