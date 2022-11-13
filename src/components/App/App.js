import './App.scss';
//Adding Components
import Player from '../Player/Player';
import Song from '../Song/Song';
import Library from '../Library/Library';
//Import Util
import data from '../../util';
import { useState } from 'react';

function App() {
	//State
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	return (
		<div className='App'>
			<Song currentSong={currentSong} />
			<Player
				currentSong={currentSong}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
			/>
			<Library
				songs={songs}
				setCurrentSong={setCurrentSong}
			/>
		</div>
	);
}

export default App;
