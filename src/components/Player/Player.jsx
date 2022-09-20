import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlay,
	faAngleLeft,
	faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong }) => {
	//Ref
	const audioRef = useRef(null);
	//Event Handler
	const playSongHandler = () => {
		audioRef.current.play();
	};

	return (
		<div className='player-container'>
			<div className='time-control'>
				<p>Start Time</p>
				<input type='range'></input>
				<p>End Time</p>
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
			></audio>
		</div>
	);
};

export default Player;
