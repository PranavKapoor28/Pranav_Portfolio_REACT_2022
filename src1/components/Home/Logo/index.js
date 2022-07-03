import './index.scss';
import { useEffect, useRef } from 'react'
import LogoS from '../../../assets/images/avatar.svg';

const Logo = () => {

    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    return (
        <div className='logo-container'>
            <div className="imgContainer">
                <img src={LogoS} alt="MyImage" />
            </div>
        </div>
    )
}

export default Logo;    