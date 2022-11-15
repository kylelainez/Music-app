import React from 'react';
import LibrarySong from '../LibrarySong/LibrarySong';

const Library = ({
	songs,
	setCurrentSong,
	audioRef,
	isPlaying,
	setSongs,
	libraryStatus,
}) => {
	return (
		<div className={`library ${libraryStatus ? 'activeLibrary' : ''}`}>
			<h2>Library</h2>
			<div className='library-songs'>
				{songs.map(song => {
					return (
						<LibrarySong
							songs={songs}
							song={song}
							setCurrentSong={setCurrentSong}
							key={song.id}
							audioRef={audioRef}
							isPlaying={isPlaying}
							setSongs={setSongs}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Library;
