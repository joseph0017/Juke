import React, { useState, useRef } from 'react'
import DisplayTrack from './DisplayTrack'
import Controls from './Controls'
import ProgressBar from './ProgressBar'
import { tracks } from '../data/track'
import '../styles/index.css';

const Player = ({song, res, music}) => {
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(music[trackIndex]);

    console.log('the song is in the player component', song)
    console.log('looking for current track', currentTrack)

    //ref
    const audioRef = useRef()
    console.log(audioRef)

    const progressBarRef = useRef()

      const handleNext = () => {
        if (trackIndex >= music.length - 1) {
            setTrackIndex(0);
            setCurrentTrack(music[0]);
        } else {
            setTrackIndex((prev) => prev + 1);
            setCurrentTrack(music[trackIndex + 1]);
        }
    };
    return (
        <>
        <div className="audio-player">
            <div className="inner">Audio player content</div>

            <DisplayTrack 
            currentTrack = {currentTrack} 
            musics = {music}
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
            tracks = {music}
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
        </>
    )
}

export default Player
