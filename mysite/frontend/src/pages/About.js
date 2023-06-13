import { Link } from 'react-router-dom';


const About = () => {
    return ( 
        <section className="bg-background dark:bg-gray-900">
    
        <div className="container px-6 py-8 mx-auto">
            <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Team</h2>
            <div className="font-sans font-family: system-ui font-normal tracking-wide leading-7 text-gray-700 dark:text-gray-200">
            Juke is an innovative AI-powered music recommendation system that revolutionizes the way you discover and enjoy music. 
                        It is the brainchild of a talented team of developers, including Joseph, Annah, and Nnamaka, who are passionate about music and artificial intelligence.
                        Driven by their expertise and love for music,<b>  Joseph, Annah, and Nnamaka</b> came together to create Juke, a cutting-edge 
                        platform that brings personalized music recommendations to music enthusiasts worldwide. Leveraging state-of-the-art 
                        language models (LLM), Juke analyzes song titles and genres to provide accurate and tailored recommendations.
                        With Juke, you can effortlessly explore a world of musical possibilities based on your favorite genres and 
                        song titles. The intelligent algorithms of Juke, crafted by Joseph, Annah, and Nnamaka, curate a 
                        custom-tailored selection just for you, expanding your musical horizons and introducing you to new tracks, artists, 
                        and genres that resonate with your preferences.
                        
                        Beyond its exceptional recommendation capabilities, Juke offers a seamless and intuitive interface for a 
                        delightful music playback experience. Enjoy high-quality streaming without any interruptions, immersing yourself
                        in the music carefully selected by Joseph, Annah, and Nnamaka.
                        
                        Embrace the power of AI and let Juke, developed by this talented team, take your musical journey to new heights. 
                        Get ready to unlock a world of musical wonders with Juke!
            </div>
            <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div className="w-full max-w-xs text-center">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar" />
    
                    <div className="mt-2">
                    <a href="https://github.com/AnnahNokutheza" className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:underline hover:underline-offset-8 mt-4">Annah Nokutheza</a>
                        <div className="mt-1 font-medium text-gray-600 dark:text-gray-300">Frontend Engineer</div>
                    </div>
                </div>
    
                <div className="w-full max-w-xs text-center">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />
    
                    <div className="mt-2">
                    <a href="https://github.com/joseph0017" className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:underline hover:underline-offset-8 mt-4">Joseph Ogiku</a>
                        <div className="mt-1 font-medium text-gray-600 dark:text-gray-300">Fullstack Developer</div>
                    </div>
                </div>
                <div className="w-full max-w-xs text-center">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar" />
    
                    <div className="mt-2">
                    <a href="https://github.com/Nnamaka" className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:underline hover:underline-offset-8 mt-4">Dike Nnamaka</a>
                        <div className="mt-1 font-medium text-gray-600 dark:text-gray-300">Machine Learning Engineer</div>
                    </div>
                </div>
    
            </div>
        </div>
        <div className="flex justify-center">
                <span className="mb-4 font-mono text-sm ">&copy; {new Date().getFullYear()} JUKE. ALX</span>
            </div>
    </section>
     );
}
 
export default About;