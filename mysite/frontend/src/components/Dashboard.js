import {useState, useEffect} from 'react'
import Player from './Player'
import TrackSearchResult from './TrackSearchResult'
import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"


const Dashboard = ({spotify_access_key}) => {
    const spotifyApi = new SpotifyWebApi({
    clientId: "2fa8115f21824acb9bcc6e258e0c5ab0"})
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState()

    const chooseTrack = (track) => {
        setPlayingTrack(track)
        setSearch("")
    }

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!spotify_access_key) return
    
        let cancel = false
        spotifyApi.searchTracks(search).then(res => {
          if (cancel) return
          setSearchResults(
            res.body.tracks.items.map(track => {
              const smallestAlbumImage = track.album.images.reduce(
                (smallest, image) => {
                  if (image.height < smallest.height) return image
                  return smallest
                },
                track.album.images[0]
              )
    
              return {
                artist: track.artists[0].name,
                title: track.name,
                uri: track.uri,
                albumUrl: smallestAlbumImage.url,
              }
            })
          )
        })
    
        return () => (cancel = true)
      }, [search, spotify_access_key])
    


    return (
        <div>
            <div>
      <form
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div>
        {searchResults.map(track => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
      </div>
      <div>
        <Player spotify_access_key={spotify_access_key} trackUri={playingTrack?.uri} />
      </div>
    </div>
        </div>
    )
}

export default Dashboard


// import {useState, useEffect} from 'react'
// import axios from 'axios';
// import Player from './Player'
// import TrackSearchResult from './TrackSearchResult'


// const Dashboard = ({spotify_access_key}) => {
//     const [searchKey, setSearchKey] = useState("")
//     const [artists, setArtists] = useState([])
 
//     const searchForArtists = async (e) => {
//         e.preventDefault()
//         const {data} = await axios.get("https://api.spotify.com/v1/search", {
//             headers: {
//                 Authorization: `Bearer ${spotify_access_key}`
//             },
//             params: {
//                 q: searchKey,
//                 type: "artist"
//             }
//         })

//         setArtists(data.artists.items)
//         console.log(data)
//     }

//     const renderArtists = () => {
//         return artists.map(artist => (
//             <div key={artist.id}>
//                 {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
//                 {artist.name}
//             </div>
//         ))
//     }
//     return (
//         <div>
//             <form onSubmit={searchForArtists}>
//                 <input type="text" onChange={e => setSearchKey(e.target.value)}/>
//                 <button type={"submit"}>Search</button>
//             </form>
//             {renderArtists()}
//         </div>
//     )
// }

// export default Dashboard
