import React, { useState } from 'react'
import './confirmation.css'
import ConfirmationModal from '../confirmationModal/confirmationModal'

import confirmation from '../../assets/partyIcons/confirmacion.png'
import { MdOutlineTouchApp } from 'react-icons/md'

const Confirmation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <div className='confirmationContainer'>
            <div className='confirmationContent'>
                <h2 className='titleConfirmation'>!CONFIRMA TU ASISTENCIA!</h2>
                <p className='textConfirmation'>
                    Por favor, confirma tu asistencia para que podamos organizar la fiesta de manera adecuada.
                </p>
                <button className='buttonConfirmation' onClick={openModal}>
                    <img src={confirmation} alt="confirmation" className='confirmationImage' />
                    <MdOutlineTouchApp size={40} className='iconTouch' />
                </button>
            </div>

            <ConfirmationModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}

export default Confirmation