import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'

const Education = () => {

    const educationArray = 'Education'.split('')

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
                        contentStyle={{ background: 'rgb(195,165,9)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2022 -- 2024"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>

                        <h1 className="vertical-timeline-element-title">Masters Of Science (Software Engineering)</h1>
                        <br></br><h3 className="vertical-timeline-element-Insititute">Northeastern University</h3>
                        <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
                        <br></br>


                    </VerticalTimelineElement >

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2018 - 2022"
                        iconStyle={{ background: 'rgb(195,165,9)', color: '#fff' }}

                    >
                        <h1 className="vertical-timeline-element-title">Bachelors Of Technology (Computer Science)</h1>
                        <h3 className="vertical-timeline-element-Insititute">Vellore Institute of Technology</h3>
                        <h4 className="vertical-timeline-element-subtitle">Vellore, India</h4>
                        <br></br>

                        <h3 className="vertical-timeline-element-cgpa">CGPA -- 8.81/10.00</h3>

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



export default Education;