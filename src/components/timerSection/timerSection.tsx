import React from 'react'
import Timer from '../Timer/Timer'
import './timerSection.css'
import deco2Timer from '../../assets/deco2.png'
import deco1Timer from '../../assets/deco.png'


export const TimerSection = () => {
    return (
        <div className='timerSectionContainer'>
            <div className='timerSectionContent'>
                <h2 className='titleTimer'>Falta</h2>
                <Timer />

                <p className='textTimer'>
                    Te espero para compartir la alegria de esa noche que sera para mi magica, inolvidable y unica.
                </p>
            </div>

            <img className='deco2Timer' data-aos="fade-right" src={deco2Timer} alt="" />
            <img className='deco1Timer' data-aos="fade-left" src={deco1Timer} alt="" />
        </div>
    )
}