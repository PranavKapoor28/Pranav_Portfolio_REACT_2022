import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {
    faAndroid,
    faCss3,
    faGit,
    faHtml5,
    faJava,
    faNodeJs,
    faReact
} from '@fortawesome/free-brands-svg-icons'
import faFlutter from '../../assets/images/flutter-logo.png'
import faRest from '../../assets/images/rest.png'
import faAlexa from '../../assets/images/AlexaSkill.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const skillsArray = 'Skills'.split('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className="container skills-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={skillsArray}
                            idx={15}
                        />
                        <br />
                    </h1>
                    <p>
                        I love to keep a variety of tools in my tech stack. I also make sure
                        to be pro at using one tool before moving on to the next. I keep
                        myself up to date with the latest technologies around.
                    </p>
                    <p>
                        Looking for a role in a company with the opportunity to work with
                        the latest technologies on challenging and diverse projects.
                    </p>

                    <h2> Tech Skills : <ul>
                        <li>Android / Native Development</li>
                        <li>ReactJS</li>
                        <li>RESTApi</li>
                        <li>NodeJS</li>
                        <li>GIT</li>
                        <li>JAVA</li>
                        <li>Flutter</li>
                        <li>Alexa Skills</li>
                        <li>MongoDB</li>
                        <li>SQL</li>
                        <li>Sass</li>


                    </ul></h2>
                </div>
                <div className="SkillsContainer1">

                    <div className='logos'>
                        <div className="face1">
                            <FontAwesomeIcon icon={faAndroid} color="#4B8BBE" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>

                        <div className="face10">
                            <img src={faRest} alt="REST" color="#EC4D28" />
                        </div>
                    </div>
                </div>

                <div className="SkillsContainer2">

                    <div className='logos'>

                        <div className="face5">
                            <FontAwesomeIcon icon={faNodeJs} color="#4B8BBE" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGit} color="#EC4D28" />
                        </div>
                        <div className="face7">
                            <FontAwesomeIcon icon={faJava} color="#EC4D28" />
                        </div>
                        <div className="face8">
                            <img src={faFlutter} alt="flutter" color="#EC4D28" />
                        </div>
                        <div className="face9">
                            <img src={faAlexa} alt="alexa" color="#EC4D28" />
                        </div>
                    </div>
                </div>
                {/* <div className="tagcloud-wrap">
                    <WordCloud />
                </div> */}
            </div>

            <Loader type="pacman" />
        </>
    )
}

export default Skills
