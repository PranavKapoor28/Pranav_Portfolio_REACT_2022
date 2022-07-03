import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import 'bootstrap/dist/css/bootstrap.css';

const Projects = () => {

    const educationArray = 'My Projects'.split('')

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    return (

        <>
            <div className='scrollable'>

                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={educationArray} idx={15}>
                        </AnimatedLetters>
                    </h1>
                    <div className="flex-cont-1 flex-direction">

                        <div className="flex-child-One">
                            <h2>My Portfolio Website (React JS)</h2>
                            <li>
                                My portfolio website which you are seeing right now is developed using ReactJS and Sass.
                            </li>
                            <li>
                                The website is hosted on Netlify domain and consist of my experiences, education history, and my Portfolio.
                            </li>

                            <br></br>
                            <button>View Code</button>

                        </div>

                        <div className="flex-child-Two">
                            <h2>Developers Connect ( A social Media platform for tech geeks and enthusiasts)</h2>
                            <li>This is a social media platform developed using MERN stack. Users can add their posts, create their own profile and also visit each other's profile using this platform.
                            </li><li>Tech stack Used = (Mongoose, ExpressJS, NodeJS, ReactJS, fontAwesome, Postman - Framework(For APIs))
                            </li>
                            <br></br>
                            <button>View Demo</button>
                            <button>View Code</button>
                        </div>


                        <div className="flex-child-Three">
                            <h2>Therapy Chatbot (App to help with depression, anxiety and suicidal tendencies)</h2>
                            <li>Therapy chatbot is an app developed to help people with depression and anxiety issues by parsing through the user responses using NLP integrated DialogFlow assistant.
                            </li>
                            <li>The app is also integrated with Alexa Skills which allows users to chat with the bot easily and in a natural way.
                            </li>

                            <button>View Demo</button>
                            <button>View Code</button>
                        </div>
                    </div>

                    <div className="flex-cont-2 flex-direction">

                        <div className="flex-child-One">
                            <h2>Coivd AllInOne</h2>
                            <li>
                                Covid AllInOne app is developed using Java and Android Studio, and tracks covid-19 cases throughout the world by using covid-19 APIs and REST.
                            </li>
                            <li>
                                The App can also track latest news related to Covid-19 using RSS feeds from News media such as Times of India, NDTV etc,.
                            </li>
                            <button>View Code</button>

                        </div>

                        <div className="flex-child-Two">
                            <h2>Developers Connect ( A social Media platform for tech geeks and enthusiasts)</h2>
                            <li>This is a social media platform developed using MERN stack. Users can add their posts, create their own profile and also visit each other's profile using this platform.
                            </li><li>Tech stack Used = (Mongoose, ExpressJS, NodeJS, ReactJS, fontAwesome, Postman - Framework(For APIs))
                            </li>
                            <br></br>
                            <button>View Demo</button>
                            <button>View Code</button>
                        </div>


                        <div className="flex-child-Three">
                            <h2>Therapy Chatbot (App to help with depression, anxiety and suicidal tendencies)</h2>
                            <li>Therapy chatbot is an app developed to help people with depression and anxiety issues by parsing through the user responses using NLP integrated DialogFlow assistant.
                            </li>
                            <li>The app is also integrated with Alexa Skills which allows users to chat with the bot easily and in a natural way.
                            </li>
                            <button>View Demo</button>
                            <button>View Code</button>
                        </div>
                    </div>


                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
};



export default Projects;