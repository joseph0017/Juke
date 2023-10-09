import twist from '../assets/twist-single-2.svg';
import graph from '../assets/graph.png';
import wave from '../assets/wave.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
    {/* <img src={graph} alt='graphy' className='absolute h-full transform -rotate-90 ml-128 -mt-24 flex' /> */}
    <img src={wave} alt='graphy' className='absolute h-full transform -rotate-0 mt-24 flex' />
    <div className='container px-6 py-16 mx-auto relative'>
      
      <div className='items-center lg:flex'>
        <div className='w-full lg:w-1/2'>
          <div className='lg:max-w-lg'>
            <h1 className='text-6xl font-semibold text-gray-800 dark:text-white lg:text-7xl'>DISCOVER A NEW WORLD <br /><span className='text-fuchsia-500 '>Juke</span></h1>
            <br />
            <p className='mt-3 leading-9 md:text-2xl md:tracking-wide'>
              Unleash the power of our state-of-the-art Recommendation System to explore music tailored to your taste, creating a personalized musical journey
            </p>
            <Link to='/music'>
            <button className='border-2 border-fuchsia-100 mt-10 px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-fuchsia-500 rounded-full hover:bg-fuchsia-400 focus:outline-none focus:ring focus:ring-fuchsia-300 focus:ring-opacity-50'>
              Listen Now
            </button>
            </Link>
          </div>
        </div>
        <div className='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
          <img src={twist} alt="twine" className='w-3/6' />
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
