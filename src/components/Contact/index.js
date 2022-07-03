import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
// import ExampleComponent from "react-rounded-image";
import MyPhoto from "../../assets/images/MyPhoto.jpeg"
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    const contactArray = 'Contact Me'.split('')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <>

            <div className='contactHeader'>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={contactArray}
                            idx={15}
                        />
                    </h1>

                    <div className="contact-page flex-direction">

                        <div className="contactDesc">
                            <p>I am interested in opportunities which are exciting and challenging - especially ambitious or large
                                projects.
                            </p><p>However, if you have other request or question, don't
                                hesitate to contact me using below form either.</p>
                        </div>



                        <div className="contactDetails">
                            <h2>Contact Details</h2>

                            <div>
                                <img src={MyPhoto}></img>
                            </div>

                            <p><span>Email</span> :<a href="mailto:pranavkapoor2k09@gmail.com?subject=SendMail&body=Description" rel="noreferrer" target="_blank">pranavkapoor2k09@gmail.com </a></p>
                            <p> <span>Phone</span> : +91 9003493221</p>
                            <p> <span>Linkedin</span> : <a href='https://www.linkedin.com/in/pranav-kapoor-08b2a619b/'> Connect with me on Linkedin</a></p>
                            <p> <span>Github</span> :<a href=' https://github.com/PranavKapoor28'>View My Github profile</a></p>
                            <br></br>

                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact
