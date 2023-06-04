import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Redirect } from 'react-router-dom';

const Enter = () => {

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
    </div>
     );
}
 
export default Enter;