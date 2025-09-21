import React, { useState } from 'react'
import './actions.css'
import agenda from '../../assets/partyIcons/agenda.png'
import location from '../../assets/partyIcons/mapa.png'
import dressCode from '../../assets/partyIcons/ropa.png'
import outfit from '../../assets/codigoDevest.png'
import deco4Actions from '../../assets/deco4.png'

import { MdOutlineTouchApp } from "react-icons/md";

const Actions = () => {

    // Estado para controlar el modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Función para abrir el modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Función para crear el enlace de Google Calendar
    const createGoogleCalendarLink = () => {
        const eventTitle = encodeURIComponent('🎉 XV Años de Daniella 🎉');
        const eventDate = '20251207T200000'; // 7 de diciembre de 2025 a las 8:00 PM
        const eventEndDate = '20251208T020000'; // 8 de diciembre de 2025 a las 2:00 AM
        const eventDescription = encodeURIComponent('Te espero para compartir la alegría de esa noche que será para mí mágica, inolvidable y única. 🥳✨');
        const eventLocation = encodeURIComponent('Ubicación de la fiesta'); // Puedes cambiar esto por la ubicación real

        const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${eventDate}/${eventEndDate}&details=${eventDescription}&location=${eventLocation}&sf=true&output=xml`;

        return googleCalendarUrl;
    };

    return (
        <>
            <div className='actionsContainer'>
                <h2 className='titleActionsContainer'>Fiesta</h2>

                <div className='actionsContent'>
                    <h2 className='titleActions'>AGENDAR</h2>
                    <span className='dateActions'>07/12/2025</span>
                    <a
                        href={createGoogleCalendarLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Agregar a Google Calendar"
                        className='agendaLink'
                    >
                        <img src={agenda} alt="Agregar a Google Calendar" />
                        <MdOutlineTouchApp size={40} className='iconTouch' />
                    </a>
                </div>


                <div className='actionsContent'>
                    <h2 className='titleActions'>¿COMO LLEGAR?</h2>
                    <span className='dateActions'>GUARDERIA NAUTICA RAMALLO</span>
                    <a
                        href="https://www.google.com/maps/place/Guarder%C3%ADa+N%C3%A1utica+Ramallo/@-33.4924215,-60.0331846,13z/data=!4m14!1m7!3m6!1s0x95b9fb6358ddd07b:0x783271813a0819a6!2sGuarder%C3%ADa+N%C3%A1utica+Ramallo!8m2!3d-33.4958882!4d-59.9921345!16s%2Fg%2F11g9sylv5d!3m5!1s0x95b9fb6358ddd07b:0x783271813a0819a6!8m2!3d-33.4958882!4d-59.9921345!16s%2Fg%2F11g9sylv5d?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Agregar a Google Calendar"
                        className='agendaLink'
                    >
                        <img src={location} alt="Agregar a Google Calendar" />
                        <MdOutlineTouchApp size={40} className='iconTouch' />
                    </a>
                </div>


                <div className='actionsContent'>
                    <h2 className='titleActions'>DRESS CODE</h2>
                    <span className='dateActions'>SEMI-FORMAL</span>
                    <a
                        className='agendaLink'
                        onClick={openModal}
                    >
                        <img src={dressCode} alt="Agregar a Google Calendar" />
                        <MdOutlineTouchApp size={40} className='iconTouch' />
                    </a>
                </div>

                <img className='deco4Actions' data-aos="fade-left" src={deco4Actions} alt="" />
                
            </div>

            {/* Modal para mostrar la imagen del código de vestimenta */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <p>X</p>
                        </button>
                        <div className="modal-image-container">
                            <img
                                src={outfit}
                                alt="Código de Vestimenta"
                                className="modal-image"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Actions