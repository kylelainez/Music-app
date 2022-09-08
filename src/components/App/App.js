import './App.scss';
//Adding Components
import Player from '../Player/Player';
import Song from '../Song/Song';

function App() {
	return (
		<div className='App'>
			<Song />
			<Player />
		</div>
	);
}

export default App;
