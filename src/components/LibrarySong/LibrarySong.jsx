import React from 'react';

const LibrarySong = ({
	songs,
	song,
	setCurrentSong,
	audioRef,
	isPlaying,
	setSongs,
}) => {
	const songSelectHandler = () => {
		setCurrentSong(song);
		//Add Active State
		const newSongs = songs.map(newSong => {
			if (newSong.id === song.id) {
				return {
					...newSong,
					active: true,
				};
			} else {
				return {
					...newSong,
					active: false,
				};
			}
		});
		setSongs(newSongs);
		//Check if song is playing
		if (isPlaying) {
			const playPromise = audioRef.current.play();
			if (playPromise !== undefined) {
				playPromise.then(audio => audioRef.current.play());
			}
		}
	};

	return (
		<div
			onClick={songSelectHandler}
			className={`library-song ${song.active ? 'selected' : ''}`}
		>
			<img
				src={song.cover}
				alt={song.name}
			/>
			<div className='song-description'>
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;
