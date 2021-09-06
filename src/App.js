import { useState } from 'react';
import InputScreen from './components/inputScreen';
import LoadingScreen from './components/loadingScreen';
import ResultsScreen from './components/resultsScreen';
import wordHunt from './functions/wordHunt';
import {solve, render, test} from './functions/24';

function App() {
	const [screen, setScreen] = useState(1);
	const [board, setBoard] = useState(null);
	const [results, setResults] = useState([]);

	const goHome = () => {
		setScreen(1);
	}

	const findWords = () => {
		setScreen(2);
		var flattened = [].concat(...board)
		console.log("~~ flattened")
		console.log(flattened)
		solve(flattened)

		wordHunt(board).then(result => {
			console.log("~~ board")
			console.log(board)
			setResults(result);
			setScreen(3);
		});
	}

	let screenToShow = null;
	if (screen === 1) screenToShow = <InputScreen size={2} setBoard={setBoard} findWords={findWords}/>
	if (screen === 2) screenToShow = <LoadingScreen/>
	if (screen === 3) screenToShow = <ResultsScreen board={board} results={results} goHome={goHome}/>

	return (
		<div className="App">
			{screenToShow}
		</div>
	);
}

export default App;