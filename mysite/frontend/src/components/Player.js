import React, { useState, useRef } from 'react'
import DisplayTrack from './DisplayTrack'
import Controls from './Controls'
import ProgressBar from './ProgressBar'
import { tracks } from '../data/track'
import '../styles/index.css';

const Player = () => {
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);

    //ref
    const audioRef = useRef()
    console.log(audioRef)

    const progressBarRef = useRef()

      const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
            setTrackIndex(0);
            setCurrentTrack(tracks[0]);
        } else {
            setTrackIndex((prev) => prev + 1);
            setCurrentTrack(tracks[trackIndex + 1]);
        }
    };
    return (
        <div className="audio-player">
            <div className="inner">Audio player content</div>

            <DisplayTrack 
            currentTrack = {currentTrack} 
            audioRef = {audioRef} 
            setDuration = {setDuration}
            progressBarRef = {progressBarRef}
            handleNext = {handleNext}
            />

            <Controls 
            audioRef = {audioRef} 
            progressBarRef = {progressBarRef}  
            duration = {duration}
            setTimeProgress = {setTimeProgress}
            tracks = {tracks}
            trackIndex = {trackIndex}
            setTrackIndex = {setTrackIndex}
            setCurrentTrack = {setCurrentTrack}
            handleNext = {handleNext}
            />

            <ProgressBar 
            progressBarRef = {progressBarRef}  
            audioRef = {audioRef}
            timeProgress = {timeProgress}
            duration = {duration}
            />
        </div>
    )
}

export default Player
