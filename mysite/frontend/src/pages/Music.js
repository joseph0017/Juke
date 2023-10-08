import axios from 'axios';
import {useState} from 'react';
import Player from '../components/Player';
export default function Music() {
	const [term, setTerm] = useState(null);
	const [response, setResponse] = useState(null);
	const [selectedTrack, setSelectedTrack] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const getSearchResults = async () => {
		setIsLoading(true);
		try {
			const res = await axios({
                "method":"GET",
                "url":"https://shazam.p.rapidapi.com/search",
                "headers":{
                  "x-rapidapi-host":"shazam.p.rapidapi.com",
                  "x-rapidapi-key":"035964f5bfmsh7a510d72701c232p115999jsn67e5a921a4e5"
                },"params":{
                  "term": term,
                  "locale":"en-US",
                  "offset":"0",
                  "limit":"5"
                }
              })
			const {data} = res;
			setResponse(data.tracks.hits);
            console.log(data)
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};
	return (
		<div className="flex flex-col relative bg-background font-raleway items-center min-h-screen ">
			<div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
				<input
					type="text"
					className="block w-screen border-2 border-fuchsia-100 rounded-md px-5 py-3 text-base text-background shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active md:w-2/3"
					placeholder="Search for a song or an artist"
					onChange={e => setTerm(e.target.value)}
				/>
				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="w-full border-2 border-fuchsia-100 px-5 py-2 mt- text-sm tracking-wider text-black uppercase transition-colors duration-300 transform bg-fuchsia-300 rounded-full lg:w-auto hover:bg-fuchsia-100 focus:outline-none focus:bg-fuchsia-100"
						onClick={() => getSearchResults()}
					>
						Search
					</button>
				</div>
			</div>
			{ isLoading ? (
				<svg class="animate-spin h-5 w-5 mr-3 mt-20 bg-fuchsia-600" viewBox="0 0 24 24"></svg>
			) : response && (
				<>
				<div className="mt-16 grid ">
					<h3 className="text-secondary text-2xl flex justify-center">Found some songs for you &#128578;</h3>
					<div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{response.map(song => (
							<div key={song.track.key} className="pt-6" onClick={() => setSelectedTrack(song)}>
								<div className="flow-root bg-light rounded-lg px-4 pb-8">
									<div className="-mt-6">
										<div className="flex items-center justify-center">
											<span className="p-3 rounded-md shadow-lg">
												<img
													src={
														song.track.images
															.coverart
													}
													width={140}
													height={140}
													alt={song.track.title}
												/>
											</span>
										</div>
										<div className="text-center justify-center items-center">
											<h3 className="mt-2 text-lg text-center font-medium text-primary tracking-tight">
												{song.track.title}
											</h3>
											<span className="mt-2 mb-4 max-w-xs text-sm text-secondary block">
												{song.track.subtitle}
											</span>
										</div>
									</div>
								</div>
								
							</div>
						))}
					</div>
					
				</div>
				<Player music = {response} selectedTrack= {selectedTrack} />
				</>
			)}
			
		</div>
	);
}