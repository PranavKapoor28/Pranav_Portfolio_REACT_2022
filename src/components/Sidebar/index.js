import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/flag.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase, faGraduationCap, faBriefcase, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
        <br></br>
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="lightblue" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="lightblue" />
        </NavLink>
        <NavLink activeclassname="active" className="portfolio-link" to="/skills">
          <FontAwesomeIcon icon={faSuitcase} color="lightblue" />
        </NavLink>

        <NavLink activeclassname="active" className="education-link" to="/education">
          <FontAwesomeIcon icon={faGraduationCap} color="lightblue" />
        </NavLink>
        <NavLink activeclassname="active" className="experience-link" to="/experience">
          <FontAwesomeIcon icon={faBriefcase} color="lightblue" />
        </NavLink>

        <NavLink activeclassname="active" className="projects-link" to="/projects">
          <FontAwesomeIcon icon={faLaptop} color="lightblue" />
        </NavLink>

        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="lightblue" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/pranav-kapoor-08b2a619b/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="lightblue" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/PranavKapoor28"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="lightblue" />
          </a>
        </li>

        <li>
          <a href="mailto:pranavkapoor2k09@gmail.com?subject=SendMail&body=Description" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faSkype} color="lightblue" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar