import { useState } from 'react';
import InputScreen from './components/inputScreen';
import LoadingScreen from './components/loadingScreen';
import ResultsScreen from './components/resultsScreen';
import wordHunt from './functions/wordHunt';

function App() {
	const [screen, setScreen] = useState(1);
	const [board, setBoard] = useState(null);
	const [results, setResults] = useState([]);

	const findWords = () => {
		setScreen(2);
		wordHunt(board).then(result => {
			setResults(result);
			setScreen(3);
		});
	}

	let screenToShow = null;
	if (screen === 1) screenToShow = <InputScreen size={4} setBoard={setBoard} findWords={findWords}/>
	if (screen === 2) screenToShow = <LoadingScreen/>
	if (screen === 3) screenToShow = <ResultsScreen board={board} results={results}/>

	return (
		<div className="App">
			{screenToShow}
		</div>
	);
}

export default App;