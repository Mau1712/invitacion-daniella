import React, { useState } from "react";
import "./gift.css";
import gift from "../../assets/partyIcons/regalo.png";
import { MdOutlineTouchApp } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";

const Gift = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Aquí podrías mostrar una notificación de que se copió
      alert(`${type} copiado al portapapeles!`);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    <div className="giftContainer">
      <h2 className="titleGift">Regalo</h2>
      <p className="textGift">
        Si quieres regalarme algo mas que tu hermosa presencia{" "}
      </p>
      <button className="buttonGift" onClick={openModal}>
        <img src={gift} alt="gift" />
        <MdOutlineTouchApp size={40} className="iconTouch" />
      </button>

      {/* Modal de Transferencia */}
      {isModalOpen && (
        <div className="gift-modal-overlay" onClick={closeModal}>
          <div
            className="gift-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="gift-modal-close" onClick={closeModal}>
              <span>×</span>
            </button>

            <div className="gift-modal-header">
              <h3>Transferencia</h3>
              <p>Mercado Pago</p>
            </div>

            <div className="gift-modal-body">
              <div className="gift-field">
                <label>Alias</label>
                <div className="gift-input-group">
                  <input
                    type="text"
                    value="DANIELLA.0512"
                    readOnly
                    className="gift-input"
                  />
                  <button
                    className="gift-copy-btn"
                    onClick={() => copyToClipboard("DANIELLA.0512", "Alias")}
                  >
                    <MdContentCopy size={20} />
                  </button>
                </div>
              </div>

              <div className="gift-field">
                <label>CBU</label>
                <div className="gift-input-group">
                  <input
                    type="text"
                    value="0000003100061480080670"
                    readOnly
                    className="gift-input"
                  />
                  <button
                    className="gift-copy-btn"
                    onClick={() =>
                      copyToClipboard("0000003100061480080670", "CBU")
                    }
                  >
                    <MdContentCopy size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gift;
