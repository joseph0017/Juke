import axios from 'axios';
import {useState} from 'react';
import Player from '../components/Player';
export default function Music() {
	const [term, setTerm] = useState(null);
	const [response, setResponse] = useState(null);
	const getSearchResults = async () => {
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
	};
	return (
		<div className="flex flex-col relative bg-background font-raleway items-center min-h-screen ">
			<h1 className="text-6xl text-primary font-bold mt-20">
				Music <span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Discover music using the Shazam API from RapidAPI Hub.
			</h2>
			<div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
				<input
					type="text"
					className="block w-1/3 border border-transparent rounded-md px-5 py-3 text-base text-background shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active"
					placeholder="Search for a song or an artist"
					onChange={e => setTerm(e.target.value)}
				/>
				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-md px-5 py-3 bg-active text-base font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
						onClick={() => getSearchResults()}
					>
						Search
					</button>
				</div>
			</div>
			{response && (
				<>
				<div className="mt-16 flex justify-end ">
					<h3 className="text-secondary text-2xl">Search Results</h3>
					<div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{response.map(song => (
							<div key={song.track.key} className="pt-6">
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
				<Player music = {response} />
				</>
			)}
			
		</div>
	);
}