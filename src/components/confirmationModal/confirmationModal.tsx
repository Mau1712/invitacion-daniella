import React, { useState } from 'react'
import './confirmationModal.css'

interface ConfirmationModalProps {
    isOpen: boolean
    onClose: () => void
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        confirmAttendance: false,
        fullName: '',
        notes: '',
        songSuggestion: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        const checked = (e.target as HTMLInputElement).checked

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const message = `🎉 Confirmación de Asistencia 🎉

Confirmo asistencia: ${formData.confirmAttendance ? 'SÍ' : 'NO'}
Nombre: ${formData.fullName}
Notas: ${formData.notes || 'Sin notas'}
Sugerencia de canción: ${formData.songSuggestion || 'Sin sugerencia'}

¡Nos vemos en la fiesta! 🥳`

        const whatsappUrl = `https://wa.me/5493407458232?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')
    }

    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <span>×</span>
                </button>

                <h2 className="modal-title">Confirmar Asistencia</h2>

                <form onSubmit={handleSubmit} className="confirmation-form">
                    <div className="form-group">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                name="confirmAttendance"
                                checked={formData.confirmAttendance}
                                onChange={handleInputChange}
                                className="checkbox-input"
                            />
                            <span className="checkmark"></span>
                            Confirmo mi asistencia a la fiesta
                        </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fullName">Nombre y Apellido *</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            className="form-input"
                            placeholder="Tu nombre completo"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="notes">Notas</label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                            className="form-textarea"
                            placeholder="Soy celiaco, soy intolerante a la lactosa, etc."
                            rows={3}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="songSuggestion">Sugiere una Canción</label>
                        <input
                            type="text"
                            id="songSuggestion"
                            name="songSuggestion"
                            value={formData.songSuggestion}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Nombre de la canción"
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        Confirmar y Enviar por WhatsApp
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ConfirmationModal
