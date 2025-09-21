import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Diseño de{' '}
          <span className="developer-name">Carolina Maizo</span>
        </p>
        <a 
          href="https://wa.me/5493407458232" 
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contacto
        </a>
      </div>
    </footer>
  )
}

export default Footer
