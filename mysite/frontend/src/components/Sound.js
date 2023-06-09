import React from 'react'

const Sound = () => {
    function playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
      }
    
        return (
          <div>
            <button onClick={playAudio}>
              <span>Play Audio</span>
            </button>
            <audio className="audio-element">
              <source src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/d0/0f/8d/d00f8d18-1666-9b80-a3c1-efd2aa93a20f/mzaf_8898984388967624975.plus.aac.ep.m4a"></source>
            </audio>
          </div>
        )
}

export default Sound
