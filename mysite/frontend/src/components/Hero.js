import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const Hero = () => {

  const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(139, 92, 246, 1)"
  },
}

  return (
    <>
    <div className='container px-6 py-16 mx-auto relative'>
      
      <div className='items-center lg:flex'>
        <div className='w-full lg:w-1/2'>
          <div className='lg:max-w-lg'>
            <h1 className='text-4xl font-semibold text-white dark:text-white md:text-7xl'>DISCOVER A NEW WORLD <br /><span className='text-violet-500 '>Juke</span></h1>
            <br />
            <p className='mt-3 text-white leading-9 md:text-2xl md:tracking-wide'>
              Unleash the power of our state-of-the-art Recommendation System to explore music tailored to your taste, creating a personalized musical journey
            </p>
            <Link to='/music'>
            <button className='border-2 border-indigo-900 mt-10 px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-700 rounded-full hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50'>
              Listen Now
            </button>
            </Link>
          </div>
        </div>
        <div className='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
          <motion.svg className='w-5/6 md:w-3/6 stroke-2 stroke-indigo-800' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 340 340' fill='#18134F'>
            <motion.path d='M319.1 73.7c-54.8-17.1-120-33.8-162 16-44.7-48.1-104-5.7-140 34.7-7.2 8 6 16.8 12.2 9.9 26.2-30.9 85-77.5 117.7-30.8-26.4 43.1-55.5 105.7-36.5 156.5 5.6 12.1 16.1 23 28 23.4 30.3-.3 40-51.5 44-74.8 4.2-34.5-.1-73.4-15.6-103.6 36.7-50.2 96.3-31.2 146.5-16.3 9.7 3.6 17.4-10.8 5.7-15ZM165.1 208c-.7 9.7-17 76.6-32.7 54.7-4.8-5.9-7.4-10.5-9.6-23.5-5-41.2 15-84.4 33.1-117.4 11.3 29.4 12.3 54 9.2 86.1Z'
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
                          default: { duration: 2, ease: "easeInOut" },
                          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
            ></motion.path></motion.svg>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
