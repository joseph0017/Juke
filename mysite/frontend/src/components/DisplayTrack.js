import React from 'react'
import '../styles/index.css';


const DisplayTrack = ({currentTrack, audioRef, setDuration, progressBarRef, handleNext}) => {

    const onLoadedMetadata = () => {
        //console.log(audioRef.current.duration);
        const seconds  = audioRef.current.duration;
        setDuration(seconds)
        progressBarRef.current.max = seconds
    };

    console.log('where is the current track',currentTrack)

    return (
      <>  
        <div key = {currentTrack.track.key}>

            <audio
            src = {currentTrack.track.hub.actions[1].uri}
            ref = {audioRef} 
            onLoadedMetadata={onLoadedMetadata} 
            onEnded={handleNext}
            />
            
              <div className="audio-info">
              <div className="audio-image">
                <img 
                src = {currentTrack.track.images.coverart}
                alt = {currentTrack.track.title}
                />
              </div>
              <div className="text">
                <p className="title">{currentTrack.track.title}</p>
                <p>{currentTrack.track.subtitle}</p>
              </div>
            </div>     
        </div>

        </>
    )
}

export default DisplayTrack
