import { MdKeyboardDoubleArrowDown } from 'react-icons/md'

import './intro.css'


const Intro = () => {
    return (
        <div className="IntroContainer">
            <div className='IntroContent'>

                <h3>MIS XV AÑOS</h3>
                <h1 className='title'>Daniella</h1>
                <h4>07 DE DICIEMBRE DE 2025</h4>
                <p style={{margin: "0px", fontWeight: "700"}} >21:00 hrs</p>
                <MdKeyboardDoubleArrowDown className="scroll-arrow" />
                <span>DESLIZA</span>

            </div>
        </div>
    )
}

export default Intro