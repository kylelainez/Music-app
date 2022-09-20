import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlay,
	faAngleLeft,
	faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
	//State
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});
	//Ref
	const audioRef = useRef(null);
	//Event Handler
	const playSongHandler = () => {
		if (!isPlaying) {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		}
	};
	const timeUpdateHandler = event => {
		const currentTime = event.target.currentTime;
		const duration = event.target.duration;

		setSongInfo({
			...songInfo,
			currentTime,
			duration,
		});
	};
	const getTime = time => {
		return (
			Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
		);
	};
	const dragHandler = event => {
		audioRef.current.currentTime = event.target.value;
		setSongInfo({
			...songInfo,
			currentTime: event.target.value,
		});
	};

	return (
		<div className='player-container'>
			<div className='time-control'>
				<p>{getTime(songInfo.currentTime)}</p>
				<input
					type='range'
					min={0}
					max={songInfo.duration}
					value={songInfo.currentTime}
					onChange={dragHandler}
				></input>
				<p>{getTime(songInfo.duration)}</p>
			</div>
			<div className='play-control'>
				<FontAwesomeIcon
					className='skip-back'
					size='2x'
					icon={faAngleLeft}
				/>
				<FontAwesomeIcon
					className='play'
					size='2x'
					icon={faPlay}
					onClick={playSongHandler}
				/>
				<FontAwesomeIcon
					className='skip-forward'
					size='2x'
					icon={faAngleRight}
				/>
			</div>
			<audio
				ref={audioRef}
				src={currentSong.audio}
				onTimeUpdate={timeUpdateHandler}
				onLoadedMetadata={timeUpdateHandler}
			></audio>
		</div>
	);
};

export default Player;
