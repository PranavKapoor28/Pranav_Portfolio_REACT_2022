import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import IITlogo from '../../assets/images/IIT.png'
import Loader from 'react-loaders'

const Experience = () => {

    const educationArray = 'Experience'.split('')

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
                </div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="Aug 2021 - Jan 2022"
                        iconStyle={{ background: 'rgb(195,165,9)', color: '#fff' }}

                    >
                        <h1 className="vertical-timeline-element-title">Student Research Associate</h1>
                        <h2 className="vertical-timeline-element-company">Indian Institute of Technology</h2>
                        <h4 className="vertical-timeline-element-subtitle">Kanpur, India</h4>
                        <p>
                            1. Responsible for Research on the latest Blockchain currencies and practices to protect user’s resources and data.
                            <br></br>   2. Developing a full-stack website for creating a dashboard to track a user's crypto transactions and the nature of the transactions through graphs and widgets.
                        </p>
                    </VerticalTimelineElement >

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(195,165,9)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="Sep 2020 - Nov 2020"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>

                        <h1 className="vertical-timeline-element-title">Software Engineer Intern</h1>
                        <h2 className="vertical-timeline-element-company">BusinessTechLabs</h2>
                        <h4 className="vertical-timeline-element-subtitle">Bangalore, India</h4>
                        <p>1. Developed an expense tracker app using Firebase database and flutter to keep track record of all the expenses made by the user and calculate the amount due to be paid to people.
                            <br></br>2 .Prepared and submitted reports and other documentation to assist development team members.</p>
                    </VerticalTimelineElement >

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="Jun 2020 - Aug 2020"
                        iconStyle={{ background: 'rgb(195,165,9)', color: '#fff' }}

                    >
                        <h1 className="vertical-timeline-element-title">Flutter Application Developer Intern</h1>
                        <h2 className="vertical-timeline-element-company">Hummsafar</h2>
                        <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>

                        <p>1. Developed a Tutor hiring Application on flutter along with a VISA counselling feature in the app. Fetched data using REST API's and Android Firebase.
                            <br></br> 2. Quickly learned new skills and applied them to daily tasks, improving efficiency and productivity.</p>
                    </VerticalTimelineElement >

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(195,165,9)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="Jun 2020 - Jul 2020"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                    >
                        <h1 className="vertical-timeline-element-title">Android Developer Intern</h1>
                        <h2 className="vertical-timeline-element-company">Eatler India Private Limited</h2>
                        <h4 className="vertical-timeline-element-subtitle">Bangalore, India</h4>

                        <p>1. Developed the company's Android app that lets you order food while tracking the live preparation process of food using cameras and scanners.
                            <br></br>
                            2. Collaborated with the web team to integrate the app and the website and did data analysis and configuration using postman and Django framework.</p>

                    </VerticalTimelineElement >

                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    // icon={<StarIcon />}
                    />
                </VerticalTimeline >

            </div>
            <Loader type="pacman" />

        </>
    )
};



export default Experience;