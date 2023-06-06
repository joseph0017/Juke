// module for player
import {useState, useEffect} from 'react'
import SpotifyPlayer from "react-spotify-web-playback"


const Player = ({ spotify_access_key, trackUri }) => {
    const [play, setPlay] = useState(false);

    useEffect(() => {
        setPlay(true)
    }, [trackUri])

    if (!spotify_access_key) {
        return null;
    }

    return (
        <SpotifyPlayer
        token={spotify_access_key}
        showSaveIcon
        callback={state => {
            if (!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
    />
    )
}

export default Player
