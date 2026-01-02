import React from 'react';

export default function SuccessModal({ show, onClose }) {
    if (!show) return null;

    return (
        <div className="modal-backdrop-custom">
            <div className="modal-content-custom animate-fade-in">
                <div className="modal-header-custom">
                    <h5>¡Gracias por tu compra!</h5>
                    <button type="button" className="modal-close-btn" onClick={onClose}>&times;</button>
                </div>
                
                <div className="modal-body-custom text-center">
                    <p className="fs-5">✅ Tu pedido ha sido registrado correctamente.</p>
                    <p className="text-muted">Un repartidor pronto irá con tu gas.</p>
                </div>
                
                <div className="modal-footer-custom justify-content-center">
                    <button className="btn btn-success btn-pill px-4 py-2" onClick={onClose}>
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}