import React from 'react'
import '../styles/index.css';
import { BsMusicNoteBeamed } from 'react-icons/bs';

const DisplayTrack = ({currentTrack, audioRef, setDuration, progressBarRef, handleNext, musics}) => {

    const onLoadedMetadata = () => {
        //console.log(audioRef.current.duration);
        const seconds  = audioRef.current.duration;
        setDuration(seconds)
        progressBarRef.current.max = seconds
    };

    console.log('where is the current track',currentTrack)

    return (
      <>
        {musics.map((music) => (   
        <div key = {music.track.key}>
          {music.track.hub.actions.map((sounds) => (
            <audio key = {sounds.uri}
            src = {sounds.uri}
            ref = {audioRef} 
            onLoadedMetadata={onLoadedMetadata} 
            onEnded={handleNext}
            />
          ))}
            
              <div className="audio-info" key = {music.track.key}>
              <div className="audio-image">
                <img 
                src = {music.track.images.coverart}
                alt = {music.track.title}
                />
              </div>
              <div className="text">
                <p className="title">{music.track.title}</p>
                <p>{music.track.subtitle}</p>
              </div>
            </div>     
        </div>
        ))} 
        </>
    )
}

export default DisplayTrack
