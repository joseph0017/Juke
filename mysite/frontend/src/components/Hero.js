import robot from "../assets/bkk.jpeg"
import { Link } from 'react-router-dom';

const Hero = () => {
    return ( 
        <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg">
                    <h1 class="text-6xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Best place to listen music <br /><span class="text-blue-500 ">Juke</span></h1>
                    
                    <p class="mt-3 text-gray-600 dark:text-gray-400">
                    Unleash the power of our state-of-the-art 
                        Recommendation System to explore 
                        music tailored to your taste, creating a 
                        personalized musical journey
                    </p>
                    <Link to="/music">
                    <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Listen Now</button>
                    </Link>
                </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img class="lg:max-w-3xl" src={robot} alt="Machine" />
            </div>
        </div>
    </div>
     );
}
 
export default Hero;