import './App.scss';
//Adding Components
import Player from '../Player/Player';
import Song from '../Song/Song';
import Library from '../Library/Library';
import Nav from '../Nav/Nav';
//Import Util
import data from '../../util';
import { useState, useRef } from 'react';

function App() {
	//Ref
	const audioRef = useRef(null);
	//State
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});
	const [libraryStatus, setLibraryStatus] = useState(false);
	const timeUpdateHandler = event => {
		const currentTime = event.target.currentTime;
		const duration = event.target.duration;

		setSongInfo({
			...songInfo,
			currentTime,
			duration,
		});
	};

	return (
		<div className='App'>
			<Nav
				libraryStatus={libraryStatus}
				setLibraryStatus={setLibraryStatus}
			/>
			<Song currentSong={currentSong} />
			<Player
				currentSong={currentSong}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				audioRef={audioRef}
				songInfo={songInfo}
				setSongInfo={setSongInfo}
				timeUpdateHandler={timeUpdateHandler}
			/>
			<Library
				songs={songs}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
				isPlaying={isPlaying}
				setSongs={setSongs}
				libraryStatus={libraryStatus}
			/>
		</div>
	);
}

export default App;
