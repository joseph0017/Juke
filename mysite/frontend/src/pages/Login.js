import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    <section>
      <br />
      <br />
      <div className='w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800'>
        <div className='px-6 py-4'>
          <h3 className='mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200'>Welcome Back</h3>
          <p className='mt-1 text-center text-gray-500 dark:text-gray-400'>
            Login or create account
          </p>
          <form onSubmit={handleSubmit}>
            <div className='w-full mt-4'>
              <input
                className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-indigo-300'
                type='text'
                id='username'
                placeholder='Username'
                aria-label='Email Address' />
            </div>
            <div className='w-full mt-4'>
              <input
                className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-indigo-300'
                type='password'
                id='password'
                placeholder='Password'
                aria-label='Password' />
            </div>
            <div className='flex items-center justify-between mt-4'>
              <button className='px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50'>
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className='flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700'>
          <span className='text-sm text-gray-600 dark:text-gray-200'>Don't have an account?</span>
          <Link to='/register' className='mx-2 text-sm font-bold text-indigo-500 dark:text-indigo-400 hover:underline'> Register
          </Link>
        </div>
      </div>
    </section>
  );
};
export default LoginPage;
