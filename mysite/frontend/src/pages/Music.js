import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Dashboard from '../components/Dashboard';

const Music = () => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const spotify_access_key = params.get('spotify_access_token')

    console.log('spotify token na', spotify_access_key)

    let {carry, user, logoutUserSafe} = useContext(AuthContext)
    //const [status, setStatus] = useState('');


    let status = carry
    return ( 
        <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
        <div className=" text-gray-800 px-4 py-2 rounded-md mr-3">
            {user && <p>{user.username + "'s"}</p>}
          </div>
          <div className="text-gray-500">{status}</div>
        </div>
        <div className="mt-3 flex">
          <button className="mt-4 mr-4 bg-purple-700 rounded-md hover:bg-purple-600 text-white px-4 py-2 ">Check expired</button>
          <button 
          onClick={logoutUserSafe}
          className="mt-4 bg-purple-700 rounded-md hover:bg-purple-600 text-white px-4 py-2 ">Logout</button>
        </div>
        
      </div>
      <Dashboard spotify_access_key = {spotify_access_key} />
    </div>
     );
}
 
export default Music;